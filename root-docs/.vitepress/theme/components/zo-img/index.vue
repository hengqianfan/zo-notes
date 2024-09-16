<template>
    <img :src="withBase(imgurl)" alt="" class="zo-img">
</template>

<script setup>
import { ref } from 'vue';
import { withBase } from 'vitepress';
const props = defineProps(['momo'])

let imgurl = ref(props.momo)

</script>

<style scoped>
.zo-img {
    width: 600px;
    height: 400px;
    background-color: rgb(40, 87, 71);
    padding: 8px;
}
</style>