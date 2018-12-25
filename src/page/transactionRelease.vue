<template>
	<div class="transactionRelease">
		<div class="top-module flex-row">
			<img src="../../static/images/transactionRelease_01.png" alt="" @click="return_page()">
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
			<div v-show="isShowSelect" v-for="list in lists" class="select-options flex-row" @click="choose(list)">
				<h4>{{list.title}}</h4>
			</div>
		</div>
		<div class="tab-left flex-col" v-show="showLeft">
			<div class="list-title flex-row">
				<h4>购买订单</h4>
				<h5>当前{{chooseTitle}}价格&emsp;{{textNum}}</h5>
			</div>
			<div class="list flex-row">
				<h5>价格</h5>
				<input type="number" placeholder="请输入交易价格" v-model="price">
			</div>
			<div class="list flex-row">
				<h5>数量</h5>
				<input type="number" placeholder="请输入交易数量" v-model="num">
			</div>
			<div class="list flex-row">
				<h5>金额</h5>
				<input type="number" readonly="readonly" placeholder="0.00" v-model="money">
			</div>
			<div class="list flex-row">
				<h5>密码</h5>
				<input type="password" placeholder="请输入交易密码" v-model="password">
			</div>
			<div class="btn-blue flex-col" @click="clickLeft()">
				确认发布
			</div>
		</div>
		<div class="tab-right flex-col" v-show="showRight">
			<div class="list-title flex-row">
				<h4>出售订单</h4>
				<h5>当前{{chooseTitle}}价格&emsp;{{textNum}}</h5>
			</div>
			<div class="list flex-row">
				<h5>价格</h5>
				<input type="number" placeholder="请输入交易价格" v-model="price2">
			</div>
			<div class="list flex-row">
				<h5>数量</h5>
				<input type="number" placeholder="请输入交易数量" v-model="num2">
			</div>
			<div class="list flex-row">
				<h5>金额</h5>
				<input type="number" readonly="readonly" placeholder="请输入交易金额" v-model="money2">
			</div>
			<div class="list flex-row">
				<h5>密码</h5>
				<input type="password" placeholder="请输入交易密码" v-model="password2">
			</div>
			<div class="btn-blue flex-col" @click="clickRight()">
				确认出售
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'transactionRelease',
        data(){
            return {
            	isTabLeft : true,
            	isTabRight : false,
            	showLeft : true,
            	showRight : false,
				isShowSelect : false,
				chooseTitle : "ETH",
				lists : [
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
				price : '',
				num : '',
				price2 : '',
				num2 : '',
				password : '',
				password2 : '',
				textNum : ''
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
		// 计算属性
		computed: {
			money() {
				return this.price * this.num;
			},
			money2() {
				return this.price2 * this.num2;
			}
		},
  		//实例方法
  		methods: {
			return_page (){
				this.$router.go(-1);
			},
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
			choose (list){
				console.log(list.title);
				this.chooseTitle = list.title;
				this.isShowSelect = false;
				this.axios.post('/index/suda_wallet/getPrice',{
					coin : this.chooseTitle
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.textNum = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			clickLeft (){
				if (!this.price) {
					this.layers("请输入交易价格!")
				} else if(!this.num){
					this.layers("请输入交易数量!")
				} else if(!this.password){
					this.layers("请输入交易密码!")
				} else{
					this.axios.post('/index/suda_order_buy/release',{
						type : "1",
						price : this.price,
						num : this.num,
						password : this.password,
						coin : this.chooseTitle
					})
					.then(({data}) => {
						if (data.status == 200) {
							this.layers(data.message);
							setTimeout(() => {
								this.$router.replace('transaction')
							},1500)
						} else{
							this.layers(data.message);
						}
					})
				}
			},
			clickRight (){
				if (!this.price2) {
					this.layers("请输入交易价格!")
				} else if(!this.num2){
					this.layers("请输入交易数量!")
				} else if(!this.password2){
					this.layers("请输入交易密码!")
				} else{
					this.axios.post('/index/suda_order_buy/release',{
						type : "2",
						price : this.price2,
						num : this.num2,
						password : this.password2,
						coin : this.chooseTitle
					})
					.then(({data}) => {
						if (data.status == 200) {
							this.layers(data.message);
							setTimeout(() => {
								this.$router.replace('transaction')
							},1500)
						} else{
							this.layers(data.message);
						}
					})
				}
			},
			getMsg (){
				this.axios.post('/index/suda_wallet/getPrice',{
					coin : 'ETH'
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.textNum = data.data;
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	.transactionRelease{
		min-height: 100vh;
		background-color: #e8eaee;
		justify-content: flex-start!important;
	}
	h4{
		font-size: 0.32rem;
		font-weight: 500;
		color: #414554;
	}
	h5{
		font-size: 0.3rem;
		color: #393f4c;
	}
	.tab-left,.tab-right{
		width: 100%;
		height: auto;
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
	}
	.top-tab-list{
		width: 50%;
		height: 100%;
	}
	.top-tab-list h3{
		color: #8998b9;
	}
	.activeTab{
		background-color: #5e719a;
	}
	.activeTab h3{
		color: #ffffff;
	}
	.top-module img{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
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
	.list-title{
		width: 100%;
		height: 0.9rem;
		justify-content: space-between;
	}
	.list-title h4{
		font-weight: 600;
	}
	.tab-left h4,.tab-right h4{
		margin-left: 0.3rem;
	}
	.tab-left h5,.tab-right h5{
		margin-right: 0.3rem;
	}
	.list{
		width: 100%;
		height: 1rem;
		background-color: #FFFFFF;
		justify-content: flex-start;
		border-bottom: 0.01rem solid #dbdee5;
	}
	.list h5{
		margin-left: 0.3rem;
	}
	.list input{
		width: 4rem;
		height: 0.4rem;
		border: none;
		font-size: 0.3rem;
	}
	.btn-blue{
		width: 6.9rem;
		height: 0.94rem;
		background-color: #4a7cee;
		border-radius: 0.1rem;
		font-size: 0.34rem;
		color: #FFFFFF;
		margin-top: 0.6rem;
	}
</style>
