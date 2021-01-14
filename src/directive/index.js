/**
 * 防止多次点击
 * @type {{inserted: checkClick.inserted}}
 */
const checkClick = {
  inserted : (el,binding) => {
    let isClick = false
    el.addEventListener('click',(e) => {
      if (isClick) {
        return
      }
      isClick = true
      binding.value(e)
      setTimeout(() => {
        isClick = false
      },500)
    })
  }
}

const directives = {
  checkClick
}

const install = Vue => {
  Object.keys(directives).forEach(key => {
    Vue.directive(key,directives[key])
  })
}
export default install
