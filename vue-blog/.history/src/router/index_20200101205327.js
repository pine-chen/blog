import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/blog/home/index'
import Detail from '@/views/blog/detail/index'
import Edit from '@/views/blog/edit/index'
import Adin from '@/views/blog/admin/index'
import Index from '@/views/user/login/index'
import Index from '@/views/user/info/index'

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
