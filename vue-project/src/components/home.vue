<template>
    <div class="home-page">
        <h1>{{ count }}</h1>
        <h1>{{ testObj.name }}</h1>
        <h1>{{ doubleCount }}</h1>
        <button @click="increment">Increment</button>
        <button @click="updateName">Update Name</button>
        <h1>以下是子组件</h1>
        <Child :title="childTitle" ref="childRef" @update-title="updateTitle" />
        <h1>以下是子组件2</h1>
        <Child title="childTitle2" />
        <h1>以下是监听器</h1>
        <p>当count修改了，我就会变化--{{ revisedCount }}</p>
        <button @click="addAgeFn">增加年龄</button>
        <button @click="callChildMethod">调用子组件的方法</button>
    </div>
</template>

<script setup lang="ts">
import Child from './child.vue'
import { ref, reactive, computed, watch, watchEffect } from 'vue'

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

// 子组件标题
let childTitle = ref<string>('这是我定义的标题--子组件1')
// 修改标题
const updateTitle = () => {
    childTitle.value = `这是修改后的标题--${Math.random().toString(36).substring(7)}`
}

// 监听器内容
let revisedCount = ref('初始值')
watch(count, (newValue, oldValue) => {
    revisedCount.value = `count从${oldValue}变成了${newValue}`
})

watch(() => testObj.age, (newValue, oldValue) => {
    console.log(newValue, oldValue, 'newValue, oldValue---999888dfdsfs')
    console.log(`testObj.age从${oldValue}变成了${newValue}`)
})

watchEffect(() => {
    console.log(`watchEffect监听到count的值是${count.value}`)
})

// 增加年龄
const addAgeFn = () => {
    testObj.age++
}

// 计算属性
const doubleCount = computed(() => {
    return count.value + testObj.name
})

// 调用子组件的方法
const childRef = ref<InstanceType<typeof Child> | null>(null)
const callChildMethod = () => {
    if (childRef.value) {
        childRef.value.updateChildTitle()
    }
}
</script>
