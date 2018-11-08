<template>
      <div class="list" ref="wrapper">
        <div>
        <div class="area">
          <div class="title">当前城市</div>
          <div class="btn_list">
            <div class="btn_wrap">
              <div class="btn">{{this.city}}</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">热门城市</div>
          <div class="btn_list">
            <div class="btn_wrap" v-for="item of hot" :key="item.id">
              <div class="btn" @click="handleCityClick(item.name)">{{item.name}}</div>
            </div>
          </div>
        </div>
        <!-- v-for="(cityList,key) of cities"  得到cityList中key字母-->
        <div class="area" v-for="(cityList,key) of cities" :key="cityList.id" :ref="key">
          <div class="title">{{key}}</div>
          <!-- v-for="innerItem of cityList" 变量对应字母的数据 -->
          <div class="city_list" v-for="innerItem of cityList" :key="innerItem.id">
            <div class="city_item border-bottom" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
          </div>
        </div>
        </div>
      </div>
</template>

<script>
// 引入better-scroll插件
import Bscroll from 'better-scroll'
// vuex高级用法
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'HomeHearch',
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  data () {
    return {}
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    // 使用滚动插件
    const options = {
      // 处理在better-scroll在安卓手机上不能点击的问题
      click: true,
      tap: true
    }
    // 调用指定ref值
    this.scroll = new Bscroll(this.$refs.wrapper, options)
  },
  watch: {
    letter () {
      if (this.letter) {
        // this.$refs[this.letter] 获取的是数据  加上【0】就是dom元素了
        const element = this.$refs[this.letter][0]
        // 滚动到相应的元素
        this.scroll.scrollToElement(element)
      }
    }
  },
  methods: {
    handleCityClick (cityName) {
      // 直接修改commit 对应到index.js的actions
      // this.$store.commit('toChangeCity', cityName)
      this.toChangeCity(cityName)
      // vue router编程式的导航 点击完条船到路由为/的页面
      this.$router.push('/')
    },
    // 这样this.$store.commit('changeCity',city)可以改写成：this.changeCity(city)
    ...mapMutations(['toChangeCity'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
    .title
      line-height: 0.44rem
      background: #eee
      padding-left: 0.2rem
      color: #666
      font-size: 0.22rem
      text-align: left
    .btn_list
      overflow: hidden
      padding: 0.1rem 0.6rem 0.1rem 0.1rem
      .btn_wrap
        float: left
        width: 33.33%
        .btn
          margin: 0.1rem
          padding: 0.1rem 0
          text-align: center
          border: 0.02rem solid #ccc
          border-radius: 0.06rem
          font-size: 0.26rem
    .city_item
      line-height: 0.72rem
      padding-left: 0.2rem
      text-align: left
  .list
    overflow: hidden
    position: absolute
    width: 100%
    top: 1.58rem
    bottom: 0
    max-width: 13rem
    touch-action: none
</style>
