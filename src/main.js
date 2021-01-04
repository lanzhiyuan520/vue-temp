import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import packages from './package'
import http from './http'
import filter from './filters'


Vue.prototype.$http = http
Vue.config.productionTip = false
Vue.use(packages)
Vue.use(filter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
