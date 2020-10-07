import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import { DateTime } from 'luxon';

Vue.config.productionTip = false

Vue.filter('formatDate', function(value) {
  if (value) {
    return DateTime.fromMillis(Number(value)).toLocaleString(DateTime.DATETIME_MED)
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
