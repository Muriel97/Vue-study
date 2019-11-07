import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'

// 枚举返回对象的属性
// Object.keys(filters).forEach(key => {
//   window.console.log(key, filters[key]) // 分两次输出testFilters money及函数
//   Vue.filter(key, filters[key])
// })

Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
