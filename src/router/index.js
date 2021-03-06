import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    
    // 404 Catch all
    { path: '*', redirect: '/' }
  ]
})
