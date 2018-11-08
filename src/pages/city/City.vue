<template>
    <div class="w">
      <city-header></city-header>
      <city-search :cities="cities"></city-search>
      <city-list
      :hot="hotCities"
      :cities="cities"
      :letter="letter">
      </city-list>
      <city-analphabet  :cities="cities" @changeLetter="handleLetterChange"></city-analphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAnalphabet from './components/Analphabet'
import axios from 'axios'
export default {
  name: 'HomeCity',
  data () {
    return {
      hotCities: [],
      cities: {},
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAnalphabet
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.getCityInfoSucc)
    },
    // 获取axios数据进行赋值
    getCityInfoSucc (res) {
      const resData = res.data
      if (resData.ret && resData.data) {
        const data = resData.data
        this.hotCities = data.hotCities
        this.cities = data.cities
      }
    },
    // 点击字母触发的事件
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/mixins.styl'
.w{
    max-width: 13rem;/*移动端650px,并且最好使用max-width*/
    margin: 0 auto;
  }
</style>
