import Vue from 'vue'
import Demo from './demo.vue'
import VueHighlightJS from 'vue-highlightjs'

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS)

Vue.config.productionTip = false
const context = require.context('./', true, /^((?!demo\.vue).)+\.vue$/)
console.log(`context(context.keys()[0]):`, context(context.keys()[0]))
console.log(`context.keys():`, context.keys())
try {
  context.keys().forEach(path => {
    let res = context(path)
    console.log(`res:`, res)
    Vue.component(res.default.name, res.default)
  })
} catch (e) {
  console.log(e)
}

new Vue({
  render: h => h(Demo)
}).$mount('#app')
