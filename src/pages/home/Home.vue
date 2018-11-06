<template>
<div class="w">
  <home-header></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons :list="iconList"></home-icons>
  <home-recommend :list="recommendList"></home-recommend>
</div>
</template>
<script>
// 导入头部
import HomeHeader from './components/Header'
// 轮播图
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
// axios应用
import axios from 'axios'
axios.defaults.baseURL = process.env.API_ROOT
export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend
  },
  methods: {
    getHomeInfo () {
      // 获取数据
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
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
