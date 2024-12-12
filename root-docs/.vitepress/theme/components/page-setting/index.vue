<template>

    <div class="ps-all">
        管理员模式
        <el-switch v-model="isAdministrator" class="ml-2"
            style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949" />
    </div>

</template>

<script setup>
import { ref, watch } from 'vue'
import { admin_key } from '../../../../zo-data/key';
// 默认管理员状态
let isAdministrator = ref(false)
// 获取本地权限状态
const getState = () => {
    let res = localStorage.getItem('admin')
    if (res == admin_key) {
        isAdministrator.value = true
    }
}

getState()


// 此处ref数据不用.value
watch(isAdministrator, (newValue, oldValue) => {
    if (newValue == true) {
        localStorage.setItem('admin', admin_key)
    } else {
        localStorage.setItem('admin', 0)
    }
})








</script>

<style lang="scss" scoped>
.ps-all {
    width: 100%;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>