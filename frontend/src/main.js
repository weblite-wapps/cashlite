import Vue from 'vue';
import App from './App.vue';
import router from './router'
import store from './store'
// global css style
import './helper/style/reset.scss'
import './helper/style/global.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
