<template>

    <div class="mps-all">
        <div class="mps-nav">

            <el-cascader placeholder="选择网址" size="small" :options="structuredData" filterable :props="props" clearable
                v-model="site_selected.value" @change="get_site(site_selected.value)" :show-all-levels="false">


            </el-cascader>

        </div>
        <div class="mps-content">

            <el-form :model="site_selected" label-width="auto" style="max-width: 600px">
                <el-form-item label="网址名称">
                    <el-input v-model="site_selected.value" />
                </el-form-item>

                <el-form-item label="网址图标">
                    <el-input v-model="site_selected.icon" />
                </el-form-item>

                <el-form-item label="网址链接">
                    <el-input v-model="site_selected.link" />
                </el-form-item>

                <el-form-item label="网址介绍">
                    <el-input v-model="site_selected.intro" />
                </el-form-item>

                <el-form-item label="一级分类">
                    <el-select v-model="site_selected.classone" placeholder="选择一级分类">
                        <el-option :label="item" :value="item" v-for="item in classoneList" />
                    </el-select>
                </el-form-item>


                <el-form-item label="二级分类">
                    <el-select v-model="site_selected.classtwo" placeholder="选择二级分类">
                        <el-option :label="item" :value="item" v-for="item in classtwoList" />
                    </el-select>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>

            <el-form :model="site_selected" label-width="auto" style="max-width: 600px">
                <el-form-item label="网址名称">
                    <el-input v-model="site_selected.value" />
                </el-form-item>

                <el-form-item label="网址图标">
                    <el-input v-model="site_selected.icon" />
                </el-form-item>

                <el-form-item label="网址链接">
                    <el-input v-model="site_selected.link" />
                </el-form-item>

                <el-form-item label="网址介绍">
                    <el-input v-model="site_selected.intro" />
                </el-form-item>

                <el-form-item label="一级分类">
                    <el-select v-model="site_selected.classone" placeholder="选择一级分类">
                        <el-option :label="item" :value="item" v-for="item in classoneList" />
                    </el-select>
                </el-form-item>


                <el-form-item label="二级分类">
                    <el-select v-model="site_selected.classtwo" placeholder="选择二级分类">
                        <el-option :label="item" :value="item" v-for="item in classtwoList" />
                    </el-select>
                </el-form-item>


                <el-form-item>
                    <el-button type="primary" @click="onSubmit">Create</el-button>
                    <el-button>Cancel</el-button>
                </el-form-item>
            </el-form>


        </div>
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { withBase, useData } from 'vitepress'
import mydata from '../../../../zo-data/sites.json'
import { v4 as uuidv4 } from 'uuid';



const props = {

    label: 'value'
}


const site_selected = ref({
    value: '网址名称',
    link: '网址链接'
})


// 组织数据的函数
const transformData = data => {
    const result = [];
    const map = {};

    // 创建映射表
    data.forEach(item => {
        const { classone, classtwo, ...rest } = item;

        if (!map[classone]) {
            map[classone] = { value: classone, label: classone, children: [] };
            result.push(map[classone]);
        }

        if (!map[classtwo]) {
            map[classtwo] = { value: classtwo, label: classtwo, children: [] };
            map[classone].children.push(map[classtwo]);
        }

        map[classtwo].children.push({ ...rest, label: rest.value });
    });

    return result;
}
// 将一维数组转化为多维数组
const structuredData = transformData(mydata);


const get_site = (momo) => {
    if (momo == undefined) {
        return
    }
    let classone = momo[0]
    let site_name = momo[2]
    let res = mydata.filter((item) => item.classone == classone && item.value == site_name)[0]

    site_selected.value = res
}



let classoneList = mydata.map(obj => { return obj.classone })
classoneList = Array.from(new Set(classoneList))

let classtwoList = mydata.map(obj => { return obj.classtwo })
classtwoList = Array.from(new Set(classtwoList))







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
        justify-content: space-around;
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