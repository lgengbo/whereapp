<template>
    <div class="w">
      <city-header></city-header>
      <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
export default {
  name: 'HomeCity',
  data () {
    return {}
  },
  components: {
    CityHeader,
    CitySearch
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
