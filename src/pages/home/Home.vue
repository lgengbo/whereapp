<template>
  <home-header></home-header>
</template>
<script>
// 导入头部
import HomeHeader from './components/Header'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader
  }
}
</script>
// scoped 为让样式只在本组件生效
<style lang="stylus" scoped>

</style>
