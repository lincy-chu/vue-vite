<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * provide/inject 依赖注入，主要为高阶插件/组件库提供用例，并不推荐直接用于应用程序代码中
 * 需要注意的是：provide和inject绑定并不是可响应的，这是刻意为之的。然而，如果你传入一个可监听的对象，那么其对象的属性还是可响应的。
 */
export default defineComponent({
  inject: ['name'], // 通过inject注入了从父组件中提供的name，name在组件中就可以直接使用this.name来访问这个变量了
  mounted() {
    console.log('this.name', this.name)
  }
})
</script>

<style scoped lang="scss">

</style>
