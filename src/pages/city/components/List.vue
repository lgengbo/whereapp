<template>
    <div>
      <div class="List">
        <div class="area">
          <div class="title">当前城市</div>
          <div class="btn_list">
            <div class="btn_wrap">
              <div class="btn">上海</div>
            </div>
          </div>
        </div>
        <div class="area">
          <div class="title">热门城市</div>
          <div class="btn_list">
            <div class="btn_wrap" v-for="item of hot" :key="item.id">
              <div class="btn">{{item.name}}</div>
            </div>
          </div>
        </div>
        <!-- v-for="(cityList,key) of cities"  得到cityList中key字母-->
        <div class="area" v-for="(cityList,key) of cities" :key="cityList.id">
          <div class="title">{{key}}</div>
          <!-- v-for="innerItem of cityList" 变量对应字母的数据 -->
          <div class="city_list" v-for="innerItem of cityList" :key="innerItem.id">
            <div class="city_item border-bottom">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHearch',
  props: {
    hot: Array,
    cities: Object
  },
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.title
  line-height: 0.44rem
  background: #eee
  padding-left: 0.2rem
  color: #666
  font-size: 0.22rem
  text-align: left
.btn_list
  overflow: hidden
  padding: 0.1rem 0.6rem 0.1rem 0.1rem
  .btn_wrap
    float: left
    width: 33.33%
    .btn
      margin: 0.1rem
      padding: 0.1rem 0
      text-align: center
      border: 0.02rem solid #ccc
      border-radius: 0.06rem
      font-size: 0.26rem
.city_item
  line-height: 0.72rem;
  padding-left: 0.2rem;
  text-align: left;
</style>
