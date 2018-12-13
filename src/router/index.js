import Vue from 'vue'
import Router from 'vue-router'
import indexNew from '../page/indexNew'
import registered from '../page/registered'
import wallet from '../page/wallet'
import transaction from '../page/transaction'
import receivables from '../page/receivables'
import addAssets from '../page/addAssets'
import header from '../components/headerBar'
import footerBar from '../components/footerBar'
import pageHead from '../components/pageHead'
import information from '../page/information'
import application from '../page/application'
import userCenter from '../page/userCenter'
import transactionRelease from '../page/transactionRelease'
import order from '../page/order'
import orderPage from '../page/orderPage'

import index from '../page/index'
import createWallet from '../page/createWallet'
import importWallet from '../page/importWallet'


Vue.use(Router)

export default new Router({
  /*mode:'history',*/
  routes: [
		{
			path: '/',
			name: 'indexNew',
			component: indexNew
		},
		{
			path: '/registered',
			name: 'registered',
			component: registered
		},
		{
			path: '/receivables',
			name: 'receivables',
			component: receivables
		},
		{
			path: '/addAssets',
			name: 'addAssets',
			component: addAssets
		},
		{
			path: '/wallet',
			name: 'wallet',
			component: wallet
		},
		{
			path: '/transaction',
			name: 'transaction',
			component: transaction
		},
    {
      path: '/index',
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
    },
		{
			path: '/components',
			name: 'footerBar',
			component: footerBar
		},
		{
			path: '/components',
			name: 'pageHead',
			component: pageHead
		},
		{
			path: '/information',
			name: 'information',
			component: information
		},
		{
			path: '/application',
			name: 'application',
			component: application
		},
		{
			path: '/userCenter',
			name: 'userCenter',
			component: userCenter
		},
		{
			path: '/transactionRelease',
			name: 'transactionRelease',
			component: transactionRelease
		},
		{
			path: '/order',
			name: 'order',
			component: order
		},
		{
			path: '/orderPage',
			name: 'orderPage',
			component: orderPage
		}
  ]
})
