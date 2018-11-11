<template>
    <div>
      <div class="item" v-for="(item,index) of categoryList" :key="index">
        <div class="item_title border-bottom">
          <span class="item_title_icon"></span>
          {{item.title}}
        </div>
        <div v-if="item.children" class="item_children">
          <!-- name值可以在使用递归组件的时候使用 -->
          <detail-list :categoryList="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    categoryList: Array
  },
  data () {
    return {}
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.item
  text-align: left;
  .item_title
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
    .item_title_icon
      display: inline-block
      width: .36rem
      height .36rem
      position: relative
      top: .06rem
      left: .06rem
      background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item_children
    padding: 0 .2rem
</style>
