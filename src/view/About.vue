<template>
  <div>
    <header>关于页面</header>
    <i-button size="small" @on-click="handleClick">按钮</i-button>
    <i-button size="default">按钮</i-button>
    <i-button size="large">按钮</i-button>
    <i-button size="other">按钮</i-button>
    <i-button disabled>禁用按钮</i-button>
    <component-a ref="comA" />
    <component-b />
    <HelloWorld msg="你好，Vue3!" />
  </div>
</template>

<script>
import { login } from '../api'
import HelloWorld from '../components/HelloWorld.vue'
import IButton from '../components/IButton.vue'
import ComponentA from '../components/ComponentA.vue'
import ComponentB from '../components/ComponentB.vue'

export default {
  name: 'About',
  provide: {
    name: 'Jack' // 它的作用就是将name这个变量提供给它的所有子组件
  },
  components: {
    HelloWorld,
    IButton,
    ComponentA,
    ComponentB
  },
  setup() {
    login({userName: 'lincychu', password: 'zdp1985@0829'}).then(data => {
      console.log(data)
    }, err => {})
  },
  mounted () {
    this.$nextTick(() => {
      this.communication();
    })
  },
  methods: {
    handleClick() {
      console.log('按钮被点击！')
    },
    communication() {
      /*
        Vue.js内置的通信手段一般有两种：
          。ref：给元素或组件注册引用信息
          。$parent/$children：访问父子/组件，也是基于当前上下文访问父组件或全部子组件的。
          这两种方法的弊端是，无法在跨级或兄弟间通信
       */
      const title = this.$refs.comA.title
      console.log('title', title)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
