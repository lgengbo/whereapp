<template>
    <div class="broadcast">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="icon">
          <ul class="icon_img">
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
            <li class="icon_item"><a href="javascrpt:void()"><img src="//img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="图片" class="swiper_img"></a><span class="icon_text">景点门票</span></li>
          </ul>
          </swiper-slide>
          <swiper-slide></swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 拖动最后一张再拖动回到第一张
        loop: true,
        // 解决swiper手动改滑动之后，不再自动滑动了
        autoplayDisableOnInteraction: false
      }
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
    .icon_img
      display : flex
      margin-top: 0.1rem;
      flex-wrap : wrap
      overflow: hidden
      height: 0
      padding-bottom: 50%
      .icon_item
        display : flex
        background : #fff
        flex-direction : column
        box-sizing : border-box
        padding-top : 0.2rem
        width : 25%
        .swiper_img
          width : 74%
        .icon_text
          // 防止文字溢出
          ellipsis()
</style>
