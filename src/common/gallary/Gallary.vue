<template>
      <div class="container" @click="handleGallaryClick">
        <div class="wrapper">
          <swiper :options="swiperOption" ref="mySwiper" v-if="isShowGallary">
            <!-- slides -->
            <swiper-slide v-for="(item,index) of imgs" :key="index">
              <img :src="item" alt="画廊" class="gallery_img" >
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
        </div>
      </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction', // 显示 2/3页码
        observeParents: true, // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observer: true, // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）或者修改swiper的子元素时，自动初始化swiper。默认false，不开启，可以使用update()方法更新。
        loop: true, // 以下4个处理自动滚动
        disableOnInteraction: false,
        autoplayDisableOnInteraction: false // 解决swiper手动改滑动之后，不再自动滑动了
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('hallaryclose') // 单引号
    }
  },
  computed: {
    // 防止画廊开始显示在末页
    isShowGallary () {
      return this.imgs.length > 0
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
// 样式穿透
.container >>> .swiper-container
  overflow: inherit;
.container >>> .swiper-pagination
  overflow: inherit
  color: #fff
  bottom: -1rem
.container
  z-index: 99
  display: flex
  position: fixed
  top: 0
  bottom: 0
  left: 0
  right: 0
  justify-content: center
  flex-direction: column
  background-color: #000
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .gallery_img
      width: 100%;
      margin-top: 1rem;
</style>
