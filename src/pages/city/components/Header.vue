<template>
    <div class="header">
      城市选择
      <a href="javacript:void()">
        <span class="iconfont back">&#xe624;</span>
      </a>
    </div>
</template>

<script>
export default {
  name: 'HomeCity',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.header
  position: relative
  overflow: hidden
  height: 0.86rem
  line-height: 0.86rem
  background: #00bcd4
  text-align: center
  color: #fff
  font-size: 0.4rem
  .back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    text-align: center
    font-size: 0.4rem
    color: #fff
</style>
