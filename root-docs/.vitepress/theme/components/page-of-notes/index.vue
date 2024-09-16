<template>
    <div class="page-notes-all">

        <!-- <div class="pn-nav">
            <div class="pn-nav-item" v-for=" (item, index) in menu_list" @click="getShowData(item, index)">
                {{ item }}
            </div>
        </div> -->

        <div class="pn-search">
            <el-select v-model="now_class" filterable placeholder="定位笔记" style="width: 120px" clearable
                @change="toAnchor(now_class)">
                <el-option v-for="key in menu_list" :key="key" :label="key" :value="key" />
            </el-select>
        </div>


        <div class="pn-content">
            <div class="pn-show-card" v-for="item in now_show_data">

                <div>

                    <a :href="withBase(`${item.link}`)" class="pn-show-card-title">{{ item.text }}</a>

                    <img :src="withBase(getIcon(item.icon))" alt="" class="pn-show-card-icon">

                </div>

                <div class="pn-show-card-intro">{{ item.intro }}</div>

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

const toAnchor = (momo) => {

    // 注意结果返回的是数组
    let res = data.value.filter((item, index) => item.text == momo)[0]

    now_show_data.value = res.items


}

// 先运行初始化一次 不然页面内容为空
toAnchor(props.momo[0].text)

const getIcon = (momo) => {
    if (momo) {
        return `/icon/png/${item.icon}.png`
    }
    return `/icon/png/note.png`
}


</script>

<style lang="scss" scoped>
@import '../../style/vars.scss';
@import './app.scss';

.active {
    background-color: white;
}

@media (min-width: 62.5rem) {
    .page-notes-all {
        min-height: 90vh;
        width: 100%;
        background-color: $my_bg_color_02;
        display: flex;
        flex-direction: column;

        .pn-search {
            margin-top: 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .pn-nav {
            box-sizing: border-box;
            height: 50px;
            width: 100%;
            background-color: $my_bg_color_02;
            display: flex;
            flex-direction: row;



            .pn-nav-item {
                box-sizing: border-box;
                height: 50px;
                line-height: 50px;
                text-align: center;
                width: 140px;
                color: $my_bg_color_03;
                font-size: 18px;
                font-family: '剑豪体';
                border: 1px dashed blue;


            }
        }

        .pn-content {
            display: flex;
            flex-direction: row;
            padding: 1.25rem;
            flex-wrap: wrap;

            .pn-show-card {
                margin: 1.25rem;
                width: 480px;
                height: 17.5rem;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;

                background-color: $my_bg_color_02;

                border-radius: .625rem;

                box-shadow: 2px 2px 3px #bebebe,
                    -2px -2px 3px #ffffff;

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;

                    width: 160px;
                    height: 200px;

                    .pn-show-card-icon {
                        width: 120px;
                        height: 120px;
                        padding: 5px;
                        background-color: $my_bg_color_01;
                        border-radius: .625rem;
                    }

                    .pn-show-card-title {
                        margin-bottom: 20px;
                        min-width: 140px;
                        height: 40px;
                        line-height: 40px;
                        padding: 0 10px;
                        background-color: $my_bg_color_02;
                        text-align: center;
                        font-size: 14px;
                        font-family: '胡晓波男神体';
                        // font-family: '楷体';
                        font-weight: 600;
                        letter-spacing: .0625rem;
                        color: $my_bg_color_03;
                        border-radius: .25rem;

                        box-shadow: 2px 2px 3px #bebebe,
                            -2px -2px 3px #ffffff;

                    }
                }

                .pn-show-card-intro {
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    width: 200px;
                    height: 160px;
                    padding: 5px;
                    background-color: #ffffff;
                    color: #928989;
                    font-size: 14px;
                    // 首行缩进
                    text-indent: 1.5rem;
                }


            }
        }
    }
}
</style>