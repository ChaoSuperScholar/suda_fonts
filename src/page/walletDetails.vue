<template>
	<div class="walletDetails">
    <div style="height: auto;width: 100%">
		<div class="top-module flex-row">
			<router-link to="wallet">
				<img class="img-left" src="../../static/images/return.png"/>
			</router-link>
			<h3>{{title}}</h3>
			<div class="top-module-right flex-row" @click="goDetails()">
				<img src="../../static/images/wallet_01.png" alt="">
				<h4 class="h4-green" v-if="title != 'SDT'">{{up_down}}</h4>
			</div>
		</div>
		<div class="center-module flex-col">
			<h3>{{num|numFilter}}</h3>
			<h4 class="h4-gray">≈￥{{money|numFilter4}}</h4>
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
			<h4 class="h4-gray">{{list.created_at}}</h4>
			<div class="list-bottom flex-row">
				<h4>{{list.address}}</h4>
				<h4 class="h4-red" v-if="list.num < 0 ">{{list.num}}</h4>
				<h4 class="h4-green" v-if="list.num > 0 ">+{{list.num}}</h4>
			</div>
		</div>
		<nodata v-if="!lists.length"></nodata>
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
              times:'',
				      lists : [],
              page_type:''
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
          this.page_type = this.$route.query.type;
          this.title = this.$route.query.title;
  			})
  		},
		// 过滤器
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			},
			/*小数点后面保留4位*/
		  	numFilter4(num, len){
				var len = len || 4;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			getMsg (){
				this.page_type = this.$route.query.type;
				this.title = this.$route.query.title;
				this.axios.post('/index/suda_wallet/one_coin',{
					type : this.page_type
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
            num:this.num,
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
			},
			goDetails (){
				this.$router.push({
					path : '/market',
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
    text-align: right;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-weight: 500;
		margin-left: 1rem;
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
    margin: 0 auto;
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
