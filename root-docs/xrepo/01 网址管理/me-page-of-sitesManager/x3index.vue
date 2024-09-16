<template>

    <div class="mps-all">
        <div class="mps-nav">

            <client-only>

                <el-tree-select v-model="now_site" :data="sites" filterable style="width: 240px"
                    @change="updateData()" />

            </client-only>


        </div>
        <div class="mps-content">
            <!-- <el-card style="width: 480px" shadow="always" v-for="item in site_showed" class="mps-sitecard">
                <div class="mps-sitecard-title">{{ item.title }}</div>
                <div class="mps-sitecard-title">{{ item.link }}</div>

                <div class="mps-sitecard-title">{{ item.intro }}</div>
                <div class="mps-sitecard-title">{{ item.icon }}</div>



            </el-card> -->

            <el-form :model="siteinfo" label-width="auto" style="max-width: 600px" v-for="item in site_showed">
                <el-form-item label="title">
                    <el-input v-model="siteinfo.title" :value="item.title" />
                </el-form-item>
                <el-form-item label="link">
                    <el-input v-model="siteinfo.link" :value="item.link" />
                </el-form-item>
                <el-form-item label="intro">
                    <el-input v-model="siteinfo.intro" :value="item.intro" />
                </el-form-item>
                <el-form-item label="icon">
                    <el-input v-model="siteinfo.title" :value="item.icon" />
                </el-form-item>
                <el-button type="primary" @click="onSubmit">Create</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { sites_data } from '/zo-data/sites'
import { withBase, useData } from 'vitepress'
import { Logger } from 'sass';


// 生成符合 element 规范的属性 
const sites = ref([])

const resetData = (momo = []) => {
    let arr = []
    for (let i = 0; i < momo.length; i++) {
        let obj = {}
        obj = momo[i]
        obj.value = momo[i].title
        obj.label = momo[i].title
        arr.push(obj)
        obj.children = resetData(momo[i].items)


    }
    return arr
}
sites.value = resetData(sites_data)



// 现在选中的网址
const now_site = ref()
// 从 sites（多层嵌套的数组） 数据中提取的  sites_showed（简单网址集合数组）
const sites_showed = ref([])
//  目前应该展示的网址的信息
const site_showed = ref()



//用于回调的函数
const check = (data, list) => {
    data.forEach((item) => {
        if (item.children && item.children.length > 0) {
            check(item.children, list);
        } else {
            list.push(item);
        }
    });
    return list;
};

//调用此函数 返回的就是最底层的数据
const checkData = (data) => {
    const list = [];
    return check(data, list);
};


sites_showed.value = checkData(sites.value)



const updateData = () => {
    site_showed.value = sites_showed.value.filter((item, index) => item.title == now_site.value)
    console.log(now_site);
    console.log(site_showed);

}


const siteinfo = ref({})


const onSubmit = () => {

    console.log(123);




}









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
        justify-content: center;
        align-items: center;

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