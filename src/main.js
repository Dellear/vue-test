// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import BaiduSug from './components/BaiduSug';
import VueResource from 'vue-resource';
import './css/index.css';

Vue.use(VueResource);

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<BaiduSug/>',
  components: { BaiduSug }
})
