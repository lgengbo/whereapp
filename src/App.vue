<template>
  <div id="app">
    <!-- keep-alive意思是加载一下路由ajax就放在内存之中，下次ajax请求就不会在请求 -->
    <!-- 也可以keepalive 不给detail加缓存：  Detail是组件name值,就是除了Detail不会被缓存，其他会 -->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
