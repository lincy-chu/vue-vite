## 使用vite和Vue3.0搭建项目

### 1.全局安装@vitejs/app

使用npm:
```
npm init @vitejs/app
```

使用yarn：
```
yarn create @vitejs/app
```

### 2.搭建vite项目

使用npm：
```
# npm 7+，需要额外的双横线：
npm init @vitejs/app my-vue-app -- --template vue
```

使用yarn：
```
yarn create @vitejs/app my-vue-app --template vue
```

vite支持的vue模板预览包括：
- vue
- vue-ts

### 3.引入vue-router
3.1 使用命令行查看vue-router所有版本号
使用npm：
```
npm info vue-router versions    
```
使用yarn：
```
yarn info vue-router versions
```
安装最新的且为非beta版本的vue-router
```
yarn add vue-router@4.0.5
```

3.2 初始化vue-router
```
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../view/Index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})

export function setupRouter(app) {
  app.use(router)
}

export default router
```

3.3 使用router
```
// 使用vue-router
setupRouter(app)
```

3.4 App.vue中添加<router-view>
```
<template>
    <router-view/>
</template>    
```

### 4.引入sass
```
yarn add sass
```
