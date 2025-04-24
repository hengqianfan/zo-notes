<template>
    <div class="xMain">
        <xAside />
        <xContent />
    </div>
</template>

<script setup>
import xContent from '../xContent/index.vue'
import xAside from '../xAside/index.vue'
</script>

<style lang="scss" scoped>
.xMain {
    margin: 0 auto;
    width: 100%;
    max-width: 1400px;
    background-color: red;
    display: flex;
    flex-direction: row;

    .xAside {
        width: 300px;
    }

    .xContent {
        width: calc(100% - 300px);
    }
}
</style>