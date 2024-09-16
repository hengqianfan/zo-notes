<template>
    <div class="zo-nav-all">
        <div class="zo-nav-in-all">

            <div class="zo-nav-siteinfo">

                <img :src="withBase(logourl)" alt="" class="zo-nav-sitelogo">

                <div class="zo-nav-sitetitle">title</div>
            </div>


            <div class="zo-nav-search">
                <my-search></my-search>
            </div>


            <div class="zo-nav-menu">
                <div class="zo-nav-menu-item" v-for="item in navmenudata">
                    <el-button v-if="item.link" @click="opensite(item.link)">{{ item.text
                        }}</el-button>
                    <el-dropdown placement="bottom" v-else="item.items">
                        <el-button> {{ item.text }} </el-button>
                        <template #dropdown>
                            <el-dropdown-menu>

                                <el-dropdown-item v-for="_item in item.items" @click="opensite(_item.link)">{{
                                    _item.text
                                }}</el-dropdown-item>




                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </div>






        </div>
    </div>
</template>

<script setup>
import { useData, withBase } from 'vitepress'
import { ref } from 'vue'

const { page, frontmatter, site, theme } = useData()

const logourl = theme.value.logo
// 获取导航菜单的数据
const navmenudata = ref([])


navmenudata.value = theme.value.nav
console.log(navmenudata);



const opensite = (link) => {
    window.open(withBase(`${link}.html`, '_blank'))
}
</script>

<style lang="scss" scoped>
@import '../../style/vars.scss';

.zo-nav-all {
    height: 100px;
    min-width: 100%;
    background-color: $my_bg_color_02;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    .zo-nav-in-all {
        height: 60px;
        min-width: 100%;
        background-color: aliceblue;
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 1.25rem;
        box-shadow: 0.1875rem 0.1875rem .25rem #b3c0a4 inset,
            -0.1875rem -0.1875rem .25rem #d3e2c0 inset;

        .zo-nav-siteinfo {
            margin-left: 20px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;

            .zo-nav-sitelogo {
                width: 30px;
                height: 30px;
            }
        }


        .zo-nav-menu {
            min-width: 500px;
            display: flex;
            flex-direction: row;

            .zo-nav-menu-item {
                margin: 0 10px;
            }
        }
    }
}
</style>