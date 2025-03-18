<!-- .vitepress/theme/components/MouseTrail.vue -->
<template>
    <canvas ref="canvas" class="mouse-trail"></canvas>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
const points = ref([])
const settings = {
    color: '#00ff88',
    particleNum: 20,
    radius: 2,
    fadeSpeed: 0.1
}

// 生命周期钩子
onMounted(() => {
    if (typeof window !== 'undefined') {
        initCanvas()
    }
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeCanvas)
    window.removeEventListener('mousemove', onMouseMove)
})

// 工具函数
const resizeCanvas = () => {
    canvas.value.width = window.innerWidth
    canvas.value.height = window.innerHeight
}

const onMouseMove = (e) => {
    if (points.value.length > settings.particleNum) {
        points.value.shift()
    }
    points.value.push({
        x: e.clientX,
        y: e.clientY,
        alpha: 1
    })
}

// 动画循环
const animate = () => {
    const ctx = canvas.value.getContext('2d')

    // 清屏效果
    // ctx.fillStyle = `rgba(0, 0, 0, ${settings.fadeSpeed})`
    ctx.fillRect(0, 0, canvas.value.width, canvas.value.height)

    // 绘制粒子
    points.value.forEach((point, index) => {
        ctx.beginPath()
        ctx.fillStyle = settings.color
        ctx.arc(point.x, point.y, settings.radius, 0, Math.PI * 2)
        ctx.fill()

        // 更新透明度
        point.alpha -= settings.fadeSpeed
        if (point.alpha <= 0) {
            points.value.splice(index, 1)
        }
    })

    requestAnimationFrame(animate)
}

// 初始化
const initCanvas = () => {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', onMouseMove)
    animate()
}
</script>

<style scoped>
.mouse-trail {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    color: #00ff88;
}
</style>