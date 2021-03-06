// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
import Axios from 'axios'
import './assets/style/markdown.styl'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueLazyload)
Vue.use(store)
Vue.use(Vuex)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.prototype.axios = Axios

// 路由跳转时改变title
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  let getFlag = localStorage.isLogin

  if (getFlag) {
    next()
  } else {
    if (to.meta.isLogin) {
      next({
        path: '/recommend'
      })
      alert('请先登录')
    } else {
      next()
    }
  }
})
