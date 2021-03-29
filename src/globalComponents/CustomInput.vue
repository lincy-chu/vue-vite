<template>
  <label>
    <input type="text" :value="modelValue" @input="emitValue">
  </label>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    modelModifiers: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['update:modelValue'],
  methods: {
    emitValue(e) {
      let value = e.target.value
      if (this.modelModifiers.capitalize) { // 自定义修饰符
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
      this.$emit('update:modelValue', value)
    }
  }
})
</script>

<style scoped>
label{
  display: block;
  margin-bottom: 8px;
}
</style>
