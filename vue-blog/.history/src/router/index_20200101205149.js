import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/blog/home/index'
import Index from '@/views/blog/deta/index'
import Index from '@/views/blog/home/index'
import Index from '@/views/blog/home/index'
import Index from '@/views/blog/home/index'
import Index from '@/views/blog/home/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
