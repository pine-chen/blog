import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/blog/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
