<template>
  <div>
    导航栏 |
    <router-link to="/">首页</router-link> | <router-link to="/about">关于</router-link> | <router-link to="/other">其他</router-link>
  </div>
  <router-view />
</template>

<script>
export default {
  name: 'App'
}
</script>
