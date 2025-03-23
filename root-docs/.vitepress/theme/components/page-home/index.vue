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
import { getALLTags } from '../../../myscript/getAllTags';
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
.el-alert {
    margin: 20px 0 0;
}

.el-alert:first-child {
    margin: 0;
}

.ph-all {


    $lineColor: #f5f0f0;
    background-image:
        linear-gradient($lineColor 1px, transparent 1px),

        linear-gradient(to right, $lineColor 1px, transparent 1px);

    background-size: 100% 10px, 10px 100%;

    background-position: 0 0;


    height: 90vh;
    display: flex;
    flex-direction: row;

    padding: 20px 20vh;

    .ph-sidebar {
        width: 400px;
        // background-color: #f5f0f0;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px;

        .ph-sidebar-card {
            width: 300px;
            background-color: white;
            display: flex;
            flex-direction: column;
            align-items: center;

            border-radius: 12px;
            padding: 20px 0;
            margin-bottom: 25px;

            box-shadow: 5px 5px 18px #dedede,
                -5px -5px 18px #ffffff;

            .ph-sidebar-card-img {
                width: 100px;
                height: 100px;
                border-radius: 20px;
                background-color: #f5f0f0;
                padding: 2px;



            }

            .ph-sidebar-card-title {
                margin-top: 10px;
                font-family: '剑豪体';
            }



            .ph-sidebar-card-intro {
                font-size: 12px;
                color: rgb(189, 186, 186);
            }

            .ph-sidebar-card-social {
                padding-top: 5px;
                display: flex;
                flex-direction: row;

                .ph-sidebar-card-social-icon {
                    margin: 0 10px;
                }
            }




            .ph-sidebar-card-articleNumGroup {
                display: flex;
                flex-direction: row;

                .ph-sidebar-card-articleNum {
                    margin: 0 6px;
                    width: 80px;
                    height: 60px;
                    background-color: white;
                    // box-shadow: 0.1875rem 0.1875rem .125rem #f0f0f0,
                    //     -0.1875rem -0.1875rem .125rem #faf8f8;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;


                    .ph-sidebar-card-articleNum-num {
                        display: flex;
                        justify-content: center;
                        font-size: 20px;
                        font-family: '优设标题黑';
                        color: #24243b;
                    }

                    .ph-sidebar-card-articleNum-type {
                        display: flex;
                        justify-content: center;
                        border-bottom: #dedede;
                        // font-family: '标小智龙珠体';

                        font-size: 14px;
                        color: #b6b2b2;
                    }

                }

            }




        }

    }

    .ph-main {
        display: flex;
        flex-direction: column;
        margin-left: 50px;

        .ph-announcement {

            background-color: white;

            box-shadow: 5px 5px 18px #dedede,
                -5px -5px 18px #ffffff;
            width: 600px;
            height: 400px;
            margin-bottom: 40px;
        }
    }

    .ph-sidebar2 {
        margin-left: 100px;
        // background-color: #1d7e76;
        width: 500px;
        min-height: 80vh;
        display: flex;
        flex-direction: column;
        align-items: center;

        .ph-life-title {
            width: 400px;
            height: 50px;
            box-shadow: 5px 5px 18px #dedede,
                -5px -5px 18px #f8f8f8;
            line-height: 50px;

            background-color: white;
        }

        .ph-life-card {
            margin-top: 20px;
            width: 450px;
            height: 253.125px;

            background-color: rgb(253, 253, 253);

            padding: 0 20px;

            box-shadow: 5px 5px 18px #dedede,
                -5px -5px 18px #f8f8f8;

            border-radius: 10px;

            // background-color: rebeccapurple;
            .ph-life-card-title {
                height: 20px;
                line-height: 20px;
                font-size: 13px;
                font-family: '优设标题黑';
                text-align: center;
            }

            .ph-life-card-img {
                width: 410px;
                height: 213.125px;

            }
        }
    }
}

.ph-main-timeline {
    margin-top: 30px;
}

.ph-main-timeline-card {
    display: flex;
    flex-direction: row !important;
    align-items: center;

    .ph-main-timeline-card-icon {
        width: 30px;
        height: 30px;
    }

    .ph-main-timeline-card-title {
        margin-left: 20px;
        font-family: '剑豪体';
        font-size: 18px;
    }


}


.ph-main-timeline-card-container:hover {
    // background-color: rgb(247, 247, 247);

    // background: transparent;

    .ph-main-timeline-card {
        .ph-main-timeline-card-title {
            background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            transition: background 0.5s;
            font-weight: 800;
        }
    }
}


.tags-container {
    width: 300px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // padding: 10px;

    .tag {
        margin: 10px;
        min-width: 100px;
        height: 20px;
        line-height: 20px;
        background-color: aliceblue;
    }
}
</style>