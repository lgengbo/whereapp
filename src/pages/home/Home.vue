<template>
<div class="w">
  <home-header></home-header>
  <home-swiper></home-swiper>
  <home-icons></home-icons>
</div>
</template>
<script>
// 导入头部
import HomeHeader from './components/Header'
// 轮播图
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import axios from 'axios'

axios.defaults.baseURL = process.env.API_ROOT
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  mounted () {

  }
}
</script>
// scoped 为让样式只在本组件生效
<style lang="stylus" scoped>
.w{
    max-width: 13rem;/*移动端650px,并且最好使用max-width*/
    margin: 0 auto;
  }
</style>
