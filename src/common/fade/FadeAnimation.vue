<template>
      <transition>
        <!-- 插槽 调用方的包裹的子组件会填充到这里 -->
        <slot></slot>
      </transition>
</template>

<script>
export default {
  name: 'Commonfade',
  props: {
    imgs: Array
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.v-enter,.v-leave-to   //【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经结束了 */
  opacity: 0
.v-enter-active,v-leave-to    // 【入场动画的时间段】 【离场动画的时间段】
  transition : opacity .5s
</style>
