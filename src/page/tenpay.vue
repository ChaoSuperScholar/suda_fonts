<template>
	<div class="tenpay">
		<div class="top-module flex-row">
			<router-link to="financial">
				<img class="img-left" src="../../static/images/return.png"/>
			</router-link>
			<h3>财富通</h3>
			<router-link to="myInvestment">
				<img class="img-right" src="../../static/images/transaction_01.png" alt="">
			</router-link>
		</div>
		<div class="top-text flex-col">
			<div class="top-top flex-col">
				<h3>{{profit_rate}}%</h3>
				<h5>预期年化</h5>
			</div>
			<div class="top-center flex-row">
				<div class="top-center-btn flex-col">
					<h4 v-if="profit_cycle_type == 1">{{profit_cycle}}天</h4>
					<h4 v-if="profit_cycle_type == 2">{{profit_cycle}}月</h4>
					<h4 v-if="profit_cycle_type == 3">{{profit_cycle}}年</h4>
					<h5>投资周期</h5>
				</div>
				<div class="top-center-btn flex-col">
					<h4>{{invest_min}}{{type}}</h4>
					<h5>起购金额</h5>
				</div>
				<div class="top-center-btn flex-col">
					<h4>{{profit_toal|numFilter}}{{type}}</h4>
					<h5>剩余金额</h5>
				</div>
			</div>
		</div>
		<div class="center-module-father flex-col">
			<div class="center-module flex-col">
				<h3>投资金额<span>(剩余可投{{surplus}}{{type}})</span></h3>
				<div class="center-module-input flex-row">
					<h3>{{type}}</h3>
					<input type="number" value="" v-model="inputNumber" placeholder="100元起投"/>
				</div>
				<div class="center-module-text flex-row">
					<h4>预估收益</h4>
					<h4>{{showInputNum|numFilter6}}</h4>
				</div>
			</div>
		</div>
		<div class="list-father flex-row">
			<div class="list-title flex-row">
				<img src="../../static/images/tenpay_01.png" alt="">
				<h4>项目信息</h4>
			</div>
		</div>
		<div class="list-module flex-col">
			<div class="list-father flex-row">
				<div class="list flex-row">
					<h4>项目名称</h4>
					<h4>{{title}}</h4>
				</div>
			</div>
			<div class="list-father flex-row">
				<div class="list flex-row">
					<h4>项目金额</h4>
					<h4>{{profit_toal|numFilter}} {{type}}</h4>
				</div>
			</div>
			<div class="list-father flex-row">
				<div class="list flex-row">
					<h4>起投金额</h4>
					<h4>{{invest_min}} {{type}}</h4>
				</div>
			</div>
			<div class="list-father flex-row">
				<div class="list flex-row">
					<h4>认购时间</h4>
					<h4>{{open_start}}</h4>
				</div>
			</div>
			<div class="list-father flex-row">
				<div class="list flex-row">
					<h4>到期时间</h4>
					<h4>{{open_end}}</h4>
				</div>
			</div>
		</div>
		<div class="btn-blue flex-col" @click="clickInvestment()">
			立即投资
		</div>
	</div>
</template>

<script>
	export default{
        name: 'tenpay',
        data(){
            return {
            	profit_rate : "",
				profit_cycle : "",
				profit_cycle_type : "",
				invest_min : "",
				type : "",
				profit_toal : "",
				title : "",
				open_start : "",
				open_end : "",
				inputNumber : ""
            }
        },
        // 创建之前
  		beforeCreate: function () {
  			
  		},
  		//创建之后
  		created: function (){
			this.getMsg();
			this.getMoney();
  		},
  		//挂载之前
  		beforeMount: function (){
  			
  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){
  				
  			})
  		},
		computed: {
			surplus() {
				return this.profit_toal - this.numed; 
			},
			showInputNum (){
				/* return this.inputNumber * 5; */
				if (this.profit_cycle_type == 1) {
					return this.inputNumber * this.profit_rate /36500;
				} else if(this.profit_cycle_type == 2){
					return this.inputNumber * this.profit_rate /1200;
				} else {
					return this.inputNumber * this.profit_rate /100;
				}
			}
		},
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			},
			/* 小数点后面保留6位 */
			numFilter6(num,len){
				var len = len || 6;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			getMsg (){
				console.log(this.$route.query.id);
				let pageId = this.$route.query.id;
				this.axios.post('/index/suda_financial/FinancialInfo',{
					id : pageId
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.profit_rate = res.profit_rate;
						this.profit_cycle = res.profit_cycle;
						this.profit_cycle_type = res.profit_cycle_type;
						this.invest_min = res.invest_min;
						this.type =res.type;
						this.profit_toal = res.profit_toal;
						this.title = res.title;
						this.numed = res.numed;
						this.open_start = res.open_start;
						this.open_end = res.open_end;
					} else{
						this.layers(data.message);
					}
				})
			},
			/* getMoney (){
				this.axios.post('/index/suda_financial/EstimatedRevenue',{
					id : this.$route.query.id,
					num : 200
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data + "123");
					} else{
						this.layers(data.message);
					}
				})
			}, */
			clickInvestment (){
				this.axios.post('/index/suda_financial/SubInvestment',{
					id : this.$route.query.id,
					num : this.inputNumber
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
						setTimeout(() =>{
							this.$router.replace('myInvestment');
						},1500)
					} else{
						this.layers(data.message);
					}
				})
			}
			/* inputNum (event){
				if (event.data!= null) {
					let number = event.currentTarget.value;
					console.log(number);
				} else{
					let number = event.currentTarget.value;
					console.log(number);
					this.axios.post('/index/suda_financial/EstimatedRevenue',{
						id : this.$route.query.id,
						num : this.number
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data + "123");
						} else{
							this.layers(data.message);
						}
					})
				}
			} */
  		}
    }
