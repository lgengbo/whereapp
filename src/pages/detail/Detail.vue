<template>
    <div class="w">
      <detail-header></detail-header>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
      <detail-list :categoryList="categoryList"></detail-list>
      <div class="content"></div>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      categoryList: []
    }
  },
  components: {
    DetailHeader,
    DetailBanner,
    DetailList
  },
  methods: {
    // axios传值
    getDetailInfo () {
      // 获取路由参数并传参给接口
      axios.get('/api/detail.json?id=' + this.$route.params.id).then(this.getCityInfoSucc)
      // axios.get('/api/detail.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      const resData = res.data
      if (resData.data && resData.ret) {
        const data = resData.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.categoryList = data.categoryList
      }
    }
  },
  // 获取信息
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.w
  //  13rem;/*移动端650px,并且最好使用max-width*/
  max-width: 13rem
  margin: 0 auto
  .content
    height: 50rem
</style>
