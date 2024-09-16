<template>
    <div class="page-webdesign-all">

        <div class="pw-content">


            <div class="pw-card-group" v-for="item in data">

                <div class="pw-card-group-title">{{ item.text }}</div>


                <div class="pw-card-group-content">

                    <div class="pw-show-card" v-for="card in item.items">

                        <div class="pw-show-card-name">
                            <a :href="withBase(`${card.link}`)">{{ card.text }}</a>
                        </div>


                        <img :src="withBase(`/icon/png/${card.icon}.png`)" alt="你的网络状态不好" class="pw-show-card-icon">


                    </div>


                </div>




            </div>


        </div>



    </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
// 外部数据的接口 外部的父组件使用 momo 属性传值
const props = defineProps(['momo'])

let data = ref(props.momo)

// 生成菜单
let menu_list = data.value.map((item, index) => { return item.text })

// content中展示的内容
let now_show_data = ref()

// 根据点击的菜单 动态变动数据

const getShowData = (momo) => {

    // 注意结果返回的是数组
    let res = data.value.filter((item, index) => item.text == momo)[0]

    now_show_data.value = res.items


    console.log(now_show_data);

}

// 先运行初始化一次 不然页面内容为空
getShowData(props.momo[0].text)



</script>

<style lang="scss" scoped>
@import './my.scss'
</style>