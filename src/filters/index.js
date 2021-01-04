const filters = {
  test (val) {
    return val + '123'
  }
}

const install = Vue => {
  for (let item in filters) {
    Vue.filter(item,filters[item])
  }
}

export default {
  install
}
