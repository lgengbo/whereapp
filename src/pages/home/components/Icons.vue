<template>
    <div class="broadcast">
      <swiper :options="swiperOption" ref="mySwiper" v-if="showIcons">
        <!-- slides -->
        <swiper-slide class="icons" v-for="(page, index) of pages" :key="index">
         <div class="icon" v-for="item of page" :key="item.id">
                <div class="icon-img">
                  <img class="icon-image-content" :src='item.imgUrl'/>
                </div>
                <p class="icon-desc">{{item.desc}}</p>
            </div>
          </swiper-slide>
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
      // 循环 item, index 是循环项和循环下标
      this.list.forEach((item, index) => {
        // 数据显示在哪一页,如果index到9就是取1一个显示在第二页
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    },
    showIcons () {
      // <!-- list.length值不为0的时候才创建Icons -->
      return this.list.length
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
    //处理高度滑动，在下面就可以左滑右滑
.icons >>> .swiper-container {
    height: 0;
    padding-bottom: 50%;
}

.icons {
    margin-top: 0.1rem;
    .icon {
        position: relative;
        overflow: hidden;
        float: left;
        height: 0;
        width: 25%;
        padding-bottom: 25%;
        .icon-img {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0.44rem;
            box-sizing: border-box;
            paddiong: 0.1rem;
            .icon-image-content {
                display: block;
                margin: 0 auto;
                height: 100%;
            }
        }
        .icon-desc {
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            height: 0.44rem;
            line-height: 0.44rem;
            text-align: center;
            color: $darkTextColor;
            //超出文字显示...
            ellipsis();
        }
    }
}
</style>
