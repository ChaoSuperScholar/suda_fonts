// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
import Qs from 'qs'
import './assets/css/base.css' /*引入公共样式*/
import './assets/js/flexible.js' /*引入公共js文件*/
/*引入组件*/
require('animate.css');

Vue.config.productionTip = false

// 创建axios
export const baseURL = process.env.NODE_ENV === 'production' ? '/' : '/api';
Vue.prototype.axios = axios.create({
  baseURL: 'http://admin.suda66888.com' /* baseURL */,
  timeout: 10000,
  withCredentials: true,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  transformRequest: [data => {
    data = Qs.stringify(data);
    return data;
  }]
});
//请求拦截器
let cancel,promiseArr = {};
axios.interceptors.request.use(config=>{
	//发起请求时，取消掉当前正在进行的相同请求
	if (promiseArr[config.url]) {
		promiseArr[config.url]('操作取消')
		promiseArr[config.url] = cancel
	} else{
		promiseArr[config.url] = cancel
	}
	return config
},error =>{
	return Promise.reject(error)
})
//响应拦截器即异常处理
axios.interceptors.response.use(response =>{
	return response
},error => {
	if (error && error.response) {
		switch (error.response.status){ //跨域存在获取不到状态码的问题
			case 400:
				error.message = '错误请求'
				break;
			case 401:
				error.message = '未授权，请重新登录'
				break;
			case 403:
				error.message = '拒绝访问'
				break;
			case 404:
				error.message = '请求错误，未找到该资源'
				break;
			case 405:
				error.message = '请求方法未允许'
				break;
			case 408:
				error.message = '请求超时'
				break;
			case 500:
				error.message = '服务端出错'
				break;
			case 501:
				error.message = '网络未实现'
				break;
			case 502:
				error.message = '网络错误'
				break;
			case 503:
				error.message = '服务不可用'
				break;
			case 504:
				error.message = '网络超时'
				break;
			case 505:
				error.message = 'http版本不支持该请求'
				break;
			default:
				error.message = '连接错误${error.response.status}'
		}
	} else{ //跨域获取不到状态码或者其他状态码进行的处理
		error.message = '网络出现问题，请稍后再试'
	}
	console.log(error.message)
})

Vue.prototype.$axios = axios;
Vue.prototype.qs = Qs;

// 信息弹窗
Vue.prototype.layers = (msg, show = true) => {
  store.commit('showLayers', {
    show: show,
    msg: msg
  });
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
