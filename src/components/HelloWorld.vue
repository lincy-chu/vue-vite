<template>
  <p>{{ message }}</p>
  <button @click="reverseMessage">反转</button>
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
  <p>{{ count }}</p>
  <button @click="debouncedClick">点击+1</button>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <p>{{ firstName }} - {{ lastName }}</p>
  <p>全名：{{ fullName }}</p>
  <button @click="setFullName">设置全名</button>
  <div :class="classObj">对象语法</div>
  <div :class="[activeClass, errorClass]">数组语法</div>
  <div :style="styleObject">绑定内联样式 -- 对象语法</div>
  <div :style="[baseStyles]">绑定内联样式 -- 数组语法</div>
  <button @click="one($event),two($event)">多事件处理</button>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String
  },
  // setup()函数是Vue3中专门为组件提供的新属性，它为我们使用Vue3的Composition API新特性提供了统一的入口。setup函数会在beforeCreate之后、created之前执行，一旦props被解析，并充当合成API的入口点
  setup(props, context) {
    // 由于在执行setup时尚未创建组件实例，因此在setup选项中没有this，这意味着，除了props外，将无法访问组件中声明的任何属性 -- 本地状态、计算属性或者方法
    // setup选项应该是一个接受props和context的函数，此外，从setup返回的所有内容都将暴露组件的其余部分（计算属性、方法、生命周期钩子等等）以及组件的模板
    // 因为props是响应式的，你不能使用ES6解构，因为它会消除prop的响应性
    console.log('props', props);
  },
  data() {
    return {
      message: 'Hello Vue.js!',
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      count: 0,
      debouncedClick: null,
      author: {
        name: 'John Doe',
        books: [
          'Vue 2 - Advanced Guide',
          'Vue 3 - Basic Guide',
          'Vue 4 - The Mystery'
        ]
      },
      firstName: 'lincy',
      lastName: 'chu',
      classObj: {
        active: true,
        'text-danger': true
      },
      activeClass: 'active',
      errorClass: 'text-danger',
      styleObject: {
        color: 'red',
        fontSize: '14px'
      },
      baseStyles: {
        color: 'red',
        fontSize: '14px'
      }
    }
  },
  computed: {
    publishedBooksMessage() {
      return this.author.books.length > 0 ? 'Yes': 'No'
    },
    fullName: {
      // getter
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      // setter
      set(newValue) {
        const names = newValue.split(' ');
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  // 生命周期相关钩子
  beforeCreate () {},
  created () {
    // 用lodash的防抖函数
    this.debouncedClick = this.debounce(this.click, 500)
  },
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeUnmount () {},
  unmounted () {
    // 移除组件时，取消定时器
    this.debouncedClick.cancel();
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('');
    },
    click() {
      this.count++;
    },
    setFullName() {
      this.fullName = 'Jack Chan';
    },
    one() {
      console.log('one');
    },
    two() {
      console.log('two');
    }
  }
})
</script>

<style scoped lang="scss">
ol{
  list-style: none;
}
.active{
  color: #38f;
}
</style>
