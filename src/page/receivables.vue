<template>
	<div class="receivables">
		<headerBar :title="indexTitle"></headerBar>
		<div class="body  flex-col">
			<div @click="selectList" class="select flex-row">
				<h4>选择币种：<span>{{chooseTitle}}</span></h4>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
			<div v-show="isShowSelect" v-for="list in lists" class="select-options flex-row" @click="choose(list)">
				<h4>{{list}}</h4>
			</div>
			<div class="wallet-address flex-col">
				<h4>钱包地址</h4>
				<h5 class="tag-read">{{address}}</h5>
			</div>
			<div class="qr-code" id="qrcode" ref="qrcode">
			
			</div>
			<div id="copy-btn" class="create-btn flex-col">
				复制钱包地址
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	import Clipboard from 'clipboard'
	import QRCode from 'qrcodejs2'
	export default{
        name: 'receivables',
        data(){
            return {
            	indexTitle : "收款",
				lists : [],
				isShowSelect : false,
				address : "",
				chooseTitle : "ETH",
				clipboardObj: null
            }
        },
		watch: {
			address: function() {
				this.initCopyBtn();
			}			
		},
        // 创建之前
  		beforeCreate: function () {
  			
  		},
  		//创建之后
  		created: function (){
  			this.getMsg();
			this.getAssets();
  		},
  		//挂载之前
  		beforeMount: function (){
  			
  		},
  		// 挂载之后
  		mounted: function(){
			
  		},
		// 注册组件
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
			getMsg (){
				let that = this;
				this.axios.post('/index/suda_wallet/receivable',{
					type : "eth"
				})
				.then(({data}) => {
					if (data.status === 200) {
						console.log(data);
						this.address = data.data;
						var qrcode = new QRCode('qrcode', {
							text: this.address,
							width: 256,
							height: 256,
							colorDark: '#000000',
							colorLight: '#ffffff',
						});
						console.log(qrcode);
						/* this.chooseTitle = res.lists[0].title; */
					} else {
						this.layers("請求失敗");
					}
				})
				.catch(function (error) {
					setTimeout(() => {
							console.log(error.message);
							that.layers(error.message);
						},4000)
				});
			},
			getAssets (){
				let that = this;
				this.axios.get('/index/suda_wallet/getAssets')
				.then(({data}) => {
					if (data.status === 200) {
						console.log(data);
						this.chooseTitle = data.data[0];
						this.lists = data.data;
						/* this.chooseTitle = res.lists[0].title; */
					} else {
						this.layers("請求失敗");
					}
				})
				.catch(function (error) {
					setTimeout(() => {
							console.log(error.message);
							that.layers(error.message);
						},4000)
				});
			},
			//复制
  			initCopyBtn () {
				var self = this;
				var clipboard = new Clipboard('#copy-btn', {
					text: function() {
						return self.address;
					}
				}).on('success', e => {
					this.layers('复制成功');
		          	console.log('复制成功')
		          	// 释放内存
		        }).on('error', e => {
		          	// 不支持复制
					this.layers('复制失败，请手动复制！');
		          	console.log('该浏览器不支持自动复制')
		          	// 释放内存
		        })
			},
			selectList (){
				this.isShowSelect = !this.isShowSelect; 
			},
			choose(list){
				console.log(list.title);
				this.chooseTitle = list;
				this.isShowSelect = false;
				let that = this;
				this.axios.post('/index/suda_wallet/receivable',{
					type : this.chooseTitle
				})
				.then(({data}) => {
					if (data.status === 200) {
						console.log(data);
						this.address = data.data;
						/* this.chooseTitle = res.lists[0].title; */
					} else {
						this.layers("请求失败");
					}
				})
				.catch(function (error) {
					setTimeout(() => {
							console.log(error.message);
							that.layers(error.message);
						},4000)
				});
			}
  		},
    }
</script>

<style scoped>
	.body{
		width: 7rem;
		height: auto;
	}
	.select{
		width: 100%;
		height: 0.9rem;
		background-color: #eceef1;
		border-radius: 0.1rem;
		margin-top: 0.3rem;
		justify-content: space-between;
	}
	h4{
		font-size: 0.32rem;
		color: #272c37;
		margin-left: 0.2rem;
	}
	.select span{
		font-size: 0.26rem;
		color: #545a67;
	}
	.select img{
		width: 0.16rem;
		height: 0.28rem;
		margin-right: 0.2rem;
	}
	.select-options{
		width: 100%;
		height: 0.86rem;
		border: 0.01rem solid #dee1e6;
		border-top: none;
		justify-content: flex-start;
	}
	.wallet-address{
		width: 100%;
		height: auto;
		border-bottom: 0.01rem solid #aaacb0;
		align-items: flex-start;
		padding: 0.3rem 0;
	}
	.wallet-address h4{
		margin: 0;
	}
	.wallet-address h5{
		font-size: 0.26rem;
		color: #616161;
		word-break: break-all;
	}
	.qr-code{
		width: 3.34rem;
		height: 3.34rem;
		background-color: #FFFFFF;
		margin: 0.6rem 0;
	}
	.create-btn{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.1rem;
		background-color: #4a7cee;
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-top: 0.7rem;
	}
</style>
