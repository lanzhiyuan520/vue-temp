import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import packages from './package'
import http from './http'
import filter from './filters'
import mixin from './mixin'
import plugins from './plugins'

Vue.prototype.$http = http
Vue.prototype.$eventBus = new Vue()
Vue.config.productionTip = false
Vue.use(packages)
Vue.use(filter)
Vue.use(plugins)
Vue.mixin(mixin)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
