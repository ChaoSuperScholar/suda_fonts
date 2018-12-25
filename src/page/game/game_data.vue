<template>
	<div class="game_data">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'game_data',
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
		height: 9.5rem;
		background-image: url(../../../static/images/game/game_play_01.png);
		background-size: 100% 100%;
		position: relative;
	}
</style>
