<template>
    <MdEditor v-model="text" />
</template>

<script setup>
import { ref } from 'vue';
import { MdEditor } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';





const text = ref('# 您不具备编辑权限');

</script>

<style scoped></style>