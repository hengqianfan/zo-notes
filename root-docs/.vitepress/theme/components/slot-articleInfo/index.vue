<template>
    <div class="sa-all" v-if="isShow">
        <div class="sa-bar">

            <div class="sa-readTime"> ⏱ 预计 {{ readTime }} min</div>
            |
            <div class="sa-tags" v-for="item in frontmatter.tags" @click="toTagPage(item)">{{ item }}</div>
        </div>




        <hr class="hr-twill">

        <br />



    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useData, withBase } from 'vitepress';
const { frontmatter, page, site } = useData()
import { data as articlesData } from '/zo-data/articles.data.js'
import { reckonReadTime } from '../../../myscript/reckonReadTime';


const isShow = ref(true)


let readTime = ref(0)



const closeComponement = () => {
    // 判断是否属于文章库里的文章
    let res = page.value.filePath.indexOf('articles')
    if (res == -1) {
        isShow.value = false
    }
    //  当页面配置中声明禁止显示 readTime 时
    if (frontmatter.value.readTime == false) {
        isShow.value = false
    }

}


const findArticle = () => {
    // 判断是否属于文章库里的文章
    let res = page.value.filePath.indexOf('articles')
    if (res == -1) {
        return
    }
    let now_filename = page.value.filePath
    now_filename = now_filename.substring(now_filename.lastIndexOf('/') + 1, now_filename.lastIndexOf('.md'))


    let articles_code = articlesData.filter((item) => item.frontmatter.filename == now_filename)[0].src

    readTime.value = reckonReadTime(articles_code)


}

// 为了界面切换时，该组件不正常销毁的bug
onMounted(() => {
    closeComponement()
    findArticle()
})


// 解决组件未正常销毁的BUG
watch(
    frontmatter,
    (newValue, oldValue) => {
        closeComponement()
    },
    { immediate: true }
)

const toTagPage = () => {

}



</script>

<style lang="scss" scoped>
.sa-all {
    background-color: transparent;

    .sa-bar {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-end;
        margin-bottom: 10px;

        .sa-icon {
            width: 30px;
            height: 30px;
            padding: 5px;
            border: 1px dashed rgb(126, 126, 213);
        }


        .sa-readTime {
            margin: 0 10px;
            min-width: 100px;
            height: 20px;
            line-height: 20px;
            border-radius: 5px;
            text-align: center;
            font-size: 12px;
            color: white;
            background-color: rgb(29, 28, 30);
        }

        .sa-tags {
            margin: 0 10px;
            padding: 0 5px;
            min-width: 50px;
            height: 20px;
            line-height: 20px;
            border-radius: 5px;
            text-align: center;
            color: white;
            font-size: 13px;
            // font-family: '剑豪体';
            background-color: #4092bc;
            // border: 1px dashed rgb(247, 237, 224);
        }
    }



}
</style>