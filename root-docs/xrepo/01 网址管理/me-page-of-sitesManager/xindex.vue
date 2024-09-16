<template>

    <div class="mps-all">
        <div class="mps-nav">

            <div class="mps-nav-item" @click="isShow = !isShow">
                {{ now_classOne }}
                <!-- <img :src="withBase('./png/logo.png')" alt=""> -->
            </div>
            <div class="mps-nav-item-options" v-if="isShow">
                <div class="mps-nav-item-option" v-for="item in classOneMenuList" @click="changeClassOne(item)">{{ item
                    }}
                </div>
            </div>

        </div>
        <div class="mps-content"></div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { sites_data } from '/zo-data/sites'
import { withBase, useData } from 'vitepress'
// 获取网址的原始信息
const sites = ref(sites_data)

const classOneMenuList = ref([])

const getClassOneList = () => {
    let arr = []
    for (let i = 0; i < sites_data.length; i++) {
        arr.push(sites_data[i].title)
    }
    classOneMenuList.value = arr
}

getClassOneList()


const isShow = ref(false)

let now_classOne = ref(classOneMenuList.value[0])


const changeClassOne = (momo) => {
    isShow.value = !isShow.value

    now_classOne.value = momo
}





console.log(classOneMenuList);



</script>

<style lang="scss" scoped>
.mps-all {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    background-color: aqua;
    align-items: center;

    .mps-nav {
        margin-top: 60px;
        width: 40%;
        height: 50px;
        background-color: aliceblue;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        // align-items: center;
        position: relative;


        .mps-nav-item {
            width: 180px;
            height: 40px;
            background-color: antiquewhite;
            border-radius: 10px;
            text-align: center;
            line-height: 40px;
        }


        .mps-nav-item-options {
            position: absolute;
            background-color: aqua;
            width: 180px;
            height: 400px;

            .mps-nav-item-option {
                width: 180px;
                height: 40px;
                background-color: antiquewhite;
                border-radius: 10px;
                text-align: center;
                line-height: 40px;
            }
        }
    }


    .mps-content {
        margin-top: 20px;
        width: 100%;
        min-height: 600px;
        background-color: deepskyblue;
        display: flex;
        flex-wrap: wrap;

        .mps-sitecard {
            margin: 10px;
            width: 400px;
            height: 200px;
            background-color: red;

            .mps-sitecard-title {
                background-color: white;
            }
        }
    }


}
</style>