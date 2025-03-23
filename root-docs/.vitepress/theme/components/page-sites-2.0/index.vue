<template>
    <div class="ps-all">

        <div class="ps-nav">

            <div :class="['ps-nav-item', { 'active': nowActiveIndex === index }]" v-for="(item, index) in sites"
                @click="get_sites(item.value, index)">{{ item.value }}</div>
        </div>


        <div class="ps-content">

            <div class="ps-sites-card" v-for="item in level_2_classlist">
                <div class="ps-sites-card-title">{{ item.value }}</div>
                <div class="ps-sites">
                    <div class="ps-site" v-for="item2 in item.children">
                        <div class="ps-site-info">
                            <img :src="withBase(getIconUrl(item2.icon))" alt="" class="ps-site-icon">

                            <a :href="item2.link" target="_blank" rel="noopener noreferrer" class="ps-site-title"> {{
                                item2.value }}</a>
                        </div>
                        <div class="ps-site-intro">{{ item2.intro }}</div>
                    </div>
                </div>
            </div>



        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import { sites_data } from '/zo-data/sites'
import { withBase, useData } from 'vitepress'
import { getIconUrl } from '../../../myscript/getURL'


// 获取网址的原始信息
const sites = ref(sites_data)

const nowActiveIndex = ref(0)

let now_class_1_selected = ref('常用网址')

const level_2_classlist = ref([])


const get_sites = (momo, nono) => {

    nowActiveIndex.value = nono

    now_class_1_selected.value = momo
    // 找到数据
    level_2_classlist.value = sites.value.filter((item, index) => item.value == now_class_1_selected.value)
    // 提取数据
    level_2_classlist.value = level_2_classlist.value[0].children
}

get_sites(now_class_1_selected.value, 0)


</script>

<style lang="scss" scoped>
.active {
    // background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
    // -webkit-background-clip: text;
    // background-clip: text;
    // color: transparent;
    // transition: background 0.5s;
    // font-weight: 800;
    color: rgb(151, 151, 151);
    transition: all 0.6s linear;



}

.ps-all {

    $lineColor: #f5f0f0;
    background-image:
        linear-gradient($lineColor 1px, transparent 1px),

        linear-gradient(to right, $lineColor 1px, transparent 1px);

    background-size: 100% 10px, 10px 100%;
    background-position: 0 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 92vh;


    .ps-nav {
        min-width: 1300px;
        height: 60px;
        margin-top: 30px;
        background-color: white;

        box-shadow: 2px 2px 3px #dedede inset,
            -2px -2px 3px #ffffff inset;

        border-radius: 10px;


        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        padding: 0 10px;

        .ps-nav-item {
            width: 80px;
            height: 30px;
            line-height: 30px;
            background-color: #dedede;
            background-color: white;
            border-radius: 5px;
            margin: 0 12px;
            text-align: center;
            box-shadow: 2px 2px 3px #dedede,
                -2px -2px 3px #f7f3f3;
            font-family: '优设标题黑';
            font-size: 16px;
        }

        .ps-nav-item:hover {
            // background: linear-gradient(45deg, #1d7e76, #6eb0ca, #5464b3, #3a2d8a, #432768, #b0339d);
            // -webkit-background-clip: text;
            // background-clip: text;
            // color: transparent;
            // transition: background 0.5s;
            color: rgb(151, 151, 151);
            transition: all 0.3s linear;


        }


    }

    .ps-content {
        min-width: 1300px;

        max-height: 80vh;
        background-color: white;
        margin-top: 20px;
        box-shadow: 2px 2px 3px #dedede inset,
            -2px -2px 3px #ffffff inset;

        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: scroll;
        padding-bottom: 50px;

        .ps-sites-card {
            margin-top: 30px;
            width: 1240px;

            display: flex;
            flex-direction: column;


            .ps-sites-card-title {
                font-family: '剑豪体';

                margin-bottom: 5px;

            }

            .ps-sites {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;

                .ps-site {

                    margin: 10px;
                    width: 225px;
                    height: 100px;
                    border: 2px white dotted;

                    border-radius: 5px;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    padding: 10px 20px;


                    box-shadow: 5px 5px 12px #dedede,
                        -5px -5px 12px #f8f8f8;

                    .ps-site-info {
                        display: flex;
                        flex-direction: row;

                        .ps-site-icon {

                            width: 40px;
                            height: 40px;
                            background-color: white;
                            border-radius: 5px;
                            padding: 2px;
                            box-shadow: 2px 2px 3px #dedede,
                                -2px -2px 3px #f7f3f3;
                        }

                        .ps-site-title {
                            margin-left: 20px;
                            height: 40px;
                            line-height: 40px;
                            font-size: 15px;
                            font-weight: 600;
                            font-family: 'zqk英文';

                        }

                    }

                    .ps-site-intro {
                        margin-top: 5px;
                        height: 30px;
                        color: rgb(148, 143, 143);
                        font-size: 12px;
                        line-height: 15px;
                        display: flex;
                        align-items: center;
                    }
                }

                .ps-site:hover {

                    border: 2px rgb(109, 188, 219) dotted;
                    background-color: white;

                    transition: all 0.6s linear;

                    box-shadow: none;

                    background-image: none;



                    .ps-site-info {

                        transition: all 0.6s linear;

                        .ps-site-icon {
                            width: 40px;
                            height: 40px;
                            background-color: white;
                            border-radius: 5px;
                            padding: 2px;
                            transition: all 0.6s linear;

                        }

                        .ps-site-title {
                            color: rgb(136, 166, 226);

                            transition: all 0.6s linear;


                        }

                    }

                    .ps-site-intro {
                        color: rgb(86, 172, 230);

                        transition: all 0.6s linear;


                    }
                }
            }
        }



    }


    .ps-container {
        background-color: white;
    }
}
</style>