import Vue from 'vue'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
