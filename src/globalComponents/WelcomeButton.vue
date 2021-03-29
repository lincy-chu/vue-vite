<template>
  <button @click="$emit('welcome')">欢迎</button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  emits: ['welcome'] // 通过emits属性定义了该组件上的自定义事件
})
</script>
