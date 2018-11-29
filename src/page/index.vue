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
			<div @click="importShow" class="import-wallet wallet-div flex-col">
				导入钱包
			</div>
			<div @click="createShow" class="create-wallet wallet-div flex-col">
				创建钱包
			</div>
		</div>
		<!-- 选择导入钱包类型 -->
		<div v-show="importWalletIsShow" @click="closeWallet" class="choose-wallet-father flex-col">
			<div class="choose-wallet flex-col" @click.stop="importWalletIsShow = true">
				<div class="choose-title flex-col">
					<h4>选择钱包类型</h4>
				</div>
				<router-link to="importWallet">
					<div @click="routerETH" class="list flex-row">
						<div class="list-left flex-row">
							<img class="img-first" src="../../static/images/index_06.png" alt="">
							<h4>ETH</h4>
						</div>
						<img src="../../static/images/index_08.png" alt="">
					</div>
				</router-link>
				<router-link to="importWallet">
					<div @click="routerUSDT" class="list flex-row">
						<div class="list-left flex-row">
							<img src="../../static/images/index_07.png" alt="">
							<h4>USDT</h4>
						</div>
						<img src="../../static/images/index_08.png" alt="">
					</div>
				</router-link>
				<router-link to="importWallet">
					<div @click="routerSDT" class="list flex-row">
						<div class="list-left flex-row">
							<img src="../../static/images/index_07.png" alt="">
							<h4>SDT</h4>
						</div>
						<img src="../../static/images/index_08.png" alt="">
					</div>
				</router-link>
			</div>
		</div>
		<!-- 选择创建钱包类型 -->
		<div v-show="walletIsShow" @click="closeWallet" class="choose-wallet-father flex-col">
			<div class="choose-wallet flex-col" @click.stop="walletIsShow = true">
				<div class="choose-title flex-col">
					<h4>选择钱包类型</h4>
				</div>
				<router-link to="createWallet">
					<div @click="routerETH" class="list flex-row">
						<div class="list-left flex-row">
							<img class="img-first" src="../../static/images/index_06.png" alt="">
							<h4>ETH</h4>
						</div>
						<img src="../../static/images/index_08.png" alt="">
					</div>
				</router-link>
				<router-link to="createWallet">
					<div @click="routerUSDT" class="list flex-row">
						<div class="list-left flex-row">
							<img src="../../static/images/index_07.png" alt="">
							<h4>USDT</h4>
						</div>
						<img src="../../static/images/index_08.png" alt="">
					</div>
				</router-link>
				<router-link to="createWallet">
					<div @click="routerSDT" class="list flex-row">
						<div class="list-left flex-row">
							<img src="../../static/images/index_07.png" alt="">
							<h4>SDT</h4>
						</div>
						<img src="../../static/images/index_08.png" alt="">
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'index',
        data(){
            return {
            	walletIsShow : false,
				importWalletIsShow : false
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
			/* 选择导入钱包 */
  			importShow (){
				this.importWalletIsShow = true;
				var chooseMode = 1;
				console.log("选择了导入钱包")
			},
			/* 选择创建钱包 */
			createShow (){
				this.walletIsShow = true;
				var chooseMode = 2;
				console.log("选择了创建钱包")
			},
			/* 关闭选择钱包 */
			closeWallet (){
				this.walletIsShow = false;
				this.importWalletIsShow = false;
				var chooseMode = 0;
				console.log("什么都没选")
			},
			/* 选择ETH钱包类型 */
			routerETH (){
				
			},
			/* 选择USDT钱包类型 */
			routerUSDT (){
				
			},
			/* 选择SDT钱包类型 */
			routerSDT (){
				
			},
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
		border: 0.03rem solid #c8cbd4;
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
	.list{
		width: 5.4rem;
		height: 0.94rem;
		border-bottom: 0.01rem solid #dce0e8;
		justify-content: space-between;
	}
	.img-first{
		width: 0.26rem!important;
		height: 0.36rem!important;
	}
	.list-left img{
		width: 0.24rem;
		height: 0.28rem;
		margin-right: 0.3rem;
	}
	.list img:last-child{
		width: 0.12rem;
		height: 0.24rem;
	}
</style>
