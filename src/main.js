// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VTooltip from 'v-tooltip';
import App from './App';
import router from './router';

Vue.use(VTooltip);

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  iconfont: 'mdi', // 'md' || 'mdi' || 'fa' || 'fa4'
});

/* eslint-disable no-new */
new Vue({
  el:         '#app',
  router,
  components: { App },
  template:   '<App/>',
});
