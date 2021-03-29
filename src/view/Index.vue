<template>
  <div>
    <h3>1.自定义全局指令</h3>
    <label>
      <input type="text" v-focus>
    </label>
    <h3>2.注册全局组件</h3>
    <welcome-button @welcome="sayHi" />
    <h3>3.双向数据绑定</h3>
    <!--
      其实，v-model本质上是语法糖。它复杂监听用户的输入事件来更新数据，并在某些场景下进行一些特殊处理。需要注意的是v-model胡忽略所有表单元素的value、checked、selected attribute的初始值而总是将当前活动实例的数据作为数据来源。
      此外，v-model在内部为不同的输入元素使用不同的property并抛出不同的事件：
        . text和textarea元素使用value property和input事件
        . checkbox和radio元素使用check property和change事件
        . select元素将value作为prop并将change作为事件
    -->
    <custom-input v-model.trim.capitalize="searchText" />
    <p>搜索的内容：{{ searchText }}</p>
    <custom-input-name v-model:name="name" />
    <p>name的内容：{{ name }}</p>
    <h4>同时绑定多个值</h4>
    <user-name
        v-model:first-name="firstName"
        v-model:last-name="lastName"
    />
    <p>Your name: {{ firstName }} {{ lastName }}</p>
    <h3>4.动态组件</h3>
    <h4>4.1 绑定字符串类型</h4>
    <button
        v-for="tab in tabs"
        :key="tab"
        @click="currentTab = `tab-${tab.toLowerCase()}`"
    >
      {{ tab }}
    </button>
    <!-- 使用了component内置组件，该组件的is属性绑定了data对象的currentTab属性，该属性的类型是字符串。当用户点击tab按钮时，会动态更新currentTab的值，从而实现动态切换组件的功能 -->
    <component :is="currentTab" />
    <p>除了component和keep-alive组件外，还提供了transition、transition-group、slot和teleport内置组件</p>
    <h3>5.依赖注入</h3>
    <p>依赖注入简称DI。组件之间的依赖关系由容器在运行期决定，形象的说，即由容器动态的将某个依赖关系注入到组件之中。依赖周蕊的目的并非为软件系统提供更多功能，而是为了提升组件重用的频率，并为系统搭建一个灵活、可扩展的平台。</p>
    <p>在Vue3.0中，提供了简单的依赖注入功能--provide/inject。它们解决了以下问题：有一个深度嵌套的组件，而深度的子组件只需要父组件的部分内容。在这种情况下，如果仍然将prop沿着组件链逐级传递下去，这样使用起来会很麻烦。为了解决上述问题，Vue提供了provide和inject，使用provide/inject之后，无论组件层次结构多深，父组件都可以作为其子组件的依赖提供者。</p>
    <provide-component />
  </div>
</template>

<script>
import TabHome from '/@/components/TabHome.vue'
import TabMy from '/@/components/TabMy.vue'

const tabs = ['Home', 'My']
export default {
  name: 'Index',
  provide: {
    name: '阿宝哥',
    foo: 'fooOverride',
    bar: 'bar'
  },
  components: {
    'tab-home': TabHome,
    'tab-my': TabMy
  },
  data() {
    return {
      searchText: '阿宝哥',
      name: '测试',
      firstName: '',
      lastName: '',
      tabs,
      currentTab: `tab-${tabs[0].toLowerCase()}`
    }
  },
  methods: {
    sayHi() {
      console.log('你好，我是阿宝哥！')
    }
  }
}
</script>

<style scoped lang="scss">

</style>
