import Vue from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import {DateTime} from 'luxon';
import Diff from 'text-diff';

Vue.config.productionTip = false

Vue.filter('formatDate', function (value) {
    if (value) {
        return DateTime.fromMillis(Number(value)).toLocaleString(DateTime.DATETIME_MED)
    }
})

Vue.filter('diff', function (text1, text2) {
    let diff = new Diff();
    let textDiff = diff.main(text1, text2);
    return diff.prettyHtml(textDiff);
})

new Vue({
    render: h => h(App),
}).$mount('#app')
