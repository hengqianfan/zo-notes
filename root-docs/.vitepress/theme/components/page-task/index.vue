<template>
    <el-button type="primary" size="default" @click="save(mydata)">存储</el-button>

    <el-button type="primary" size="default" @click="gain()">获取</el-button>
</template>

<script setup>

import { Content } from 'vitepress';
import { ref } from 'vue';

const taskdata = [
    {
        title: '打扫卫生', id: '20241215', type: '家务', aimTime: 241514, startTime: 241514, endTime: 241231, content: '打扫卫生',
        // 优先级
        pri: 1, createTime: 240914
    }
]
const mydata = ref([{ name: 'momo', age: 124 }, { name: 'koko', age: 345 }])


const save = () => {
    localStorage.momo = JSON.stringify(mydata.value)
}


const gain = () => {
    console.log(localStorage.momo);

    console.log(JSON.parse(localStorage.momo));

}
</script>

<style scoped></style>