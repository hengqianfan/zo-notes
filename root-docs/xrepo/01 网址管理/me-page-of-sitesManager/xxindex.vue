<template>

    <div class="mps-all">
        <div class="mps-nav">

            <el-select v-model="now_classOne" filterable placeholder="Select" style="width: 240px">
                <el-option v-for="item in sites_data_showed" :key="item.value" :label="item.label" :value="item.value"
                    @click="updateData" />
            </el-select>

            <el-select v-model="now_classTwo" filterable placeholder="Select" style="width: 240px">
                <el-option v-for="item in classTwoList" :key="item.value" :label="item.label" :value="item.value"
                    @click="updateData2" />
            </el-select>
            <el-divider direction="horizontal" content-position="left"></el-divider>

            <client-only>

                <el-tree-select v-model="now_classTwo" :data="sites_data_showed" filterable style="width: 240px"
                    check-strictly=true show-checkbox />

            </client-only>


        </div>
        <div class="mps-content">
            <el-card style="width: 480px" shadow="always" v-for="item in site_card_data" class="mps-sitecard">
                <div class="mps-sitecard-title">{{ item.title }}</div>
            </el-card>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { sites_data } from '/zo-data/sites'
import { withBase, useData } from 'vitepress'
// 获取网址的原始信息
const sites = ref(sites_data)

// 生成符合 element 规范的属性 
const sites_data_showed = ref([])

const resetData = (momo = []) => {
    let arr = []
    for (let i = 0; i < momo.length; i++) {
        let obj = {}
        obj = momo[i]
        obj.value = momo[i].title
        obj.label = momo[i].title
        arr.push(obj)
        // 深度替换
        obj.items = resetData(momo[i].items)
    }
    return arr
}

sites_data_showed.value = resetData(sites_data)


// 暂时不需要了，页面直接从 sites_data_showed 数据中拿
const classOneList = ref([])

const now_classOne = ref(sites.value[0].title)

const now_classTwo = ref()

// now_classTwo.value = sites.value.filter((item, index) => item.title == now_classOne.value)[0].title

const classTwoList = ref([])

// classTwoList.value = sites.value.filter((item, index) => item.title == now_classOne.value)[0].items


const site_card_data = ref()

const updateData = () => {
    now_classTwo.value = sites.value.filter((item, index) => item.title == now_classOne.value)[0].items[0].title
    classTwoList.value = sites.value.filter((item, index) => item.title == now_classOne.value)[0].items
    site_card_data.value = classTwoList.value.filter((item, index) => item.title == now_classTwo.value)[0].items
}

const updateData2 = () => {

    // now_classTwo.value = sites.value.filter((item, index) => item.title == now_classOne.value)[0].items[0].title
    classTwoList.value = sites.value.filter((item, index) => item.title == now_classOne.value)[0].items
    site_card_data.value = classTwoList.value.filter((item, index) => item.title == now_classTwo.value)[0].items

    console.log(site_card_data);

}

updateData()







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
        align-items: center;
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