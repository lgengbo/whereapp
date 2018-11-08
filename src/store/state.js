
let defaultCity = '南京'

// 接受存储在本地的数据,进行赋值
try {
  if (localStorage.city) {
    defaultCity = localStorage.city || '上海'
  }
} catch (e) {}

export default {
  city: defaultCity
}
