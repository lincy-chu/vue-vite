<template>
  <div class="card">
    <header>{{ header }}</header>
    <img :src="pic" alt="" style="width: 100%;">
    <article>{{ article }}</article>
    <footer>{{ footer }}</footer>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Card',
  props: {
    header: {
      type: String,
      default: ''
    },
    pic: {
      type: String,
      default: ''
    },
    article: {
      type: String,
      default: ''
    },
    footer: {
      type: String,
      default: ''
    }
  }
})
</script>

<style scoped lang="scss">
  .card{
    width: 220px;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    border-radius: 5px;
    content-visibility: auto;
    will-change: opacity;
    & + .card{
      margin-bottom: 10px;
    }
  }
</style>
