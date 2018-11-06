<template>
    <div class="w">
      <city-header></city-header>
    </div>
</template>

<script>
import CityHeader from './components/Header'
export default {
  name: 'HomeCity',
  data () {
    return {}
  },
  components: {
    CityHeader
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
