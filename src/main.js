import { createApp } from 'vue'
import { setupGlobalDirectives } from './directives'
import { setupGlobalComponents } from './globalComponents'
import { setupRouter } from './router'
import { setupMixin } from './mixin'
import App from './App.vue'
import './index.scss'

const app = createApp(App)

/*
    App对象提供了哪些API？
    在Vue3中，改变全局Vue行为的API现在移动到了由新的createApp方法所创建的应用实例上。应用实例为我们提供了以下API来实现特定的功能：
      。config()：包含应用配置的对象
      。unmount()：在提供的DOM元素上卸载应用实例的根组件
      。mixin（mixin: ComponentOptions）：将一个mixin应用在整个应用范围内
      。provide(key, value)：设置一个可以被注入到应用范围内所有组件中的值
      。component(name: string, component?: Component)：注册或检索全局组件
      。directive(name: string, directive?: Directive)：注册或检索全局指令
      。use(plugin: Plugin, ...options: any[])：安装Vue.js插件，当在同一个插件上多次调用此方法时，该插件将仅安装一次
      。mount(rootContainer: HostElement, isHydrate?: boolean, isSVG？： boolean)：将应用实例的根组件挂载在提供的DOM元素上
 */

setupGlobalDirectives(app)

setupGlobalComponents(app)

setupRouter(app)

setupMixin(app)

app.mount('#app')
