// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 初始化样式
import './assets/styles/reset.css'
// 1像素边框解决方案
import './assets/styles/border.css'
// 引入图标样式
import './assets/styles/iconfont.css'
// 部分浏览器300毫秒点击延迟
import fastclick from 'fastclick'
// 引入swiper插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
// 引入vuex
import store from './store'
// 解决Android手机浏览器兼容问题
import 'babel-polyfill'
fastclick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
// 300毫秒点击延迟
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // 注册vuex
  store,
  components: { App },
  template: '<App/>'
})
