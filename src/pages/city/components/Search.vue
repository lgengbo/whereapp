<template>
    <div>
      <div class="search">
        <!-- 双向绑定数据 -->
        <input type="text" v-model="keyword" id="city_search" placeholder="输入城市名或拼音"/>
      </div>
      <!-- ref绑定滚动插件 -->
      <div class="search_content" v-show="keyword" ref="search">
        <ul>
          <li class="search_item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
          <li class="search-item border-bottom " v-show="hasNoData">没有匹配到数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'HomeSearch',
  props: {
    cities: Object
  },
  data () {
    return {
      // show
      keyword: '',
      // 定义输入拼音/字母的数据
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.keyword = ''
    }
  },
  computed: {
    // 判断没有匹配到值得时候,show
    hasNoData () {
      return !this.list.length
    }
  },
  // 监听keyword的变化
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果没有匹配到关键词
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          // 遍历所有字母
          this.cities[i].forEach((value) => {
            // 判断输入拼音/字母的有没有出现,遍历到符合条件的加入到resilt数组
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        // 返回的结果给list
        this.list = result
      }, 100)
    }
  },
  mounted () {
    const options = {
      // 处理在better-scroll在安卓手机上不能点击的问题
      click: true,
      tap: true
    }
    this.scroll = new Bscroll(this.$refs.search, options)
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.search
  height: 0.72rem
  padding: 0 0.1rem
  background: #00bcd4
  #city_search
    box-sizing: content-box
    width: 96%
    padding: 0 0.1rem
    line-height: 0.62rem
    text-align: center
    border-radius: 0.06rem
    color: #666
.search_content
  z-index: 1
  position: absolute
  overflow: hidden
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background: #eee
  .search_item
    line-height: 0.62rem
    padding-left: 0.2rem
    color: #666
    background: #fff
    text-align: left
</style>
