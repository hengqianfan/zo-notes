<template>
    <div class="sa-all" v-if="isShow">
        <div class="sa-readTime"> 阅读预计需要：{{ readTime }}分钟</div>
        <hr class="hr-twill-colorful">
        <br />
    </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { useData } from 'vitepress';
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






</script>

<style scoped>
.sa-all {
    background-color: transparent;

    /* margin-bottom: 20px; */
    .sa-readTime {
        width: 180px;
        height: 30px;
        line-height: 30px;
        border-radius: 5px;
        text-align: center;
        color: white;
        background-color: rgb(160, 217, 160);
    }
}
</style>