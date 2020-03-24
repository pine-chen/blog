import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/blog/home/index'
import Detail from '@/views/blog/detail/index'
import Edit from '@/views/blog/edit/index'
import Admin from '@/views/blog/admin/index'
import Login from '@/views/user/login/index'
import Info from '@/views/user/info/index'

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
