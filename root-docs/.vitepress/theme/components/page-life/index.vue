<template>
    <div class="pl-all">
        <div class="pl-main">
            <div class="pl-main-timeline">
                <el-timeline style="max-width: 900px">
                    <el-timeline-item :timestamp="formatDate2(item.frontmatter.zoid)" placement="top"
                        v-for="item in data">
                        <el-card class="pl-main-timeline-card-container">
                            <div class="pl-main-timeline-card">
                                <img :src="withBase(getIconUrl(item.frontmatter.icon))" alt=""
                                    class="pl-main-timeline-card-icon">


                                <a class="pl-main-timeline-card-title" :href="withBase(item.url)">{{
                                    item.frontmatter.title }}</a>

                            </div>

                        </el-card>


                    </el-timeline-item>

                </el-timeline>
            </div>
        </div>
    </div>
</template>

<script setup>
import { withBase } from "vitepress";
import { data } from '../../../../zo-data/posts.data'
import { formatDate2 } from '../../../myscript/formatDate'
import { getIconUrl } from '../../../myscript/getURL';





</script>

<style lang="scss" scoped>
.pl-all {
    $lineColor: #f5f0f0;
    background-image:
        linear-gradient($lineColor 1px, transparent 1px),

        linear-gradient(to right, $lineColor 1px, transparent 1px);

    background-size: 100% 10px, 10px 100%;
    background-position: 0 0;


    width: 100%;
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;

    .pl-main {
        background-color: white;
        width: 1200px;
        height: 80vh;
        border-radius: 30px;
        overflow: scroll;
        box-shadow: 5px 5px 12px #dedede inset,
            -5px -5px 12px #ffffff inset;


        .pl-main-timeline {
            margin: 100px;


            .pl-main-timeline-card-container {

                .pl-main-timeline-card {
                    .pl-main-timeline-card-icon {
                        width: 100px;
                        height: 100px;
                    }
                }
            }
        }


    }

}
</style>