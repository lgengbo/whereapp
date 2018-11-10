<template>
    <div>
      <div class="banner">
        <img :src="bannerImg" alt="横幅" @click="handleBannerClick" class="banner_img">
        <router-link tag="div" to="/" class="back_wrap">
          <div class="iconfont banner_back">&#xe624;</div>
        </router-link>
        <div class="banner_info">
          <div class="banner_title">{{sightName}}</div>
          <div class="banner_number">
            <span class="iconfont banner_icon">&#xe608;</span>&nbsp;4
          </div>
        </div>
        <common-gallary :imgs="gallaryImgs" v-show="ShowGallary" @hallaryclose="handleGlallayColse"></common-gallary>
      </div>
    </div>
</template>

<script>
import CommonGallary from '../../../common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    // 字符串直接绑定就好
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      // 画廊是否显示
      ShowGallary: false
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    // 隐藏画廊
    handleBannerClick () {
      this.ShowGallary = true
    },
    // 显示画廊
    handleGlallayColse () {
      this.ShowGallary = !this.ShowGallary
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.banner
  position relative
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner_img
    width: 100%;
  .back_wrap
    position: absolute;
    margin-left: 0.2rem;
    top: 0.2rem;
    text-align: center;
    width: 0.6rem;
    height: 0.6rem;
    line-height: 0.6rem;
    border-radius: 0.3rem;
    background: rgba(0,0,0,0.5);
    .banner_back
      color: #fff;
      font-size: 0.3rem;
      margin-left: -0.06rem;
  .banner_info
    position: absolute
    display: flex
    justify-content: space-between
    color: #fff
    bottom: 0
    left: 0;
    right: 0;
    line-height: 0.6rem;
    // 渐变
    background-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0)), to(rgba(0,0,0,0.8)))
    .banner_title
      flex: 1
      text-align: start
      font-size: 0.32rem
      padding: 0 0.2rem
    .banner_number
      margin-top: 0.14rem
      padding: 0 0.4rem
      height: 0.32rem
      line-height: 0.32rem
      border-radius: 0.2rem
      background: rgba(0,0,0,0.8)
      font-size: 0.24rem
      .banner_icon
        font-size: 0.24rem
        line-height: 0.24rem
</style>
