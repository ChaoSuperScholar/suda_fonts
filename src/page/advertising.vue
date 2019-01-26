<template>
	<div class="advertising">
    <div style="height: auto;width: 100%">
		<div class="bg"></div>
		<div class="top-module flex-row">
			<router-link to="transaction">
				<img class="img-left" src="../../static/images/return.png"/>
			</router-link>
			<div class="top-tab flex-row">
				<div class="top-tab-list flex-col" :class="{activeTab:isTabLeft}" @click="clickTabLeft()">
					<h3>购买</h3>
				</div>
				<div class="top-tab-list flex-col" :class="{activeTab:isTabRight}" @click="clickTabRight()">
					<h3>出售</h3>
				</div>
			</div>
			<div class="top-right flex-row" @click="selectList()">
				<h4>{{chooseTitle}}</h4>
				<img src="../../static/images/transactionRelease_02.png" alt="">
			</div>
		</div>
		<div class="select-father flex-col">
			<div v-show="isShowSelect" v-for="sec in select" class="select-options flex-row" @click="choose(sec)">
				<h4>{{sec.title}}</h4>
			</div>
		</div>
		<div class="tab-left flex-col" v-show="showLeft">
			<div class="list flex-col" v-for="list in lists">
				<div class="list-top flex-col">
					<div class="list-top-top flex-row">
						<h3>广告ID {{list.id}}</h3>
						<div class="btn-red flex-col" @click="withdrawal(list)" v-if="list.status == 1">
							撤销
						</div>
						<div class="btn-grey flex-col" v-if="list.status != 1">
							已撤销
						</div>
					</div>
					<div class="list-top-bottom flex-row">
						<h4>数量: {{list.num|numFilter}}</h4>
						<h4>单价: {{list.price|numFilter}}</h4>
					</div>
				</div>
				<div class="list-bottom flex-row">
					<div class="list-bottom-left flex-row">
						<img src="../../static/images/transaction_03.png" alt="" v-if="list.bank == 1">
						<img src="../../static/images/transaction_04.png" alt="" v-if="list.alipay == 1">
						<img src="../../static/images/transaction_05.png" alt="" v-if="list.wechat == 1">
					</div>
					<h4>{{list.created_at}}</h4>
				</div>
			</div>
			<nodata v-if="!lists.length"></nodata>
		</div>
		<div class="tab-right flex-col" v-show="showRight">
			<div class="list flex-col" v-for="item in items">
				<div class="list-top flex-col">
					<div class="list-top-top flex-row">
						<h3>广告ID {{item.id}}</h3>
						<div class="btn-red flex-col" @click="withdrawals(item)" v-if="item.status == 1">
							撤销
						</div>
						<div class="btn-grey flex-col" v-if="item.status != 1">
							已撤销
						</div>
					</div>
					<div class="list-top-bottom flex-row">
						<h4>数量: {{item.num|numFilter}}</h4>
						<h4>单价: {{item.price|numFilter}}</h4>
					</div>
				</div>
				<div class="list-bottom flex-row">
					<div class="list-bottom-left flex-row">
						<img src="../../static/images/transaction_03.png" alt="" v-if="item.bank == 1">
						<img src="../../static/images/transaction_04.png" alt="" v-if="item.alipay == 1">
						<img src="../../static/images/transaction_05.png" alt="" v-if="item.wechat == 1">
					</div>
					<h4>{{item.created_at}}</h4>
				</div>
			</div>
		</div>
    </div>
	</div>
</template>

