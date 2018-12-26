<template>
	<div class="game_ranking">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<div class="content flex-col">
						<div class="content-top flex-row">
							<h2>头衔</h2>
							<h2>人数</h2>
							<h2>昵称</h2>
							<h2>邀请充值</h2>
						</div>
						<div class="content-center flex-col">
							<div class="list flex-row">
								<h3>理事长</h3>
								<h4>128563</h4>
								<h4 class="text-line-1">一个幸运的村落</h4>
								<h4 class="text-line-1">54513.85787 ETH</h4>
							</div>
							<div class="list flex-row">
								<h3>会长</h3>
								<h4>128563</h4>
								<h4 class="text-line-1">一个幸运的村落</h4>
								<h4 class="text-line-1">54513.85787 ETH</h4>
							</div>
						</div>
					</div>
					<div class="close-btn" @click="goIndex()">
						<img src="../../../static/images/game/game_play_02.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'game_ranking',
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
  			goIndex (){
  				this.$router.replace('game_index');
  			}
  		}
    }
</script>

<style scoped>
	h2{
		font-size: 0.3rem;
		font-weight: bolder;
		color: #f2dfac;
	}
	h3{
		font-size: 0.3rem;
		font-weight: bolder;
		color: #f7b52c;
	}
	h4{
		font-size: 0.24rem;
		color: #5a4d41;
	}
	.bg-father{
		width: 100vw;
		height: 100vh;
		background-image: url(../../../static/images/game/bg.png);
		background-size: 100% 100%;
	}
	.bg{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,0.6);
	}
	.layer-module{
		width: 7.2rem;
		height: 11.7rem;
		background-image: url(../../../static/images/game/game_ranking_01.png);
		background-size: 100% 100%;
		position: relative;
	}
	.close-btn{
		width: 0.84rem;
		height: 0.84rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.7rem;
	}
	.content{
		width: 5.46rem;
		height: 6.9rem;
		background-color: #c78c20;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		margin-top: 1.6rem;
	}
	.content-top{
		width: 5.16rem;
		height: auto;
		padding: 0.14rem 0;
		justify-content: space-between;
	}
	.content-top h2{
		flex: 1;
		text-align: center;
		height: 0.56rem;
		border-right: 0.03rem solid #463317;
	}
	.content-top h2:last-child{
		flex: 2;
		border: none;
	}
	.content-center{
		width: 5.16rem;
		height: 5.5rem;
		background-color: #f9cc73;
		border-radius: 0.1rem;
		border: 0.02rem solid #463317;
		overflow-y: scroll;
		padding: 0.06rem 0;
		justify-content: flex-start;
	}
	.list{
		width: 100%;
		height: 0.64rem;
		background-color: #98b74e;
		margin-bottom: 0.06rem;
	}
	.list h3{
		text-shadow: 0 0 0.06rem #463317;
	}
	.list h3,.list h4{
		/* filter: glow(color=block,strength=1); */
		text-align: center;
		flex: 1;
	}
	.list h4:last-child{
		flex: 2;
	}
</style>
