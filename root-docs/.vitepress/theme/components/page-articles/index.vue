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



            <transition name="test1">
                <div class="pa-tabbar" v-if="show_tabs">
                    <el-button class=" pa-navbar-tabbar-item" v-for="(value, key) in all_tags"
                        @click="findX(key, `autoClose`)">
                        <div class="pa-navbar-tabbar-item-text">{{ key }}</div>
                        <div class="pa-navbar-tabbar-item-num">{{ value }}</div>
                    </el-button>
                </div>
            </transition>

            <div class="pa-content">


                <div class="list">

                    <transition-group name="list">


                        <div class="pa-article-card" v-for="(item, key) in showData">

                            <div class="pa-article-card-cover">
                                <img :src="withBase(getImgSrc(item.frontmatter.zoid, item.frontmatter.cover))"
                                    class="pa-article-card-cover-img"
                                    onerror="this.onerror=null; this.src='https://hengqianfan.github.io/zo-notes/cover/momo.png' ">
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

                        <!-- <el-pagination layout="prev, pager, next" :total="data.length" /> -->


                    </transition-group>



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
import { ref, watch } from 'vue'
import { withBase, useData } from 'vitepress'
import { data } from '/zo-data/articles.data.js'
import { Hide, View } from '@element-plus/icons-vue'
import { admin_key } from '../../../../zo-data/key';


const pageSize = 8

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

// 从数据中提取所有的 tag 放入 tag 数组中
const getALLTags = (data) => {
    // 先清空数据
    all_tags.value = []


    // 临时存放数据的数组
    let temp_arr = []
    // 遍历原始数据，把所有 tag 添加到 临时数组中
    for (let i = 0; i < data.length; i++) {



        // 先判断是否存在 信息中是否存在 tag ⭐
        if (data[i].frontmatter.tags) {
            // 获取当前文章的 tag 数组
            let now_tagarr = data[i].frontmatter.tags
            // 解构数组后，再添加到临时数组中
            temp_arr.push(...now_tagarr)
        }

    }


    // 数组去重并统计数量
    let obj = {}
    for (let i = 0; i < temp_arr.length; i++) {
        if (temp_arr[i] in obj) {
            obj[temp_arr[i]] = obj[temp_arr[i]] + 1;
        } else {
            obj[temp_arr[i]] = 1;
        }
    }

    // 补充一个总数
    // 暂时这样写，有更好的写法再说
    obj.全部文章 = data.length



    // 根据属性值排序

    const sortObj = (obj) => {
        // 降序排序value值
        let sortValue = Object.values(obj).sort((a, b) => {
            return b - a;
        })
        // 创建结果数组
        let res = {}
        // keys数组
        let keys = Object.keys(obj);
        // 给value值赋值相应keys值
        for (let i in sortValue) {
            // console.log(i);
            keys.forEach((item) => {
                if (sortValue[i] === obj[item]) {
                    res[item] = sortValue[i];
                }
            })
        }
        return res;
    }


    // 最后，把数据赋值给外部对象
    all_tags.value = sortObj(obj)

}

getALLTags(allData)

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

const formatDate = (momo) => {
    let year = momo.slice(0, 2)
    let month = momo.slice(2, 4)
    let day = momo.slice(4, 6)
    return `⏰20${year}年${month}月${day}日`
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