<template>
    <div class="xAside">
        我是侧边栏
        <xPerson />
    </div>
</template>

<script setup>
import xPerson from '../xPerson/index.vue'
</script>

<style lang="scss" scoped>
.xAside {
    min-width: 20vh;
    background-color: yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
}
</style>