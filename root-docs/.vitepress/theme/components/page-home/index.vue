<template>
    <div class="ph-all">
        <ZoClock />
    </div>
</template>

<script setup>
import ZoClock from '../zo-clock/index.vue'
</script>

<style lang="scss" scoped>
.ph-all {
    width: 100%;
    height: 90vh;


    $lineColor: #f5f0f0;
    /* 背景底色 */
    background-image:
        linear-gradient($lineColor 1px, transparent 1px),
        /* 水平线 */
        linear-gradient(to right, $lineColor 1px, transparent 1px);
    /* 垂直线 */
    background-size: 100% 10px, 10px 100%;
    /* 网格间距10px */
    background-position: 0 0;
    /* 对齐起点 */
}
</style>