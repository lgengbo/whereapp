<template>
    <div>
        <ul class="list">
          <li v-for="letterItem of letters" :key="letterItem" :ref="letterItem" class="item" @click="handleLetterClick" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">{{letterItem}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeAnalphabet',
  props: {
    cities: Object
  },
  // 计算出A-Z的字母
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      // A距离顶部的距离
      startY: 0,
      // 触摸状态
      touchstatus: false,
      timer: null
    }
  },
  // 字母A距离顶部高度只计算一次
  // 页面数据被更新的时候
  updated () {
    // A距离顶部的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleTouchStart () {
      this.touchstatus = true
    },
    handleTouchMove (e) {
      // 微信中处理 向上滑动时整个页面跟随滚动的问题
      e.preventDefault()
      if (this.touchstatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 节流优化
        this.times = setTimeout(() => {
          // touches中获取才可以在单指操作中，event.touches[0] 获取单指的Y值
          const touchY = e.touches[0].clientY - 79
          // 获取到滑到距离顶部位置对应的字母
          const index = Math.floor((touchY - this.startY) / 20)
          if (index > 0 && index < this.letters.length) {
            // 传值到父组件
            this.$emit('changeLetter', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchstatus = false
    },
    handleLetterClick (e) {
      // 通过$emit发出自定义事件changeLetter,拿到父组件的方法,传递当前元素的字母给父组件
      this.$emit('changeLetter', e.target.innerText)
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
@import '~styles/varibles.styl'
.list
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  .item
    line-height: .4rem
    text-align: center
    color: $bgColor
</style>
