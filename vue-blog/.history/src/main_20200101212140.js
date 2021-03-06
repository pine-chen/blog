// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'style/reset.css'
import 'style/iconfont.css'
import 'style/main.scss'
import VueLazyload from 'vue-lazyload'
import Axios from 'axios'
// 使得ie兼容promise
import promise from 'es6-promise'
import './assets/style/markdown.styl'
import store from './store/index'
promise.polyfill()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
