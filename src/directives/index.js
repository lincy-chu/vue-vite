/**
* Created by robin zhu on 2021/3/22
*/

// 定义全局指令
const focus = (app) => {
  /*
    directive方法支持一下两个参数
      name：表示指令的名称
      directive（可选）：表示指定的指令

    一个指定定义对象可以提供如下几个钩子函数（均为可选）
      created：在绑定元素的属性或事件监听器被应用之前调用
      beforeMount：当指令第一次绑定到元素并且在挂载父组件之前调用
      mounted：在绑定元素的父组件被挂载后调用
      beforeUpdate：在更新包含组件的VNode之前调用
      updated：在更新包含组件的VNode及其子组件的VNode更新后调用
      beforeUnmount：在卸载绑定元素的父组件之前调用
      unmounted：当指令与元素解除绑定且父组件已卸载时，只调用一次
   */
  app.directive('focus', {
    // 当被绑定的元素挂载到DOM中时被调用
    mounted(el) {
      // 聚焦元素
      el.focus();
    }
  });
}

export function setupGlobalDirectives(app) {
  focus(app);
}