</script>

<style scoped>
	h3{
		font-size: 0.36rem;
		font-weight: bolder;
	}
	h4{
		font-size: 0.32rem;
	}
	h5{
		font-size: 0.3rem;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-size: 0.36rem;
		color: #FFFFFF;
		font-weight: 500;
		margin-left: 0.6rem;
	}
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.img-right{
		width: 0.28rem;
		height: 0.34rem;
		margin-right: 0.3rem;
	}
	.top-text{
		width: 100%;
		height: auto;
		background-color: #4175e4;
	}
	.top-text h3,h4,h5{
		color: #FFFFFF;
	}
	.top-top{
		width: 6.9rem;
		height: auto;
		align-items: flex-start;
		padding: 0.4rem 0;
	}
	.top-center{
		width: 100%;
		height: 1.1rem;
		margin-bottom: 0.36rem;
	}
	.top-center-btn{
		flex: 1;
	}
	.top-center-btn:nth-child(2){
		border-left: 0.01rem solid #FFFFFF;
		border-right: 0.01rem solid #FFFFFF;
	}
	.center-module-father{
		width: 100%;
		height: auto;
		border-top: 0.14rem solid #eceff4;
		border-bottom: 0.14rem solid #eceff4;
	}
	.center-module{
		width: 6.9rem;
		height: auto;
		align-items: flex-start;
		padding: 0.3rem 0;
	}
	.center-module h3{
		color: #313745;
	}
	.center-module span{
		font-size: 0.28rem;
		font-weight: 500;
		color: #616878;
		margin-left: 0.1rem;
	}
	.center-module-input{
		width: 100%;
		height: auto;
		border-bottom: 0.01rem solid #c0c4d3;
		justify-content: flex-start;
	}
	.center-module-input input{
		width: 3.6rem;
		height: 0.4rem;
		margin: 0.3rem 0 0.3rem 0.2rem;
		font-size: 0.32rem;
		border: none;
	}
	.center-module-text{
		width: 100%;
		height: auto;
		margin-top: 0.3rem;
		justify-content: space-between;
	}
	.center-module-text h4:nth-child(1){
		color: #313745;
	}
	.center-module-text h4:nth-child(2){
		color: #e54747;
	}
	.list-title,.list{
		width: 6.9rem;
		height: 0.86rem;
	}
	.list-title{
		justify-content: flex-start;
	}
	.list-title img{
		width: 0.36rem;
		height: 0.34rem;
		margin-right: 0.2rem;
	}
	.list-title h4{
		color: #3f4757;
	}
	.list-module{
		width: 100%;
	}
	.list-father{
		width: 100%;
		border-bottom: 0.01rem solid #ccd3df;
	}
	.list-module .list-father:last-child{
		border-bottom: 0.08rem solid #eceff4;
		margin-bottom: 1rem;
	}
	.list{
		justify-content: space-between;
	}
	.list h4:nth-child(1){
		color: #757d8e;
	}
	.list h4:nth-child(2){
		color: #424b5e;
	}
	.btn-blue{
		width: 100%;
		height: 1rem;
		background-color: #3f75e9;
		position: fixed;
		left: 0;
		bottom: 0;
		font-size: 0.34rem;
		color: #ffffff;
	}
</style>
