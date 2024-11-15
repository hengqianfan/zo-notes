<template>
    <div class="page-notes-all">

        <div class="pn-nav">
            <div class="pn-nav-item" v-for="item in noteClass" @click="sortNotes(item)">{{ item }}</div>
        </div>

        <div class="pn-content">
            <div class="pn-card" v-for="item in showedNotes">
                <div class="pn-cover">
                    <img :src="withBase(getImgSrc(item.cover))" alt="" class="pn-cover-img">

                </div>
                <a class="pn-title" :href="withBase(item.link)">{{ item.title }}</a>
            </div>


        </div>
        <el-pagination :default-page-size="pageSize" layout="total, prev, pager, next, jumper"
            :total="sortedNotes.length" @current-change="handleCurrentChange" />



    </div>
</template>

<script setup>
import { ref } from 'vue'
import { withBase, useData } from 'vitepress'
import { notesList } from '/zo-data/notes'


const pageSize = 8

const noteClass = ['全部', '编程', '电脑', '软件', '网站', '其它']

let sortedNotes = ref(notesList)

let showedNotes = ref(sortedNotes.value.slice(0, pageSize))





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
    showedNotes.value = sortedNotes.value.slice(0, pageSize)
}

const getImgSrc = (momo) => {

    return `/cover/${momo}.png`
}


const handleCurrentChange = (momo) => {

    let start = (momo - 1) * pageSize
    let end = momo * pageSize
    showedNotes.value = sortedNotes.value.slice(start, end)

}







</script>

<style lang="scss" scoped>
@import '../../style/vars.scss';
@import './my.scss';
@import './app.scss';
</style>