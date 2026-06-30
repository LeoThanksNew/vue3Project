<template>
    <div class="child-page">
        {{ title }}
        <button @click="$emit('update-title')">更新标题</button>
        <div>{{ childTitle }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

// props
defineProps({
    title: {
        type: String
    }
})

// emit
defineEmits(['update-title'])

let childTitle = ref('子组件内部定义的标题')

const updateChildTitle = () => {
    childTitle.value = `子组件内部修改后的标题--${Math.random().toString(36).substring(7)}`
}

defineExpose({
    updateChildTitle
})

</script>