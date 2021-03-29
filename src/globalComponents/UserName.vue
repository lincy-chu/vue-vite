<template>
  <label>
    <input type="text" :value="firstName" placeholder="firstName" @input="$emit('update:firstName', $event.target.value)" />
    <input type="text" :value="lastName" placeholder="lastName" @input="$emit('update:lastName', $event.target.value)" />
  </label>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    firstName: {
      type: String,
      default: ''
    },
    lastName: {
      type: String,
      default: ''
    }
  },
  emits: ['update:firstName', 'update:lastName']
})
</script>

<style scoped>
  input + input{
    margin-left: 10px;
  }
</style>
