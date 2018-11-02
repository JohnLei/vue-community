import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/user/:id',
      name: 'user',
      component: resolve => require(['@/components/user/user'], resolve),
      meta: {
        requireAuth: true
      }
    }
  ]
})
