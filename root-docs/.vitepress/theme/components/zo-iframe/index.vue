<template>
    <div class="my-iframe-all">
        <iframe :src="myurl" frameborder="0" class="my-iframe"></iframe>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { withBase } from 'vitepress';
const props = defineProps(['src'])

let myurl = ref(props.src)
</script>

<style lang="scss" scoped>
.my-iframe {
    width: 100%;
    min-height: 500px;
    border: 2px dashed blue;

}
</style>