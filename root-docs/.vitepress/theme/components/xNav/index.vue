<template>
    <div class="xhead">
        <div class="xNav-all">
            <div class="xNav-siteInfo">
                <!-- <div class="xNav-siteIcon">logo</div> -->
                <div class="xNav-siteTitle">ZONOTES</div>
            </div>
            <div class="xNav-menu">
                <div class="xNav-menu-item" @click="toPage(item.link)" v-for="item in navList">
                    {{ item.title }}
                </div>



            </div>
        </div>
    </div>


</template>

<script setup>
import { useRouter } from 'vitepress'
import { base } from '../../../../zo-data/key'
const navList = [
    {
        title: '主页',
        link: '/home'
    },
    {
        title: '导航',
        link: '/sites'
    },
    {
        title: '文章',
        link: '/articles'
    },
    {
        title: '笔记',
        link: '/notes'
    },
    {
        title: '生活',
        link: '/life'
    },
    {
        title: '关于',
        link: '/about'
    }
]
const router = useRouter()
const toPage = (momo) => {
    if (momo == '/') {
        console.log('deded');

        router.go('/')
    }

    router.go(`${base}zo-pages${momo}`)


}
</script>

<style lang="scss" scoped>
.xhead {
    position: relative;
    background-color: white;

    .xNav-all {
        height: var(--MVP-nav-height);
        // background-color: rebeccapurple;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 20vh;
        // position: absolute;


        .xNav-siteInfo {
            margin: 15px 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 0 20px;


            .xNav-siteTitle {
                background-color: white;
                background-color: aliceblue;

                font-size: 18px;
                font-family: '优设标题黑';
                height: 30px;
                line-height: 30px;
                text-align: center;
                border-radius: 15px;
                padding: 0 10px;

            }
        }

        .xNav-menu {
            // background-color: red;
            display: flex;
            flex-direction: row;
            margin: 15px 0;

            .xNav-menu-item {
                margin: 0 20px;
                background-color: floralwhite;
                width: 100px;
                height: 32px;
                line-height: 32px;
                text-align: center;
                font-family: '优设标题黑';
                font-size: 18px;
            }
        }
    }
}
</style>