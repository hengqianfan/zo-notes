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
            <el-alert title="此处查看本站使用说明" type="info" :closable="false" @click="toPage()" />

            <!-- <el-alert title="本站处于测试阶段," type="error" /> -->


            <div class="ph-main-timeline">
                <el-timeline style="max-width: 900px">
                    <el-timeline-item :timestamp="formatDate2(item.frontmatter.zoid)" placement="top"
                        v-for="item in data.slice(0, 6)">
                        <el-card class="ph-main-timeline-card-container">
                            <div class="ph-main-timeline-card">
                                <img :src="withBase(getIconUrl(item.frontmatter.icon))" alt=""
                                    class="ph-main-timeline-card-icon">
                                <!-- <div class="ph-main-timeline-card-title" @click="toPage()">{{ item.frontmatter.title }}
                                </div> -->

                                <a class="ph-main-timeline-card-title" :href="withBase(item.url)">{{
                                    item.frontmatter.title }}</a>
                                <!-- <div class="">{{ getArticleOutline(item.src) }}</div> -->
                            </div>
                            <!-- <p>Tom committed 2018/4/12 20:46</p> -->
                        </el-card>


                    </el-timeline-item>

                </el-timeline>
            </div>
        </div>

        <div class="ph-sidebar2">

            <!-- <div class="ph-life-title">
                生活碎片
            </div> -->

            <div class="ph-life-card">
                <div class="ph-life-card-title"> 我的日常</div>

                <el-carousel autoplay arrow="always">
                    <el-carousel-item v-for="item in posts.data" :key="item">
                        <a :href="withBase(item.url)">
                            <img :src="withBase(getCoverUrl(item.frontmatter.cover))" alt="" class="ph-life-card-img">
                        </a>
                    </el-carousel-item>
                </el-carousel>

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
import { getALLTags, getALLTagsSorted } from '../../../myscript/getAllTags';
import { formatDate2 } from '../../../myscript/formatDate';
import { withBase } from 'vitepress';
import { getIconUrl, getCoverUrl } from '../../../myscript/getURL'
import { getArticleOutline } from '../../../myscript/getArticleInfo'
import { usePostDataStore } from '../../../stores/router'
import { useArticlesDataStore } from '../../../stores/router'


const posts = usePostDataStore()

const articles = useArticlesDataStore()






const getSocialLinkIcon = (momo) => {
    return `iconfont icon-${momo}`
}

const all_tags = ref(getALLTags(data))






const router = useRouter()
const toPageWithTag = (tag) => {

    localStorage.setItem('now_tag', JSON.stringify({ token: tag }))
    router.go(`/zo-notes/zo-pages/all-articles?tag=${tag}`)
}

const toPage = () => {
    router.go(`/zo-notes/zo-pages/about`)
}





</script>




<style lang="scss" scoped>
@import './my.scss';

@import './app.scss';
</style>