import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '/@/view/Index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('/@/view/About.vue'),
      meta: {
        title: '关于'
      }
    },
    {
      path: '/other',
      name: 'Other',
      component: () => import('/@/view/Other.vue'),
      meta: {
        title: '其他'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 路由前卫
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach(() => {
  // 路由后卫
})

export function setupRouter(app) {
  app.use(router)
}

export default router
