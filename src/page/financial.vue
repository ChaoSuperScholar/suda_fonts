<template>
	<div class="financial">
		<div class="top-module flex-row">
			<router-link to="application">
				<img class="img-left" src="../../static/images/return.png"/>
			</router-link>
			<h3>理财</h3>
			<router-link to="myInvestment">
				<img class="img-right" src="../../static/images/transaction_01.png" alt="">
			</router-link>
		</div>
		<div class="tab-father flex-row">
			<div class="tab tab-left flex-col">
				<h4>总资产</h4>
				<h3>￥1002.00</h3>
			</div>
			<div class="tab tab-right flex-col">
				<h4>上周收益</h4>
				<h3>￥1002.00</h3>
			</div>
		</div>
		<div class="list flex-col" @click="goTenpay()">
			<div class="list-top flex-row">
				<h4>S15465&emsp;财富通</h4>
				<div class="list-top-right flex-row">
					<img src="../../static/images/indexNew_09.png" alt="">
					<h4>ETH</h4>
				</div>
			</div>
			<div class="list-bottom flex-row">
				<div class="list-bottom-left flex-col">
					<h3 class="h3-red">15.00%</h3>
					<h4 class="h4-gray">预期年化</h4>
				</div>
				<div class="list-bottom-right flex-col">
					<div class="bottom-right-top flex-row">
						<h4><span>15</span>天</h4>
						<div class="line"></div>
						<h4><span>100</span>起购</h4>
					</div>
					<div class="list-btn flex-col">
						<h4 class="h4-blue">剩余60%</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'financial',
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
			goTenpay (){
				this.$router.replace('tenpay');
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
	.h3-red{
		color: #e54848;
	}
	span{
		color: #e54848;
	}
	.h4-blue{
		color: #4776db;
	}
	.h4-gray{
		color: #8d949f;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
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
	.tab-father{
		width: 100%;
		height: 3rem;
		background-image: url(../../static/images/financial_01.png);
		background-size: 100%;
		border-bottom: 0.14rem solid #eceff4;
	}
	.tab{
		width: 50%;
		height: 2rem;
	}
	.tab h4{
		color: #FFFFFF;
		margin-bottom: 0.4rem;
	}
	.tab-left{
		border-right: 0.02rem dashed #FFFFFF;
	}
	.list{
		width: 100%;
		height: auto;
		border-bottom: 0.14rem solid #eceff4;
		justify-content: space-between;
	}
	.list-top{
		width: 100%;
		height: 0.9rem;
		justify-content: space-between;
		border-bottom: 0.01rem solid #dbdfe7;
	}
	.list-top h4:first-child,.list-bottom-left{
		margin-left: 0.3rem;
	}
	.list-top-right,.list-bottom-right{
		margin-right: 0.3rem;
	}
	.list-top-right img{
		width: 0.42rem;
		height: 0.42rem;
		margin-right: 0.1rem;
	}
	.list-bottom{
		width: 100%;
		height: auto;
		justify-content: space-between;
		padding: 0.4rem 0;
	}
	.list-bottom-left,.list-bottom-right{
		width: 50%;
		height: 1.2rem;
	}
	.list-bottom-left{
		border-right: 0.01rem solid #dbdfe7;
		align-items: flex-start;
	}
	.line{
		width: 0.03rem;
		height: 0.3rem;
		background-color: #dbdfe7;
		margin: 0 0.2rem;
	}
	.list-btn{
		width: 2.1rem;
		height: 0.44rem;
		border-radius: 0.22rem;
		border: 0.02rem solid #779be8;
		margin-top: 0.2rem;
	}
</style>
