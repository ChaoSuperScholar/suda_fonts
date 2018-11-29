import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import createWallet from '../page/createWallet'
import importWallet from '../page/importWallet'
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
			path: '/createWallet',
			name: 'createWallet',
			component: createWallet
		},
		{
			path: '/importWallet',
			name: 'importWallet',
			component: importWallet
		},
    {
    	path: '/components',
      name: 'header',
      component: header
    }
  ]
})
