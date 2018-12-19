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
				<h3>15.00%</h3>
				<h5>预期年化</h5>
			</div>
			<div class="top-center flex-row">
				<div class="top-center-btn flex-col">
					<h4>15天</h4>
					<h5>投资周期</h5>
				</div>
				<div class="top-center-btn flex-col">
					<h4>1000ETH</h4>
					<h5>起购金额</h5>
				</div>
				<div class="top-center-btn flex-col">
					<h4>5000ETH</h4>
					<h5>剩余金额</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'tenpay',
        data(){
            return {
            	
            }
        },
        // 创建之前
  		beforeCreate: function () {
  			
  		},
  		//创建之后
  		created: function (){
  			
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
</style>
