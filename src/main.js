import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
  "X-CSRFToken": "example-of-custom-header",

};

axios.defaults.headers.post['xsrfCookieName'] = 'CSRFToken';
axios.defaults.headers.post['xsrfHeaderName'] = 'X-CSRFToken';
axios.defaults.headers.post['responseType'] = 'json';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
