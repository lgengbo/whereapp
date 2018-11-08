export default {
  toChangeCity (state, city) {
    state.city = city
    // 本地存储选中城市数据
    try {
      localStorage.city = city
    } catch (e) {}
  }
}
