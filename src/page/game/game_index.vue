<template>
	<div class="game_index">
		<div class="bg">
			<div class="bg-img">
				
			</div>
		</div>
		<div class="content container">
			<div class="top-module flex-row">
				<div class="head-img-father flex-col">
					<div class="head-img">
						<div>
							<div>
								<img src="../../../static/images/aboutUs_01.png" />
							</div>
						</div>
					</div>
				</div>
				<div class="productive flex-col">
					<h5 class="text-line-1">584866468</h5>
				</div>
				<div class="gold flex-col">
					<h5 class="text-line-1">654654343</h5>
				</div>
				<div class="suda-gold flex-col">
					<h5 class="text-line-1">54685453434</h5>
				</div>
			</div>
			<div class="right-module flex-col">
				<div class="right-module-top flex-col">
					<router-link to="game_setUp">
						<img src="../../../static/images/game/game_index_05.png" alt="">
					</router-link>
					<router-link to="game_play">
						<img src="../../../static/images/game/game_index_06.png" alt="">
					</router-link>
					<router-link to="game_announcement">
						<img src="../../../static/images/game/game_index_07.png" alt="">
					</router-link>
				</div>
				<div class="right-module-bottom flex-col">
					<router-link to="game_ranking">
						<img src="../../../static/images/game/game_index_08.png" alt="">
					</router-link>
					<router-link to="game_data">
						<img src="../../../static/images/game/game_index_09.png" alt="">
					</router-link>
					<router-link to="game_pay">
						<img src="../../../static/images/game/game_index_10.png" alt="">
					</router-link>
					<img src="../../../static/images/game/game_index_11.png" alt="" v-show="false">
				</div>
			</div>
			<div class="bottom-module flex-row">
				<img src="../../../static/images/game/game_index_12.png" alt="">
				<div class="btn flex-row">
					<h4>领取 656546</h4>
					<img src="../../../static/images/game/game_index_14.png" alt="">
				</div>
				<h4></h4>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'game_index',
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
	.bg{
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		background-color: #1f408a;
		z-index: -10;
	}
	.content{
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		background-color: #808b9b;
		z-index: 999;
		display: none;
	}
	.top-module{
		width: 6.9rem;
		height: auto;
		justify-content: space-between;
		position: fixed;
		top: 0.1rem;
	}
	.top-module h5{
		font-size: 0.24rem;
		color: #f8f5e8;
		margin-bottom: 0.14rem;
		max-width: 0.8rem;
	}
	.suda-gold h5{
		max-width: 1.2rem;
		margin-left: 0.2rem;
	}
	.head-img-father{
		width: 0.9rem;
		height: 1.04rem;
		background-image: url(../../../static/images/game/game_index_01.png);
		background-size: 100% 100%;
	}
	.head-img {
		width: 0.7rem;
		height: 0.6rem;
		transform: rotate(30deg);
		overflow: hidden;
		margin-bottom: 0.1rem;
	}
	.head-img div,.head-img img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	 
	.head-img> div {
		transform: rotate(60deg);
	}
	 
	.head-img> div> div {
		transform: rotate(-120deg);
	}
	.productive{
		width: 2.18rem;
		height: 0.68rem;
		background-image: url(../../../static/images/game/game_index_02.png);
		background-size: 100% 100%;
	}
	.gold{
		width: 2.18rem;
		height: 0.68rem;
		background-image: url(../../../static/images/game/game_index_03.png);
		background-size: 100% 100%;
	}
	.suda-gold{
		width: 2.18rem;
		height: 0.68rem;
		background-image: url(../../../static/images/game/game_index_04.png);
		background-size: 100% 100%;
	}
	.right-module{
		width: 1.5rem;
		height: 86vh;
		justify-content: space-between;
		position: fixed;
		top: 1.4rem;
		right: 0;
		z-index: 999;
	}
	.right-module-top img{
		width: 1.08rem;
		height: 1.08rem;
		margin-bottom: 0.2rem;
	}
	.right-module-bottom img{
		width: 1.22rem;
		height: 1.22rem;
		margin-bottom: 0.2rem;
	}
	.bottom-module{
		width: 100%;
		height: auto;
		position: fixed;
		left: 0;
		bottom: 0.2rem;
		justify-content: space-between;
	}
	.bottom-module img{
		width: 0.9rem;
		height: 1.48rem;
		margin-left: 0.3rem;
	}
	.btn{
		width: 4.42rem;
		height: 1.3rem;
		background-image: url(../../../static/images/game/game_index_13.png);
		background-size: 100% 100%;
		margin-right: 1rem;
	}
	.btn h4{
		font-size: 0.32rem;
		font-weight: bold;
		color: #fffed7;
		margin-bottom: 0.2rem;
	}
	.btn img{
		width: 0.41rem;
		height: 0.41rem;
		margin-bottom: 0.2rem;
	}
</style>
