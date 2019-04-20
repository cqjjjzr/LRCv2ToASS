import Vue from 'vue'
import App from './App.vue'
//import VueMaterial from 'vue-material/'
import { MdButton, MdContent, MdApp, MdToolbar, MdField, MdList, MdMenu } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdField)
Vue.use(MdList)
Vue.use(MdMenu)

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
