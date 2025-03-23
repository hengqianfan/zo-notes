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
import Version1 from '../page-sites-1.0/index.vue'
import Version2 from '../page-sites-2.0/index.vue'
import { useThemeStore } from '../../../stores/router'

const theme = useThemeStore()

const nowVersion = ref(theme.SitesShowVersion)


const isVersion = () => {
    // 本地存储中是否存在数据
    if (localStorage.getItem('SitesShowVersion')) {
        // 提取版本号 并转化为数字类型
        nowVersion.value = Number(localStorage.getItem('SitesShowVersion'))
    }
}

onMounted(() => {
    isVersion()
})




</script>

<style lang="scss" scoped></style>