import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/viw'

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
