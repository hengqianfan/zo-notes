<template>
    <div class="page-articles-all">

        <div class="pa-main">
            <div class="pa-navbar">

                <div class="pa-navbar-info">

                    <div class="pa-navbar-info-item">
                        <div class="pa-navbar-info-item-title">
                            全部文章
                        </div>
                        <div class="pa-navbar-info-item-num">
                            {{ allnum }}
                        </div>
                    </div>

                    <div class="pa-navbar-info-item">
                        <div class="pa-navbar-info-item-title">
                            全部文章
                        </div>
                        <div class="pa-navbar-info-item-num">
                            {{ allnum }}
                        </div>
                    </div>

                    <div class="pa-navbar-info-item">
                        <div class="pa-navbar-info-item-title">
                            全部文章
                        </div>
                        <div class="pa-navbar-info-item-num">
                            {{ allnum }}
                        </div>
                    </div>

                </div>


                <div class="pa-navbar-search">
                    <el-select v-model="now_tag" filterable placeholder="搜索标签" style="width: 120px" clearable
                        @change="findX(now_tag)">
                        <el-option v-for="(value, key) in all_tags" :key="key" :label="`${key}`" :value="key" />
                    </el-select>
                </div>

                <el-switch v-model="show_tabs" :active-action-icon="View" :inactive-action-icon="Hide" />


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



                        <div class="pa-article-card" v-for="item in showData">

                            <div class="pa-article-card-zoid">{{ item.frontmatter.id || 0 }}</div>



                            <img :src="withBase(getIcon(item.frontmatter.icon))" alt="" class="pa-article-card-icon">



                            <a class="pa-article-card-title" :href="withBase(item.url)">{{
                                getTitle(item.frontmatter.title) }}</a>


                        </div>
                    </transition-group>


                </div>



            </div>
        </div>


        <div class="pa-side">



            <div class="pa-side-2">
                <div class="pa-side-2-item">最近文章</div>
                <div class="pa-side-2-articles">
                    <div class="pa-side-2-article" v-for="(item, index) in newList" v-show="index < 10">
                        {{ index + 1 }}

                        {{ item.frontmatter.id + `:` }}

                        {{ item.frontmatter.title }}
                        <br>
                        ---
                    </div>
                </div>
            </div>

            <div class=""></div>



        </div>





    </div>
</template>

<script setup>
// import './app.scss'
import { ref, watch } from 'vue'
import { withBase, useData } from 'vitepress'
import { data } from '/zo-data/articles.data.js'
import { Hide, View } from '@element-plus/icons-vue'

const showData = ref(data)


const allnum = data.length


const show_tabs = ref(false)

// 定义 tag 对象
let all_tags = ref({})
// 定义当前的 tag
let now_tag = ref('全部')

// 从数据中提取所有的 tag 放入 tag 数组中
const getALLTags = () => {
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

getALLTags()

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
        show_tabs.value = !show_tabs.value
    }

    now_tag.value = momo

    let res = []
    if (momo == '全部文章') {
        res = data
    } else {
        res = data.filter((item, index) => {
            if (item.frontmatter.tags) {
                if (item.frontmatter.tags.includes(momo)) {
                    return item
                }
            }
        })
    }
    showData.value = res
}


let newList = data.reverse().slice(0, 11)

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