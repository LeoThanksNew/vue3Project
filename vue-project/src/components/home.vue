<template>
    <div class="home-page">
        <h1>{{ count }}</h1>
        <h1>{{ testObj.name }}</h1>
        <h1>{{ doubleCount }}</h1>
        <button @click="increment">Increment</button>
        <button @click="updateName">Update Name</button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const count = ref(0)
const increment = () => {
    count.value++
}

const testObj = reactive({
    name: 'John',
    age: 30
})
const updateName = () => {
    testObj.name = 'TestJane' + Math.random().toString(36).substring(7)
}

// 计算属性
const doubleCount = computed(() => {
    return count.value + testObj.name
})
</script>
