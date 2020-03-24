import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/blog/home/index'
import Detail from '@/views/blog/detail/index'
// import Edit from '@/views/blog/edit/index'
// import Admin from '@/views/blog/admin/index'
// // import Login from '@/views/user/login/login'
// import Register from '@/views/user/login/register'
// import Info from '@/views/user/info/index'

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
    }
    // {
    //   path: '/',
    //   name: 'Edit',
    //   component: Edit
    // },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    // {
    //   path: '/',
    //   name: 'Register',
    //   component: Register
    // },
    // {
    //   path: '/',
    //   name: 'Info',
    //   component: Info
    // }
  ]
})
