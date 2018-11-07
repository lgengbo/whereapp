<template>
    <div>
      <div class="search">
        <input type="text" name="city_search" id="city_search" placeholder="输入城市名或拼音"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeSearch',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.search
  height: 0.72rem;
  padding: 0 0.1rem;
  background: #00bcd4
  #city_search
    box-sizing: content-box;
    width: 96%;
    padding: 0 0.1rem;
    line-height: 0.62rem;
    text-align: center;
    border-radius: 0.06rem;
    color: #666;
</style>
