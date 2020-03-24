import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/h'

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
