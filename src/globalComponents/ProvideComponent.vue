<template>
  <div>依赖注入：{{ name }}</div>
</template>

<script>
import { defineComponent, inject } from 'vue'

export default defineComponent({
  // inject: ['name'],
  setup() {
    const foo = inject('foo')
    const bar = inject('bar')
    const name = inject('name')
    return () => [foo, bar, name].join(',')
  }
})
</script>

