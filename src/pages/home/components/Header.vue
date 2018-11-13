<template>
  <div>
    <div class="header">
      <!-- 左侧 -->
      <div class="header_left">
        <div class="iconfont">&#xe624;</div>
      </div>
      <!-- 搜索框 -->
      <div class="header_input">
        <input type="text" name="search" class="search" placeholder="输入城市/景点/游玩主题">
        <span class="iconfont seach_icon">&#xe609;</span>
      </div>
      <router-link to="/city">
        <div class="header_right">
          <!-- 通过vuex取值 -->
          {{this.$store.state.city}}
          <span class="iconfont">&#xeb6d;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  // name用' '
  name: 'HomeHeader',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    display : flex
    height: .86rem
    background-color : #00bcd4
    line-height: 0.86rem;
    .header_left
      float : left
      width: .64rem
      color: #fff
    .header_input
      flex : 1
      height: .64rem;
      position: relative
      padding-left: 0.2rem
      margin-top: 0.12rem
      margin-left: 0.08rem
      text-align: left
      background-color #fff
      border-radius : .1rem
      line-height .64rem
      color : #ccc
      .search
        width: 80%
        padding-left: .5rem
        color: #666
      .seach_icon
        position: absolute
        left: .2rem
    .header_right
      min-width: 1.04rem
      padding: 0 0.1rem
      float: right
      text-align: center
      color: #fff
</style>
