<template>
    <div class="ce-all">

        <div class="ce-all-item">
            <el-tag type="primary" effect="dark" round class="ce-all-item-tag">
                {{ '简单程度' }}
            </el-tag>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="90" status="exception" striped />
        </div>

        <div class="ce-all-item">
            <el-tag type="info" effect="dark" round class="ce-all-item-tag">
                {{ '实用程度' }}
            </el-tag>
            <el-progress :text-inside="true" :stroke-width="24" :percentage="95" status="warning" striped />
        </div>

        <div class="ce-all-item">
            <el-tag type="danger" effect="dark" round class="ce-all-item-tag">
                {{ '推荐指数' }}
            </el-tag>

            <el-progress :text-inside="true" :stroke-width="24" :percentage="90" status="success" striped />
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style lang="scss" scoped>
.ce-all {

    width: 320px;
    height: 120px;
    background-color: rgb(250, 231, 223);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;


    .ce-all-item {
        width: 300px;
        margin: 8px;
        position: relative;

        .ce-all-item-tag {
            // position: absolute;
            float: inline-start;
        }



    }


}
</style>