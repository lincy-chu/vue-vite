<template>
  <label>
    <input type="text" :value="name" @input="$emit('update:name', $event.target.value)">
  </label>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  emits: ['update:name']
})
</script>

<style scoped>
label{
  display: block;
}
</style>
