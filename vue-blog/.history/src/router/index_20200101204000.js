import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/blog/home/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index
    }
  ]
})
