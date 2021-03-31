<template>
  <button :class="'i-button ' + size" :disabled="disabled" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from 'vue'
const oneOf = (value, validList) => {
  return validList.includes(value)
}
const sizeArr = ['small', 'large', 'default']
export default defineComponent({
  props: {
    size: {
      validator(value) {
        return oneOf(value, sizeArr)
      },
      default: 'default'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['on-click'],
  methods: {
    handleClick(event) {
      this.$emit('on-click', event)
    }
  }
})
</script>

<style scoped lang="scss">
  .i-button{
    background: #3388ff;
    color: #fff;
    border-radius: 3px;
    padding: 3px 5px;
    outline: none;
    border: none;
    opacity: 1;
    transition: all 0.5s;
    cursor: pointer;
    &:hover{
      opacity: 0.8;
    }
    &:disabled{
      background: #eeee;
      cursor: not-allowed;
    }
  }
  .default{
    padding: 5px 8px;
  }
  .large{
    padding: 8px 12px;
  }
</style>
