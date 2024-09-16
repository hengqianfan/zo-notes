<template>
    <div class="sa-all" v-if="isShow">
        <div class="sa-readTime"> 阅读预计需要：{{ readTime }}分钟</div>
        <hr class="hr-twill-colorful">
        <br />
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { onMounted } from 'vue';
import { useData } from 'vitepress';
import data from '../../../../zo-data/zo-articlesDatabase.json'

const { frontmatter } = useData()

const isShow = ref(false)

let readTime = ref(0)

// 判断是否是文章
if (frontmatter.value.zoinfo) {
    isShow.value = true
    let res = data.filter((item) => item.id == frontmatter.value.zoinfo.id)
    console.log(res);

    readTime.value = res[0].readTime
    console.log(frontmatter.value.zoinfo.id);
    console.log(readTime.value);
    // readTime.value = frontmatter.value.zoinfo.readTime
}

// 解决组件未正常销毁的BUG
watch(
    frontmatter,
    (newValue, oldValue) => {
        if (frontmatter.value.zoinfo) {
            isShow.value = true
            let res = data.filter((item) => item.id == frontmatter.value.zoinfo.id)
            console.log(res);

            readTime.value = res[0].readTime
            console.log(frontmatter.value.zoinfo.id);
            console.log(readTime.value);
            // readTime.value = frontmatter.value.zoinfo.readTime
        } else {
            isShow.value = false
        }
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