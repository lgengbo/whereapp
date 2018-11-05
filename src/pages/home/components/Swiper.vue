<template>
    <div class="broadcast">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img src="//img1.qunarzz.com/piao/fusion/1807/d5/fe8867e329175202.jpg_750x200_98799354.jpg" alt="图片" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1807/22/382624cbe97b0502.jpg_750x200_36a074d6.jpg" alt="图片" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1807/d5/fe8867e329175202.jpg_750x200_98799354.jpg" alt="图片" class="swiper-img"></swiper-slide>
        <swiper-slide><img src="http://img1.qunarzz.com/piao/fusion/1807/29/6a13907ab0f9bf02.jpg_750x200_452cfebe.jpg" alt="图片" class="swiper-img"></swiper-slide>
          <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
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
