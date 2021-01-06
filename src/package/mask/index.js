import Vue from 'vue'
import mask from './mask'

let instance;
const maskControuctor = Vue.extend(mask)

const init = () => {
  instance = new maskControuctor()
  instance.$mount()
  document.body.appendChild(instance.$el)
}
const $showMask = () => {
  init()
  instance.visibility = true
}
const $closeMask = () => {
  instance.visibility = false
  document.getElementById('mask__').remove()
  instance = null
}

const install = Vue => {
  Vue.prototype.$showMask = $showMask
  Vue.prototype.$closeMask = $closeMask
}

export default {
  install
}
