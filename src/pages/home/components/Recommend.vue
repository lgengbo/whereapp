<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <!-- 替换li标签   tag="li"映射为li标签 -->
     <!--  ：to 配合动态路由-->
      <router-link :to="'/detail/'+ item.id"  tag="li" v-for="item of list" :key="item.id" class="item" >
          <img :src='item.imgUrl' alt="推荐" class="item_img">
          <div class="item_info">
            <p class="item_title">{{item.title}}</p>
            <p class="item_desc">{{item.desc}}</p>
            <button class="item_btn">查看详细</button>
          </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  // name用' '
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
  .title
    line-height: 0.8rem;
    background: #eee;
  .item
    display : flex
    .item_img
      width: 1.7rem
      height: 1.7rem
      padding: 0.1rem
    .item_info
      flex : 1
      text-align : left
      padding: 0.1rem
      .item_title
        line-height: 0.54rem;
        font-size : 0.32rem
        ellipsis()
      .item_desc
        line-height: 0.4rem;
        color: #ccc;
        ellipsis()
      .item_btn
        line-height: 0.44rem;
        margin-top: 0.16rem;
        background: #ff9300;
        padding: 0 0.2rem;
        border-radius: 0.06rem;
        color: #fff;
</style>
