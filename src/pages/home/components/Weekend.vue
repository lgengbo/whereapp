<template>
    <div>
      <div class="title">周末去哪儿</div>
      <ul>
        <li v-for="item of list" :key="item.id" class="item">
           <img :src="item.imgUrl" alt="" class="item_img">
           <p class="item_title">{{item.title}}</p>
           <p class="item_desc">{{item.desc}}</p>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {}
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.item
  text-align : left
  .item_img
    width: 100%
  .item_title
    line-height: 0.54rem;
    font-size: 0.28rem;
    color: #212121;
    ellipsis()
  .item_desc
    line-height: 0.4rem;
    color: #616161;
    font-size: 0.24rem;
.title
  margin-top: 0.2rem;
  line-height: 0.8rem;
  background: #eee;
</style>
