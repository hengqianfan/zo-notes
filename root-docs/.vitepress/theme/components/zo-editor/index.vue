<template>
    <ClientOnly>
        <MdEditor v-model="text" @onSave="onSave" />
    </ClientOnly>
</template>

<script setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { withBase, useData } from 'vitepress'
import axios from 'axios';
// 获取所有文章的
import { data } from '/zo-data/articles.data.js'

const { frontmatter, page, site } = useData()

const getID = () => {
    if (frontmatter.value.id) {
        return frontmatter.value.id
    } else {
        return 24000000

    }
}
const pageID = getID().toString()




const sortdata = (momo) => {
    if (momo == '24000000') {
        return [{ src: '# 该页面无法被编辑', url: 'none' }]
    } else {
        return data.filter((item) => item.frontmatter.id == momo)

    }
}


let res = sortdata(pageID)[0].src




const text = ref(res);

const onSave = () => {
    let content = text.value

    let ress = sortdata(pageID)[0].url

    let url = ''
    if (ress == 'none') {
        url = 'none'
    } else {
        url = ress.split('.html')[0] + `.md`
        console.log(url);

    }

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8090',
        data: {
            content: content
        }
    });
}


</script>

<style scoped></style>