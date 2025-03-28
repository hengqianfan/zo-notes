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
@import url(./my.scss);
@import url(./app.scss);
</style>