<template>
<div>
  <home-header></home-header>
  <home-swiper></home-swiper>

</div>
</template>
<script>
// 导入头部
import HomeHeader from './components/Header'
// 轮播图
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
// scoped 为让样式只在本组件生效
<style lang="stylus" scoped>

</style>
