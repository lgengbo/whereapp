<template>
    <div>
      <router-link tag="div" to="/" class="header_abs" v-show="showAbs" :style="opacityBackStyle">
        <div class="iconfont back-icon-back">&#xe624;</div>
      </router-link>
      <!-- 绑定是否显示和样式透明度 -->
      <div class="detail_header"  :style="opacityHeaderStyle"  v-show="!showAbs">
         <router-link to="/">
           <div class="iconfont header_back">&#xe624;</div>
         </router-link>
          景点详情
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      // 控制标题和返回键的显示隐藏
      showAbs: true,
      // 返回键的渐变
      opacityBackStyle: {
        opacity: 1
      },
      // 固定标题的渐变
      opacityHeaderStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 滚动条距离顶部的高度
      const scrollTop = window.parent.document.documentElement.scrollTop
      // 滚动高度大于40时逐渐出现标题
      if (scrollTop > 40) {
        let opacity = scrollTop / 130
        opacity = opacity > 1 ? 1 : opacity
        this.opacityHeaderStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
        let opacity = scrollTop / 40
        // 三目运算符赋值
        opacity = opacity > 1 ? 1 : opacity
        // 隐藏标题
        this.opacityBackStyle = {
          opacity: (1 - opacity)
        }
      }
    }
  },
  // 全局安装滚动事件,每次更新的触发
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  // 退出页面就解绑事件
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header_abs
  z-index: 2
  position: absolute
  margin-left: .2rem
  top: .2rem
  text-align: center
  width: .6rem
  height: .6rem
  line-height: 0.6rem
  border-radius: .3rem
  background: rgba(0, 0, 0, .5)
  .back-icon-back
    font-size: .3rem
    color: #fff
    margin-left: -.06rem
.detail_header
  z-index: 2
  position: fixed
  top: 0
  width: 100%
  max-width: 13rem
  overflow: hidden
  height: $headerHeight
  line-height: $headerHeight
  background: $bgColor
  text-align: center
  color: #fff
  font-size: .4rem
  .header_back
    position: absolute
    top: 0
    width: .64rem
    text-align: center
    font-size: .4rem
    color: #fff
</style>
