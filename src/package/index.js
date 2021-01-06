import mask from './mask'

const packages = []

const install = Vue => {
  Vue.use(mask)
  packages.forEach(item => {
    Vue.component(item.name,item)
  })
}

export default {
  install
}
