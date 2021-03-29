<template>
  <div>
    <header>关于页面</header>
    <HelloWorld msg="你好，Vue3!" />
  </div>
</template>

<script>
import { login } from '../api'
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'About',
  components: {
    HelloWorld
  },
  setup() {
    login({userName: 'lincychu', password: 'zdp1985@0829'}).then(data => {
      console.log(data)
    }, err => {})
  }
}
</script>

<style scoped lang="scss">

</style>
