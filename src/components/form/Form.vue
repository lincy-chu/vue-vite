<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'iForm',
  props: {
    model: {
      type: Object,
      default: {}
    },
    rules: {
      type: Object,
      default: {}
    }
  }
})
</script>

<style scoped lang="scss">

</style>
