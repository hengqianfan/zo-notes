<template>
    <div class="zc-all">
        {{ now_time }}
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const now_time = ref(null)

onMounted(() => {
    const clock = setInterval(() => {
        now_time.value = getToday().time;
    }, 1000);

    // 使用onUnmounted清除定时器
    onUnmounted(() => {
        clearInterval(clock);
    });
})


// 时间格式化：获取当前时间，格式化为15:35:06
function getToday() {
    var datas = new Date();
    var on1 = " / ";
    var on2 = " : ";
    var onS = datas.getHours(); //时
    var onF = datas.getMinutes(); //分
    var onN = datas.getSeconds(); //秒

    if (onS >= 0 && onS <= 9) {
        //时
        onS = "0" + onS;
    }
    if (onF >= 0 && onF <= 9) {
        //分
        onF = "0" + onF;
    }
    if (onN >= 0 && onN <= 9) {
        //秒
        onN = "0" + onN;
    }

    return {
        time: onS + on2 + onF + on2 + onN,
    };
}

</script>

<style lang="scss" scoped>
.zc-all {
    width: 200px;
    height: 45px;
    background-color: white;
    font-size: 20px;
    font-family: '优设标题黑';
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 0.1875rem 0.1875rem .125rem #f0f0f0 inset,
        -0.1875rem -0.1875rem .125rem #faf8f8 inset;
}

.zc-all:hover {

    color: rebeccapurple;

}
</style>