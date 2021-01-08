import Vue from 'vue'
import mask from './mask'

let instance;
const maskControuctor = Vue.extend(mask)

const init = () => {
  if (!instance) {
    instance = new maskControuctor()
  }
  instance.$mount()
  document.body.appendChild(instance.$el)
}
const $showMask = () => {
  init()
  if (!instance.visibility) {
    instance.visibility = true
  }
}
const $closeMask = () => {
  instance.visibility = false
  setTimeout(() => {
    document.getElementById('mask__').remove()
  },200)
}

const install = Vue => {
  Vue.prototype.$showMask = $showMask
  Vue.prototype.$closeMask = $closeMask
}

export default {
  install
}
