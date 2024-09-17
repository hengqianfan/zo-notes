<template>

    <iframe :src="z_src" class="video-iframe" width="100%" v-resize="{ log: true }" frameborder="no" scrolling="no"
        seamless="" allowfullscreen="allowfullscreen"></iframe>

</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps(['z_src'])

// 0.5625 --> 9:16
// 0.75 --> 3:4 
const ratio = 0.5625

onMounted(() => {
    function changeVideoIframe() {
        const video = document.getElementsByClassName('video-iframe');
        const width = document.getElementsByClassName('video-iframe')[0].scrollWidth;
        for (let i = 0; i < video.length; i++) {
            video[i].style.height = width * ratio + 'px'
        }
    }
    changeVideoIframe()
    window.onresize = function () { changeVideoIframe() }
})

</script>

<style>
.video-iframe {
    padding: 5px;
    border: 2px dashed blue;
}
</style>
