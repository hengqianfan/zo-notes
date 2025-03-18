<script setup>
import Giscus from '@giscus/vue';
</script>

<template>
    <div class="comment-container">
        <ClientOnly>
            <Giscus repo="hengqianfan/zo-notes" repoId="R_kgDOMySUhw" category="General"
                categoryId="DIC_kwDOMySUh84CoL58" mapping="pathname" reactionsEnabled="1" emitMetadata="0"
                theme="preferred_color_scheme" />
        </ClientOnly>
    </div>
</template>