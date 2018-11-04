import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['@/components/home/home'], resolve)
    },
    {
      path: '/user/:id',
      name: 'user',
      component: resolve => require(['@/components/user/user'], resolve),
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/login/login'], resolve)

    }
  ]
})
