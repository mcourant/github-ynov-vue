import Vue from 'vue'
import App from './App.vue'
import VueRangedatePicker from 'vue-rangedate-picker'
import moment from "moment"

Vue.config.productionTip = false
Vue.use(VueRangedatePicker)
Vue.component("DatePicker", VueRangedatePicker)

Vue.filter('formatDate', function(value) {
  if (value) {
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
  }
})
new Vue({
  render: h => h(App)
}).$mount('#app')
