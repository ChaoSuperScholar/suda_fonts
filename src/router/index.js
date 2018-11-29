import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import header from '../components/headerBar'

Vue.use(Router)

export default new Router({
  /*mode:'history',*/
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
    	path: '/components',
      name: 'header',
      component: header
    }
  ]
})
