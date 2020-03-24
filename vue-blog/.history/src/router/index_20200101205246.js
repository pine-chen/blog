import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/blog/home/index'
import Index from '@/views/blog/detail/index'
import Index from '@/views/blog/edit/index'
import Index from '@/views/blog/admin/index'
import Index from '@/views/user/login/index'
import Index from '@/views/user/home/index'

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