<script>
	export default{
        name: 'advertising',
        data(){
            return {
            	isTabLeft : true,
            	isTabRight : false,
            	showLeft : true,
            	showRight : false,
				isShowSelect : false,
				chooseTitle : "ETH",
				select : [
					{
						title : "ETH"
					},
					{
						title : "SDT"
					},
					{
						title : "USDT"
					}
				],
				lists : [],
				items : []
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
  			this.getMsg();
			this.getMsg2();
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
  		},
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			clickTabLeft (){
  				this.isTabLeft = true;
  				this.isTabRight = false;
  				this.showLeft = true;
  				this.showRight = false;
  			},
  			clickTabRight (){
  				this.isTabLeft = false;
  				this.isTabRight = true;
  				this.showLeft = false;
  				this.showRight = true
  			},
			selectList (){
				this.isShowSelect = !this.isShowSelect;
			},
			/* 获取默认购买列表 */
			getMsg (){
				this.axios.post('/index/suda_order_buy/get_c2c_ad_pc',{
					page : '1',
					type : "1",
					coin : "ETH"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			/* 获取默认出售列表 */
			getMsg2 (){
				this.axios.post('/index/suda_order_buy/get_c2c_ad_pc',{
					page : '1',
					type : "2",
					coin : "ETH"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.items = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			choose (sec){
				console.log(sec.title);
				this.chooseTitle = sec.title;
				this.isShowSelect = false;
				this.axios.post('/index/suda_order_buy/get_c2c_ad_pc',{
					page : '1',
					type : "1",
					coin : this.chooseTitle
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
				this.axios.post('/index/suda_order_buy/get_c2c_ad_pc',{
					page : '1',
					type : "2",
					coin : this.chooseTitle
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.items = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			/* 购买列表撤销订单 */
			withdrawal (list){
				console.log(list);
				this.axios.post('/index/suda_order_buy/revoke',{
					id : list.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						this.axios.post('/index/suda_order_buy/get_c2c_ad_pc',{
							page : '1',
							type : "1",
							coin : this.chooseTitle
						})
						.then(({data}) => {
							if (data.status == 200) {
								console.log(data);
								this.lists = data.data;
							} else{
								this.layers(data.message);
							}
						})
					} else{
						this.layers(data.message);
					}
				})
			},
			/* 出售列表撤销订单 */
			withdrawals (item){
				console.log(item);
				this.axios.post('/index/suda_order_buy/revoke',{
					id : item.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						this.axios.post('/index/suda_order_buy/get_c2c_ad_pc',{
							page : '1',
							type : "2",
							coin : this.chooseTitle
						})
						.then(({data}) => {
							if (data.status == 200) {
								console.log(data);
								this.items = data.data;
							} else{
								this.layers(data.message);
							}
						})
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	h3{
		font-size: 0.34rem;
		font-weight: bolder;
		color: #3d465a;
	}
	h4{
		font-size: 0.3rem;
		color: #5d6270;
	}
	.bg{
		width: 100vw;
		height: 100vh;
		background-color: #e8eaee;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -10;
	}
	.top-module{
		width: 100%;
		height: 1.2rem;
		background-color: #393f4c;
		justify-content: space-between;
	}
	.top-tab{
		width: 3.5rem;
		height: 0.64rem;
		border: 0.02rem solid #8a9cc2;
		border-radius: 0.1rem;
		margin-left: 1rem;
		overflow: hidden;
	}
	.top-tab-list{
		width: 50%;
		height: 100%;
	}
	.top-tab-list h3{
		color: #8998b9;
	}
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.activeTab{
		background-color: #5e719a;
	}
	.activeTab h3{
		color: #ffffff;
	}
	.top-right{
		width: 1.4rem;
		margin-right: 0.3rem;
	}
	.top-right h4{
		color: #FFFFFF;
	}
	.top-right img{
		width: 0.25rem;
		height: 0.14rem;
		margin-left: 0.14rem;
	}
	.select-father{
		width: auto;
		height: auto;
		position: absolute;
		right: 0;
		top: 1.2rem;
		background-color: #FFFFFF;
		box-shadow: 0 0 0.15rem #d6d6d6;
	}
	.select-options{
		width: 1.6rem;
		height: 0.8rem;
	}
	.select-father .select-options:not(:first-child){
		border-top: 0.01rem solid #d1d4da;
	}
	.tab-left,.tab-right{
		width: 100%;
	}
	.list{
		width: 100%;
		height: auto;
		margin-top: 0.16rem;
		background-color: #FFFFFF;
	}
	.list-top{
		width: 100%;
		height: auto;
		padding: 0.3rem 0;
		border-bottom: 0.02rem solid #dbdee5;
	}
	.list-top-top,.list-top-bottom,.list-bottom{
		width: 6.9rem;
		justify-content: space-between;
	}
	.list-top-top{
		margin-bottom: 0.4rem;
	}
	.btn-red{
		width: 1.2rem;
		height: 0.54rem;
		background-color: #e66161;
		font-size: 0.28rem;
		color: #fceeee;
		border-radius: 0.1rem;
	}
	.btn-grey{
		width: 1.2rem;
		height: 0.54rem;
		background-color: #929292;
		font-size: 0.28rem;
		color: #fceeee;
		border-radius: 0.1rem;
	}
	.list-bottom{
		height: 1rem;
	}
	.list-bottom img{
		width: 0.46rem;
		height: 0.46rem;
		margin-right: 0.2rem;
	}
</style>
