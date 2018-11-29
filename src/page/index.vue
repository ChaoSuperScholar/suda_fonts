<template>
	<div class="index">
		<!-- 背景 -->
		<div class="background-img flex-col">
			<img src="../../static/images/index_01.png" alt="">
			<img src="../../static/images/index_02.png" alt="">
			<img src="../../static/images/index_03.png" alt="">
			<img src="../../static/images/index_04.png" alt="">
			<img src="../../static/images/index_05.png" alt="">
		</div>
		<!-- 主体 -->
		<div class="wallet-father flex-col">
			<div class="import-wallet wallet-div flex-col">
				导入钱包
			</div>
			<div class="create-wallet wallet-div flex-col">
				创建钱包
			</div>
		</div>
		<!-- 选择钱包类型 -->
		<div class="choose-wallet-father flex-col">
			<div class="choose-wallet flex-col">
				<div class="choose-title flex-col">
					<h4>选择钱包类型</h4>
				</div>
				<div class="list flex-row">
					<div class="list-left flex-row">
						<img src="../../static/images/index_06.png" alt="">
						<h4>ETH</h4>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'index',
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
	.background-img,.wallet-father,.choose-wallet-father{
		width: 100vw;
		height: 100vh;
	}
	.wallet-father{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		justify-content: flex-end;
	}
	.wallet-div{
		width: 5.4rem;
		height: 1rem;
		border: 0.05rem solid #c8cbd4;
		border-radius: 0.2rem;
		font-size: 0.36rem;
		color: #c8cbd4;
		font-weight: 600;
	}
	.create-wallet{
		margin: 0.7rem 0 2rem 0;
		background-color: #313b56;
	}
	.choose-wallet-father{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 15;
	}
	.choose-wallet{
		width: 6.1rem;
		height: 4.2rem;
		border-radius: 0.2rem;
		background-color: #ffffff;
		justify-content: flex-start;
	}
	.choose-wallet h4{
		font-size: 0.3rem;
		color: #393f4c;
	}
	.choose-title{
		width: 100%;
		height: 0.9rem;
		box-shadow: 0 0.06rem 0.06rem #dbdbdb;
		border-top-left-radius: 0.2rem;
		border-top-right-radius: 0.2rem;
	}
</style>
