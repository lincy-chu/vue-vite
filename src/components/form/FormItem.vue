<template>
  <div class="form-item">
    <label class="label" v-if="label">{{ label }}</label>
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'iFormItem',
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
  .form-item{
    margin-top: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .label{
      display: inline-block;
      width: 50px;
    }
    .slot{

    }
  }
</style>
