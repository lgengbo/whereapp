<template>
    <div class="broadcast">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="icon" v-for="(page, index) of pages" :key="index">
          <ul class="icon_img">
            <li class="icon_item" v-for="item of page" :key="item.id"><a href="javascrpt:void()"><img :src='item.imgUrl' alt="图片" class="swiper_img"></a><span class="icon_text">{{item.desc}}</span></li>
          </ul>
          </swiper-slide>
          <swiper-slide></swiper-slide>
      </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
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
  },
  computed: {
    // 解决分页
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
