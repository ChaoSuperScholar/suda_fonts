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
import forgetPassword from '../page/forgetPassword'
import securityCenter from '../page/securityCenter'
import moreInformation from '../page/moreInformation'
import aboutUs from '../page/aboutUs'
import myTeam from '../page/myTeam'
import start from '../page/start'
import personalData from '../page/personalData'
import financial from '../page/financial'
import myInvestment from '../page/myInvestment'
import tenpay from '../page/tenpay'
import walletDetails from '../page/walletDetails'
import walletTransfer from '../page/walletTransfer'
import contacts from '../page/contacts'
import modifyContact from '../page/modifyContact'
import addContact from '../page/addContact'
import identity from '../page/identity'
import paymentMethod from '../page/paymentMethod'
import addPayment from '../page/addPayment'
import transferRecord from '../page/transferRecord'

import index from '../page/index'
import createWallet from '../page/createWallet'
import importWallet from '../page/importWallet'


Vue.use(Router)

export default new Router({
  /*mode:'history',*/
  routes: [
  	/*{
			path: '/',
			name: 'start',
			component: start
		},*/
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
		},
		{
			path: '/forgetPassword',
			name: 'forgetPassword',
			component: forgetPassword
		},
		{
			path: '/securityCenter',
			name: 'securityCenter',
			component: securityCenter
		},
		{
			path: '/moreInformation',
			name: 'moreInformation',
			component: moreInformation
		},
		{
			path: '/aboutUs',
			name: 'aboutUs',
			component: aboutUs
		},
		{
			path: '/myTeam',
			name: 'myTeam',
			component: myTeam
		},
		{
			path: '/personalData',
			name: 'personalData',
			component: personalData
		},
		{
			path: '/financial',
			name: 'financial',
			component: financial
		},
		{
			path: '/myInvestment',
			name: 'myInvestment',
			component: myInvestment
		},
		{
			path: '/tenpay',
			name: 'tenpay',
			component: tenpay
		},
		{
			path: '/walletDetails',
			name: 'walletDetails',
			component: walletDetails
		},
		{
			path: '/walletTransfer',
			name: 'walletTransfer',
			component: walletTransfer
		},
		{
			path: '/contacts',
			name: 'contacts',
			component: contacts
		},
		{
			path: '/modifyContact',
			name: 'modifyContact',
			component: modifyContact
		},
		{
			path: '/addContact',
			name: 'addContact',
			component: addContact
		},
		{
			path: '/identity',
			name: 'identity',
			component: identity
		},
		{
			path: '/paymentMethod',
			name: 'paymentMethod',
			component: paymentMethod
		},
		{
			path: '/addPayment',
			name: 'addPayment',
			component: addPayment
		},
		{
			path: '/transferRecord',
			name: 'transferRecord',
			component: transferRecord
		}
  ]
})
