<template>
    <div class="xPerson-all">

        <img src="/icon/png/logo.png" alt="" class="xPerson-icon">
        <div class="xPerson-title">{{ myTheme.administrator }}</div>
        <div class="xPerson-intro">{{ myTheme.motto }}</div>
        <div class="xPerson-social">


            <a class="xPerson-social-icon" v-for="item in myTheme.socialLinks" :href="item.link" target="_blank">
                <i :class="getSocialLinkIcon(item.name)"></i>
            </a>

        </div>

    </div>

</template>

<script setup>
import { myTheme } from '../../../../zo-data/theme';
const getSocialLinkIcon = (momo) => {
    return `iconfont icon-${momo}`
}
</script>

<style lang="scss" scoped>
.xPerson-all {
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

    .xPerson-icon {
        width: 100px;
        height: 100px;
        border-radius: 20px;
        background-color: #f5f0f0;
        padding: 2px;
    }

    .xPerson-title {
        margin-top: 10px;
        font-family: '剑豪体';
    }

    .xPerson-intro {
        font-size: 12px;
        color: rgb(189, 186, 186);
    }

    .xPerson-social {
        padding-top: 5px;
        display: flex;
        flex-direction: row;

        .xPerson-social-icon {
            margin: 0 10px;
        }
    }
}



.ph-all {




    .ph-sidebar {


        .ph-sidebar-card {


            .ph-sidebar-card-img {}

            .ph-sidebar-card-title {}








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


.ph-article-tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0px 20px;

    .ph-article-tag {
        min-width: 50px;
        height: 25px;
        line-height: 25px;
        text-align: center;
        padding: 0 10px;
        background-color: #cacfe7;
        border-radius: 5px;
        margin: 5px;
        color: white;

    }
}
</style>