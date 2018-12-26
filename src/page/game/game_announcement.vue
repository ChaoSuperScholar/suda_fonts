<template>
	<div class="game_announcement">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<div class="tab-father flex-col">
						<div class="tab-child flex-col">
							<div class="list flex-row" v-for="list in lists" @click="goDetails(list)">
								<h5 class="text-line-1">{{list.title}}</h5>
								<h5>{{list.created_at}}</h5>
							</div>
							<nodata v-if="!lists.length"></nodata>
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
        name: 'game_announcement',
        data(){
            return {
            	lists : []
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
  		//实例方法
  		methods: {
  			goIndex (){
  				this.$router.replace('game_index');
  			},
			getMsg (){
				this.axios.post('/index/suda_game/gameNoticeList')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			goDetails (list){
				console.log(list.id);
				this.$router.push({
					path : '/game_announcement_details',
					query : {
						id : list.id
					}
				})
			}
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
		background-image: url(../../../static/images/game/game_announcement_01.png);
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
	.tab-father{
		width: 5.2rem;
		height: 5.5rem;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		background-color: #c78c20;
		margin-top: 2.5rem;
	}
	.tab-child{
		width: 5.1rem;
		height: 5.4rem;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		background-color: #f9cd76;
		justify-content: flex-start;
	}
	.list{
		width: 100%;
		height: 0.78rem;
		background-color: #98b74e;
		border-bottom: 0.06rem solid #768e36;
		margin: 0.03rem 0;
		justify-content: space-between;
	}
	.list h5{
		font-size: 0.24rem;
		color: #4f4a44;
		max-width: 2.8rem;
	}
	.list h5:nth-child(1){
		margin-left: 0.2rem;
	}
	.list h5:nth-child(2){
		margin-right: 0.2rem;
	}
</style>
