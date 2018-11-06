<template>
    <div class="broadcast">
      <!-- list.length值不为0的时候才创建轮播 防止轮播图第一次不是显示第一张  -->
      <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
        <!-- 循环数据 -->
        <swiper-slide v-for="item of list" :key="item.id"><img :src="item.imgUrl" alt="图片" class="swiper-img"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 拖动最后一张再拖动回到第一张
        loop: true,
        autoplay: 1800,
        // 解决swiper手动改滑动之后，不再自动滑动了
        autoplayDisableOnInteraction: false
      }
    }
  },
  computed: {
    showSwiper () {
      // <!-- list.length值不为0的时候才创建轮播 -->
      return this.list.length
    }
  }
}

</script>
<style lang="stylus" scoped>
  // 防止在图片加载的高是从0到撑开，下面的内容会有抖动
  .broadcast
    overflow: hidden
    height : 0
    padding-bottom : 26.25%
    // 图片还没加载完时显示的颜色
    background: #eee;
    .swiper-img
      width : 100%
</style>
