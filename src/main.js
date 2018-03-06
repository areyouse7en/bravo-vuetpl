import Vue from 'vue'
import App from './App.vue'

import bravoHttp from 'bravo-http'
Vue.use(bravoHttp)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')