// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/img/icons'

import htmlToPdf from '@/utils/htmlToPdf'
import lisevent from "@/utils/shortKey";
Vue.prototype.lisevent = lisevent

Vue.use(htmlToPdf)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
