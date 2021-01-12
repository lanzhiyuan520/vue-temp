import * as tools from '../common/js/tools'
import * as globalMethods from '../common/js/globalMethods'

const install = Vue => {
  Vue.prototype.$tools = tools
  Vue.prototype.$globalMethods = globalMethods
}

export default install
