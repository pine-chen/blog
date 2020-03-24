import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/blog/home/index'
import Detail from '@/views/blog/detail/index'
import Edit from '@/views/blog/edit/index'
import Admin from '@/views/blog/admin/index'
import Login from '@/views/user/login/login'
import Register from '@/views/user/login/register'
import Info from '@/views/user/info/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/deit',
      name: 'Edit',
      component: Edit
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
    }
  ]
})
