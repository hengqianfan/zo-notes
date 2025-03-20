<script setup>
import { useCounterStore } from '../../../stores/router'
const counter = useCounterStore()
</script>

<template>
    <div class="test-all">
        <p>Count: {{ counter.count }}</p>
        <button @click="counter.increment()">+1</button>
    </div>

</template>


<style>
.test-all {
    height: 100vh;
    width: 100%;
    /* background-color: blue; */
}
</style>