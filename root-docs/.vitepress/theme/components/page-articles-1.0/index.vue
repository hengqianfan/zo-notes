<template>
    <div class="page-articles-all">

        <div class="pa-main">

            <div class="pa-navbar">

                <div class="pa-navbar-info">



                    <el-badge :value="allData.length" class="item" type="primary" @click="findX(`全部文章`)">
                        <el-button>全部文章</el-button>
                    </el-badge>

                    <el-badge :value="findArticlesNum(`本月文章`) || 0" class="item" type="primary" @click="findX(`本月文章`)">
                        <el-button>本月文章</el-button>
                    </el-badge>

                    <el-badge :value="findArticlesNum(`本周文章`) || 0" class="item" type="primary" @click="findX(`本周文章`)">
                        <el-button>本周文章</el-button>
                    </el-badge>

                    <el-button @click="re_arr(showData)">随机排序</el-button>



                </div>


                <div class="pa-navbar-search">
                    <el-select v-model="now_tag" filterable placeholder="搜索标签" style="width: 120px" clearable
                        @change="findX(now_tag)">
                        <el-option v-for="(value, key) in all_tags" :key="key" :label="`${key}`" :value="key" />
                    </el-select>
                </div>

                <el-switch v-model="show_tabs" :active-action-icon="View" :inactive-action-icon="Hide"
                    inactive-text="标签分类" />


            </div>




            <div class="pa-tabbar" v-if="show_tabs">
                <el-button class=" pa-navbar-tabbar-item" v-for="(value, key) in all_tags"
                    @click="findX(key, `autoClose`)">
                    <div class="pa-navbar-tabbar-item-text">{{ key }}</div>
                    <div class="pa-navbar-tabbar-item-num">{{ value }}</div>
                </el-button>
            </div>




            <div class="pa-content">


                <div class="list">




                    <div class="pa-article-card" v-for="(item, key) in showData">

                        <div class="pa-article-card-cover">
                            <img :src="withBase(getImgSrc(item.frontmatter.zoid, item.frontmatter.cover))"
                                class="pa-article-card-cover-img"
                                onerror="this.onerror=null; this.src=`https://hengqianfan.github.io/zo-notes/cover/momo.png` ">
                        </div>




                        <a class="pa-article-card-title" :href="withBase(item.url)">{{
                            getTitle(item.frontmatter.title) }}</a>

                        <div class="pa-article-card-info">
                            <div class="pa-article-card-time">{{ formatDate(item.frontmatter.zoid) }}</div>
                            <div class="pa-article-card-tags" @click="findX(xitem, `autoClose`)"
                                v-for="xitem in item.frontmatter.tags.slice(0, 3)">{{
                                    xitem }}</div>
                        </div>


                    </div>







                </div>




            </div>

            <div class="pa-pagination">
                <el-pagination :default-page-size="pageSize" layout="total, prev, pager, next, jumper"
                    :total="sortedData.length" @current-change="handleCurrentChange" />
            </div>



        </div>


    </div>
</template>

<script setup>
// import './app.scss'
import { ref, watch, onMounted, onUpdated } from 'vue'
import { withBase, useData } from 'vitepress'
import { data } from '/zo-data/articles.data.js'
import { Hide, View } from '@element-plus/icons-vue'
import { admin_key } from '../../../../zo-data/key';
import { getALLTags } from '../../../myscript/getAllTags';
import { formatDate } from '../../../myscript/formatDate';


onMounted(() => {
    // 如果存在 tag  
    if (localStorage.getItem('now_tag')) {
        // 提取数据
        const res = JSON.parse(localStorage.getItem('now_tag'))
        // 查询具有相关 tag 的文章
        findX(res.token)
    }
})

onUpdated(() => {
    // 在重置数据 , 避免非文章中的正常跳转还保留上次标签的内容
    localStorage.setItem('now_tag', JSON.stringify({ token: '全部文章' }))
})

const pageSize = 10

const getImgSrc = (momo, cover) => {
    // 如果存在特定封面，特定封面优先
    if (cover) {
        return cover
    }
    return `/cover/${momo}.png`
}

// 是否开放所有文章

const isOpen = ref(false)


// 判断是否是管理员
const isAdmin = () => {
    let res = localStorage.getItem('admin')
    if (res == admin_key) {
        isOpen.value = true
    }
}

isAdmin()

// 设置过滤，将不公开文章排除
const removeData = (data) => {
    let outdata = []
    for (let i = 0; i < data.length; i++) {

        if (data[i].frontmatter.open !== false) {
            outdata.push(data[i])
        }
    }
    return outdata
}

// 在具备管理权限时，不过滤文章！
const allData = isOpen.value ? data : removeData(data)

let sortedData = ref(allData)

// 展示的数据
let showData = ref(sortedData.value.slice(0, pageSize))


const show_tabs = ref(false)


// 定义 tag 对象
let all_tags = ref([])
// 定义当前的 tag
let now_tag = ref('全部')


all_tags.value = getALLTags(allData)

const getIcon = (momo) => {
    if (momo) {
        return `/icon/png/${momo}.png`
    }
    return `/icon/png/article.png`
}

const getTitle = (momo) => {
    // 去掉文件的后缀名
    let res = momo.split('.md')[0]
    return res
}

const toPage = (momo) => {
    open(`/mo-notes/articles/${momo}`)
}




const findX = (momo, autoClose) => {
    if (autoClose) {
        show_tabs.value = false
    }

    now_tag.value = momo

    let res = []
    if (momo == '全部文章') {


        res = allData


        console.log(res);

    } else {
        res = allData.filter((item, index) => {
            if (item.frontmatter.tags) {
                if (item.frontmatter.tags.includes(momo)) {
                    return item
                }
            }
        })
    }

    sortedData.value = res

    showData.value = res.slice(0, pageSize)


}


// 随机排列
const re_arr = (arr) => {
    showData.value = arr.sort(() => Math.random() - 0.5);
}



const findArticlesNum = (momo) => {
    if (momo == `本月文章`) {
        return all_tags.value[`本月文章`]

    } else if (momo == `本周文章`) {
        return all_tags.value[`本周文章`]
    } else {
        return 0
    }
}


const handleCurrentChange = (momo) => {
    let start = (momo - 1) * pageSize
    let end = momo * pageSize
    showData.value = sortedData.value.slice(start, end)
}





const openWeb = (url) => {
    // console.log(url);

    // window.open("https://www.baidu.com", '_blank')
}

</script>

<style lang="scss" scoped>
@import './app.scss';
@import '../../style/vars.scss';
@import './my.scss';

.list-enter-active,
.list-leave-active {
    transition: all 0.8s ease;


}

.list-enter-from,
.list-leave-to {


    opacity: 0;
    transform: translateX(30px);
}
</style>