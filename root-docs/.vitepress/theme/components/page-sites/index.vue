<template>
    <div class="ps-all">
        <el-scrollbar height="100vh" class="ps-nav">

            <el-menu default-active="1" @open="handleOpen" @close="handleClose">

                <el-sub-menu v-for="item in sites">
                    <template #title>

                        <span>{{ item.value }}</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item v-for="xitem in item.children" @click="getSites(item.value, xitem.value)">{{
                            xitem.value
                            }}</el-menu-item>
                    </el-menu-item-group>


                </el-sub-menu>

            </el-menu>

        </el-scrollbar>

        <div class="ps-content">
            <div class="ps-content-block-sites">
                <div v-for="item in showed_sites" class="site-card">

                    <img :src="withBase(gain_icon(item.icon))" class="site-icon">


                    <div class="site-info">

                        <div @click="tosite(item.link)" class="site-title">{{ item.value }}</div>

                        <div class="site-intro">{{ item.intro }}</div>

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
// 获取网址的原始信息
const sites = ref(sites_data)


const showed_sites = ref([])


const getSites = (mo1, mo2) => {

    let res = sites.value.filter((item, index) => item.value == mo1)

    let ress = res[0].children.filter((item, index) => item.value == mo2)

    showed_sites.value = ress[0].children



}


getSites('常用', '最近常用')

const get_sites2 = (momo) => {

    console.log(momo);


}





const gain_icon = (momo) => {
    return `/icon/png/${momo}.png`
    // return `/icon/svg/${momo}.svg`
}

const tosite = (momo) => {
    window.open(momo)
}
</script>

<style lang="scss" scoped>
@import './my.scss'
</style>