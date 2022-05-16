import Vue from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap'
import './axios'
import filters from './filters'


Vue.config.productionTip = false
Vue.use(bootstrap)

new Vue({
  filters,
  render: h => h(App),
}).$mount('#app')
