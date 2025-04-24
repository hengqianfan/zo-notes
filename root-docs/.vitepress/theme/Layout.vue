<template>



  <div class="xLayout">

    <xNav />

    <xMain />

    <!-- <xContent /> -->
  </div>




</template>


<script setup>
import { useData } from 'vitepress'
const { page, frontmatter, site } = useData()
import xNav from './components/xNav/index.vue'
import xContent from './components/xContent/index.vue'
import xMain from './components/xMain/index.vue'


</script>


<style lang="scss" scoped>
@import url(./style/vars.scss);

.xLayout {
  // display: block;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
}
</style>
