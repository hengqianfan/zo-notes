<template>
    <div class="page-notes-all">

        <div class="pn-nav">
            <div class="pn-nav-item" v-for="item in noteClass" @click="sortNotes(item)">{{ item }}</div>
        </div>

        <div class="pn-content">
            <div class="pn-card" v-for="item in showedNotes">
                <img :src="withBase(getImgSrc(item.cover))" alt="" class="pn-cover">
                <a class="pn-title" :href="withBase(item.link)">{{ item.title }}</a>
            </div>


        </div>
        <el-pagination :page-sizes="8" :size="size" :disabled="disabled" :background="background"
            layout="total, prev, pager, next, jumper" :total="sortedNotes.length" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />



    </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
import { notesList } from '/zo-data/notes'

const noteClass = ['全部', '编程', '电脑', '软件', '网站']

let sortedNotes = ref(notesList)

let showedNotes = ref(sortedNotes.value.slice(0, 8))





const sortNotes = (momo) => {

    let arr = []
    for (let i = 0; i < notesList.length; i++) {
        if (notesList[i].class == momo) {
            arr.push(notesList[i])
        }
    }
    if (momo == '全部') {
        arr = notesList
    }
    sortedNotes.value = arr
    showedNotes.value = sortedNotes.value.slice(0, 8)
}

const getImgSrc = (momo) => {

    return `/notesCover/${momo}.png`
}


const handleCurrentChange = (momo) => {

    let start = (momo - 1) * 8
    let end = momo * 8
    showedNotes.value = notesList.slice(start, end)

}







</script>

<style lang="scss" scoped>
@import '../../style/vars.scss';
@import './app.scss';

.page-notes-all {
    display: flex;
    flex-direction: column;
    align-items: center;
    // justify-content: center;
    width: 100%;
    height: 96vh;
    background-color: rgb(244, 243, 243);

    .pn-nav {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        width: 800px;
        height: 40px;
        line-height: 40px;
        font-size: 18px;
        font-family: '优设';

        justify-content: space-around;

    }

    .pn-content {
        margin-top: 10px;

        width: 1500px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;


        .pn-card {
            width: 320px;
            height: 240px;

            margin: 10px;
            border-radius: 10px;
            background-color: white;
            box-shadow: 1px 1px 1px rgb(229, 227, 227);

            .pn-cover {
                border-radius: 10px 10px 0 0;
                width: 320px;
                height: 180px;

            }

            .pn-title {
                height: 60px;
                width: 320px;
                line-height: 60px;
                font-size: 20px;
                font-family: '剑豪体';
                text-align: center;
                display: flex;
                justify-content: center;
            }
        }
    }
}
</style>