import Vue from 'vue'
import App from './App.vue'
import router from '@/router/index.js';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import axios from 'axios';
Vue.prototype.axios = axios

Vue.config.productionTip = false

import '@/assets/css/style.css';
import '@/assets/css/base.css';

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
