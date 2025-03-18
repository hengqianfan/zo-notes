<template>

  <!-- <MouseTrail /> -->



  <not-found v-if="page.isNotFound">

  </not-found>

  <zo-home v-if="frontmatter.layout === 'home'" />

  <!-- <zo-doc v-if="frontmatter.layout === 'doc'" /> -->



  <Content v-else />
</template>


<script setup>
import { useData } from 'vitepress'
const { page, frontmatter, site } = useData()

</script>
