<template>
    <div class="ph-all">
        <div class="ph-sidebar">
            <div class="ph-sidebar-card">
                <img src="/icon/png/logo.png" alt="" class="ph-sidebar-card-img">
                <div class="ph-sidebar-card-title">{{ myTheme.administrator }}</div>
                <div class="ph-sidebar-card-intro">{{ myTheme.motto }}</div>
                <div class="ph-sidebar-card-social">


                    <a class="ph-sidebar-card-social-icon" v-for="item in myTheme.socialLinks" :href="item.link"
                        target="_blank">
                        <i :class="getSocialLinkIcon(item.name)"></i>
                    </a>

                </div>
            </div>

            <div class="ph-sidebar-card">

                <ZoClock />
            </div>



            <div class="ph-sidebar-card">

                <div class="ph-sidebar-card-articleNumGroup">
                    <div class="ph-sidebar-card-articleNum" @click="toPageWithTag(`本周文章`)">
                        <div class="ph-sidebar-card-articleNum-num">{{ all_tags.本周文章 || 0 }}</div>
                        <div class="ph-sidebar-card-articleNum-type">本周更新</div>

                    </div>

                    <div class="ph-sidebar-card-articleNum" @click="toPageWithTag(`本月文章`)">
                        <div class="ph-sidebar-card-articleNum-num">{{ all_tags.本月文章 || 0 }}</div>
                        <div class="ph-sidebar-card-articleNum-type">本月更新</div>

                    </div>

                    <div class="ph-sidebar-card-articleNum" @click="toPageWithTag(`全部文章`)">
                        <div class="ph-sidebar-card-articleNum-num">{{ all_tags.全部文章 || 0 }}</div>
                        <div class="ph-sidebar-card-articleNum-type">全部文章</div>

                    </div>

                </div>


            </div>

            <!-- <div class="ph-sidebar-card">

                <div class="ph-article-tags">
                    <div class="ph-article-tag" v-for="item in all_tags.slice(0, 10)">{{ item }}</div>
                </div>

            </div> -->





        </div>


        <div class="ph-main">

            <div class="ph-main-nav">
                <div class="ph-main-nav-item" @click="changeNowPage(0)">文章</div>
                <div class="ph-main-nav-item" @click="changeNowPage(1)">网站</div>
                <div class="ph-main-nav-item" @click="changeNowPage(2)">笔记</div>
                <div class="ph-main-nav-item" @click="changeNowPage(3)">生活</div>

            </div>


            <div class="ph-main-content">

                <div class="" v-if="nowPage == 0">
                    我是默认
                </div>

                <div class="" v-if="nowPage == 1">
                    <PageSite />
                </div>

                <div class="" v-if="nowPage == 2">
                    我是笔记
                </div>

                <div class="" v-if="nowPage == 3">
                    我是生活
                </div>

            </div>


        </div>




    </div>
</template>

<script setup>
import ZoClock from '../zo-clock/index.vue';
import { ref } from 'vue'
import { useRouter } from 'vitepress'
import { myTheme } from '../../../../zo-data/theme';
import { data } from '/zo-data/articles.data.js'
import { base } from '../../../../zo-data/key'
import { getALLTags, getALLTagsSorted } from '../../../myscript/getAllTags';
import { formatDate2 } from '../../../myscript/formatDate';
import { withBase } from 'vitepress';
import { getIconUrl, getCoverUrl } from '../../../myscript/getURL'
import { getArticleOutline } from '../../../myscript/getArticleInfo'
import { usePostDataStore } from '../../../stores/router'
import { useArticlesDataStore } from '../../../stores/router'
import PageSite from '../page-sites-x/index.vue'


const posts = usePostDataStore()

const articles = useArticlesDataStore()


// 0 文章 1 网址 2 笔记 3 生活
const nowPage = ref(0)

const changeNowPage = (mo) => {
    nowPage.value = mo
}

const getSocialLinkIcon = (momo) => {
    return `iconfont icon-${momo}`
}

const all_tags = ref(getALLTags(data))



const router = useRouter()
const toPageWithTag = (tag) => {
    localStorage.setItem('now_tag', JSON.stringify({ token: tag }))

    if (base == '/') {
        router.go(`/zo-pages/all-articles?tag=${tag}`)

    }

    router.go(`${base}zo-pages/all-articles?tag=${tag}`)
}

const toPage = () => {
    if (base == '/') {
        router.go(`/zo-pages/all-articles?tag=${tag}`)

    }

    router.go(`${base}zo-pages/all-articles?tag=${tag}`)

}





</script>




<style lang="scss" scoped>
@import './my.scss';

@import './app.scss';
</style>