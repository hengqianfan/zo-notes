<template>
    <div class="" v-show="nowVersion == 1">
        <Version1></Version1>
    </div>
    <div class="" v-show="nowVersion == 2">
        <Version2></Version2>
    </div>


</template>

<script setup>
import { ref, onMounted } from 'vue'
import Version1 from '../page-articles-1.0/index.vue'
import Version2 from '../page-articles-2.0/index.vue'
const nowVersion = ref(2)




const isVersion = () => {
    let res = 2
    if (localStorage.getItem('ArticleShow')) {
        // 提取版本号 并转化为数字类型
        res = Number(localStorage.getItem('ArticleShow'))
    }
    nowVersion.value = res
}

onMounted(() => {
    isVersion()
})




</script>

<style lang="scss" scoped></style>