
const packages = []

const install = Vue => {
  packages.forEach(item => {
    Vue.component(item.name,item)
  })
}

export default {
  install
}
