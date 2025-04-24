<template>
    <div class="pa-all">
        <div class="pa-sidebar">


            <div class="pa-sidebar-search">


                <el-select v-model="now_tag" filterable placeholder=" 标签搜索" clearable @change="findX(now_tag)">

                    <el-option v-for="(value, key) in all_tags" :key="key" :label="`${key}`" :value="key" />

                </el-select>

            </div>


            <div class="pa-sidebar-tags">

                <div class="pa-sidebar-tags-tag" v-for="(value, key) in all_tags" @click="findX(key, `autoClose`)">
                    <div class="pa-sidebar-tags-tag-text">
                        {{ key }}
                    </div>
                    <div class="pa-sidebar-tags-tag-num">
                        {{ value }}
                    </div>
                </div>

            </div>


        </div>


        <div class="pa-main">

            <div class="pa-main-nav">

                <div class="pa-main-nav-item" @click="findX(`全部文章`)">
                    全部文章
                </div>

                <div class="pa-main-nav-item" @click="re_arr_by_random(sortedData)">
                    随机排序
                </div>

                <div class="pa-main-nav-item" @click="re_arr_by_time(sortedData)">
                    按最新排序
                </div>

                <div class="pa-main-nav-item" @click="re_arr_by_name(sortedData)">
                    按名称排序
                </div>


            </div>

            <div class="pa-main-content">


                <div class="pa-main-article" v-for="(item, key) in showData">

                    <div class="pa-main-article-time">
                        {{ formatDate(item.frontmatter.zoid) }}
                    </div>

                    <a class="pa-main-article-title" :href="withBase(item.url)">
                        {{ item.frontmatter.title }}
                    </a>

                    <div class=" pa-main-article-tags" v-for="xitem in item.frontmatter.tags.slice(0, 5)"
                        @click="findX(xitem, `autoClose`)">
                        {{ xitem }}

                    </div>

                </div>

            </div>




            <div class="pa-pagination">
                <el-pagination layout="total, prev, pager, next, jumper, sizes" :total="sortedData.length"
                    @current-change="handleCurrentChange" @size-change="handleSizeChange"
                    v-model:current-page="currentPage" v-model:page-size="pageSize"
                    :page-sizes="[10, 12, 16, 32, 64]" />
            </div>

            <div class="pa-pagination-for-app">
                <el-pagination layout="total, prev, next, jumper" :total="sortedData.length"
                    @current-change="handleCurrentChange" @size-change="handleSizeChange"
                    v-model:current-page="currentPage" v-model:page-size="pageSize"
                    :page-sizes="[10, 12, 16, 32, 64]" />
            </div>




        </div>

    </div>

</template>

<script setup>

import { ref, watch } from 'vue'
import { withBase, useData } from 'vitepress'
import { data } from '/zo-data/articles.data.js'

import { admin_key, base } from '../../../../zo-data/key';
import { useRoute } from 'vitepress'
import { onMounted, onUpdated } from 'vue'





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





const pageSize = ref(12)


const currentPage = ref(0)


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
let showData = ref(sortedData.value.slice(0, pageSize.value))




const show_tabs = ref(false)


// 定义 tag 对象
let all_tags = ref([])
// 定义当前的 tag
let now_tag = ref('全部文章')

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



const findX = (momo, autoClose) => {
    if (autoClose) {
        show_tabs.value = false
    }

    now_tag.value = momo

    let res = []
    if (momo == '全部文章') {


        res = allData


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

    showData.value = res.slice(0, pageSize.value)


}


// 随机排列
const re_arr_by_random = (arr) => {
    sortedData.value = arr.sort(() => Math.random() - 0.5);
    showData.value = sortedData.value.slice(0, pageSize.value)
}

// 按时间排序

const re_arr_by_time = (arr) => {
    sortedData.value = arr.sort((a, b) => b.frontmatter.time - a.frontmatter.time)

    showData.value = sortedData.value.slice(0, pageSize.value)
}

// 根据名称排序
const re_arr_by_name = (arr) => {
    // 根据 name 排序
    sortedData.value = arr.sort((x, y) => {
        let reg = /[a-zA-Z0-9]/
        if (reg.test(x.frontmatter.title) || reg.test(y.frontmatter.title)) {
            if (x.frontmatter.title > y.frontmatter.title) {
                return 1
            } else if (x.frontmatter.title < y.frontmatter.title) {
                return -1
            } else {
                return 0
            }
        } else {
            return x.frontmatter.title.localeCompare(y.frontmatter.title)
        }
    })

    showData.value = sortedData.value.slice(0, pageSize.value)

}



const handleCurrentChange = (momo) => {
    let start = (momo - 1) * pageSize.value
    let end = momo * pageSize.value
    showData.value = sortedData.value.slice(start, end)
}


const handleSizeChange = (momo) => {

    showData.value = sortedData.value.slice(0, momo)
}

const formatDate = (momo) => {
    let year = momo.slice(0, 2)
    let month = momo.slice(2, 4)
    let day = momo.slice(4, 6)
    return `⏰20${year}年${month}月${day}日`
}











</script>

<style lang="scss" scoped>
@import '../../style/vars.scss';
@import './my.scss';
@import url(./app.scss);
</style>