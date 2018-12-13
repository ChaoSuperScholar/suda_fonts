<template>
	<div class="orderPage">
		<div class="top-module flex-row">
			<img src="../../static/images/transactionRelease_01.png" alt="" @click="return_page()">
			<h3>订单详情</h3>
			<router-link to="transaction">
				<div class="top-right flex-row">
					<img src="../../static/images/order_01.png" alt="">
					<h4>广告</h4>
				</div>
			</router-link>
		</div>
		<div class="line-block"></div>
		<div class="list-father flex-col">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<h3>购买ETH</h3>
					<h3 class="h3-blue">待放行</h3>
				</div>
				<div class="list-bottom flex-row">
					<h4>金额&nbsp;2400.00</h4>
					<h4>购买数量&nbsp;100</h4>
				</div>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>付款备注码</h4>
				<h4>156441</h4>
			</div>
		</div>
		<div class="line-block"></div>
		<!-- 中间的循环数据 -->
		<div class="list-father flex-col">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<div class="list-top-left flex-row">
						<img src="../../static/images/transaction_03.png" alt="">
						<h4>银行卡</h4>
					</div>
				</div>
				<div class="list-bottom flex-row">
					<h4>名称:&nbsp;诺克商家</h4>
					<h4>账户:&nbsp;nuokeshangjia</h4>
				</div>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<div class="list-top-left flex-row">
						<img src="../../static/images/transaction_04.png" alt="">
						<h4>支付宝</h4>
					</div>
					<img src="../../static/images/orderPage_02.png" alt="">
				</div>
				<div class="list-bottom flex-row">
					<h4>名称:&nbsp;诺克商家</h4>
					<h4>账户:&nbsp;nuokeshangjia</h4>
				</div>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<div class="list-top-left flex-row">
						<img src="../../static/images/transaction_05.png" alt="">
						<h4>微信</h4>
					</div>
					<img src="../../static/images/orderPage_02.png" alt="">
				</div>
				<div class="list-bottom flex-row">
					<h4>名称:&nbsp;诺克商家</h4>
					<h4>账户:&nbsp;nuokeshangjia</h4>
				</div>
			</div>
		</div>
		<!-- 中间的循环数据 end -->
		<div class="line-block"></div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>单价</h4>
				<h4>832.00 CNY/ETH</h4>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>订单时间</h4>
				<h4>2018-11-30 17:29</h4>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>订单编号</h4>
				<h4>58468468464646</h4>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'orderPage',
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
  			return_page (){
				this.$router.go(-1);
			}
  		}
    }
</script>

<style scoped>
	.orderPage{
		min-height: 100vh;
		background-color: #e8eaee;
		justify-content: flex-start!important;
	}
	h3{
		font-size: 0.32rem;
		color: #FFFFFF;
	}
	h4{
		font-size: 0.3rem;
		color: #2b2f38;
	}
	h5{
		font-size: 0.28rem;
		color: #6b707b;
	}
	.top-module{
		width: 100%;
		height: 1.2rem;
		background-color: #393f4c;
		justify-content: space-between;
	}
	.top-module img{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.top-module h3{
		margin-left: 1rem;
	}
	.top-right{
		margin-right: 0.3rem;
	}
	.top-right img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.2rem;
	}
	.top-right h4{
		color: #FFFFFF;
	}
	.list-father{
		width: 100%;
		height: auto;
		background-color: #ffffff;
		border-bottom: 0.01rem solid #dadee6;
	}
	.list{
		width: 6.9rem;
		height: auto;
		padding: 0.3rem 0;
		justify-content: space-between;
	}
	.list-top,.list-bottom{
		width: 100%;
		height: auto;
		justify-content: space-between;
	}
	.list-top img{
		width: 0.46rem;
		height: 0.46rem;
	}
	.list-bottom{
		margin-top: 0.3rem;
	}
	.list h3{
		font-size: 0.34rem;
		font-weight: 600;
	}
	.list h3:first-child{
		color: #393d47;
	}
	.h3-blue{
		color: #4172dc;
	}
	.h3-gray{
		color: #535d72;
	}
	.h3-red{
		color: #e94949;
	}
	.list h4{
		font-size: 0.32rem;
		color: #393d47;
	}
	.line-block{
		width: 100%;
		height: 0.16rem;
	}
	.list-top-left img{
		width: 0.46rem;
		height: 0.46rem;
		margin-right: 0.2rem;
	}
</style>
