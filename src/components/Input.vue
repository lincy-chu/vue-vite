<template>
  <label>
    <input
        type="text"
        :placeholder="placeholder"
        :value="currentValue"
        @input="handleInput"
        @blur="handleBlur"
    >
  </label>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    value: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入'
    }
  },
  data() {
    return {
      currentValue: this.value
    }
  },
  watch: {
    value(val) {
      this.currentValue = val
    }
  },
  methods: {
    handleInput(event) {
      const { value } = event.target;
      this.currentValue = value;
      this.$emit('input', value);
    },
    handleBlur() {
      this.dispatch('iFormItem', 'on-form-blur', this.currentValue);
    }
  }
})
</script>

<style scoped lang="scss">

</style>
