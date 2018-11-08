import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  // 注册数据和方法库
  state,
  mutations,
  actions: {
    changeCity (ctx, city) {
      // 连接方法
      ctx.commit('toChanggeCity', city)
    }
  }
})
