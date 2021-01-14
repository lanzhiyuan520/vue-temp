import * as tools from '../common/js/tools'
import * as globalMethods from '../common/js/globalMethods'
import directive from '../directive'

const install = Vue => {
  Vue.use(directive)
  Vue.prototype.$tools = tools
  Vue.prototype.$globalMethods = globalMethods
}

export default install
