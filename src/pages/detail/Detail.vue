<template>
    <div class="w">
      <detail-header></detail-header>
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
      <div class="content"></div>
    </div>
</template>

<script>
import DetailHeader from './components/Header'
import DetailBanner from './components/Banner'
import axios from 'axios'
export default {
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
    DetailBanner
  },
  methods: {
    // axios传值
    getDetailInfo () {
      axios.get('/api/detail.json').then(this.getCityInfoSucc)
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
