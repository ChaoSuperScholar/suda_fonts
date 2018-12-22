<template>
	<div class="walletDetails">
		<div class="top-module flex-row">
			<router-link to="wallet">
				<img class="img-left" src="../../static/images/return.png"/>
			</router-link>
			<h3>{{title}}</h3>
			<div class="top-module-right flex-row">
				<img src="../../static/images/wallet_01.png" alt="">
				<h4 class="h4-green">{{up_down}}</h4>
			</div>
		</div>
		<div class="center-module flex-col">
			<h3>{{num}}</h3>
			<h4 class="h4-gray">≈￥{{money}}</h4>
			<div class="center-module-bottom flex-row">
				<div class="btn btn-blue flex-row" @click="goReceivables()">
					<img src="../../static/images/wallet_02.png" alt="">
					收款
				</div>
				<div class="btn btn-red flex-row" @click="goTransfer()">
					<img src="../../static/images/wallet_03.png" alt="">
					转账
				</div>
			</div>
		</div>
		<!-- 循环数据 -->
		<div class="list flex-col" v-for="list in lists">
			<h4 class="h4-gray">{{list.time}}</h4>
			<div class="list-bottom flex-row">
				<h4>{{list.address}}</h4>
				<h4 class="h4-red" v-if="list.num < 0">{{list.num}}</h4>
				<h4 class="h4-green" v-if="list.num > 0">+{{list.num}}</h4>
			</div>
		</div>
	</div>   
</template>

<script>
	export default{
        name: 'walletDetails',
        data(){
            return {
            	title : "",
				up_down : "",
				num : "",
				money : "",
				lists : []
            }
        },
        // 创建之前
  		beforeCreate: function () {
  			
  		},
  		//创建之后
  		created: function (){
  			this.getMsg();
  		},
  		//挂载之前
  		beforeMount: function (){
  			
  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){
  				
  			})
  		},
  		//实例方法
  		methods: {
  			getMsg (){
				let page_type = this.$route.query.type;
				this.title = this.$route.query.title;
				this.axios.post('/index/suda_wallet/one_coin',{
					type : page_type
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.up_down = res.assets.up_down;
						this.num = res.assets.num;
						this.money = res.assets.money;
						this.lists = res.log;
					} else{
						this.layers(data.message);
					}
				})
			},
			//转账
			goTransfer (){
				console.log(this.title);
				this.$router.push({
					path : '/walletTransfer',
					query : {
						title : this.title,
						type : this.$route.query.type
					}
				})
			},
			//收款
			goReceivables (){
				this.$router.push({
					path : '/receivables',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type
					}
				})
			}
  		}
    }
</script>

<style scoped>
	h3{
		font-size: 0.36rem;
		font-weight: bolder;
		color: #FFFFFF;
	}
	h4{
		font-size: 0.3rem;
		color: #343b49;
	}
	.h4-gray{
		color: #9299a8;
	}
	.h4-green{
		text-align: right;
		color: #3cc355;
	}
	.h4-red{
		color: #ea4242;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-weight: 500;
		margin-left: 1.2rem;
	}
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.top-module-right{
		margin-right: 0.3rem;
	}
	.top-module-right img{
		width: 0.38rem;
		height: 0.38rem;
	}
	.center-module{
		width: 100%;
		height: auto;
		padding: 0.5rem 0 0.4rem 0;
		background-color: #393f4c;
	}
	.btn{
		width: 2.7rem;
		height: 0.76rem;
		border-radius: 0.1rem;
		font-size: 0.32rem;
		color: #ffffff;
		margin-top: 0.4rem;
	}
	.btn img{
		width: 0.38rem;
		height: 0.38rem;
		margin-right: 0.1rem;
	}
	.btn-blue{
		background-color: #5987f0;
	}
	.btn-red{
		background-color: #df5656;
	}
	.btn:nth-child(1){
		margin-right: 0.5rem;
	}
	.list{
		width: 7rem;
		height: auto;
		padding: 0.3rem 0;
		border-bottom: 0.01rem solid #c4c8d2;
		align-items: flex-start;
	}
	.list-bottom{
		width: 100%;
		justify-content: space-between;
	}
	.list-bottom h4:first-child{
		width: 4.5rem;
		height: auto;
		white-space: normal;
		word-break: break-all;
	}
	.list-bottom h4:last-child{
		width: 2rem;
	}
</style>
