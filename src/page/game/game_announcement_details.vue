<template>
	<div class="game_announcement_details">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<div class="tab-father flex-col">
						<div class="tab-child flex-col">
								<h5>{{list.title}}</h5>
								<p>{{list.desc}}</p>
						</div>
					</div>
					<div class="return" @click="returnPage()">
						<img src="../../../static/images/game/game_announcement_02.png" alt="">
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
        name: 'game_announcement_details',
        data(){
            return {
            	list : []
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
			returnPage (){
				this.$router.replace('game_announcement');
			},
  			goIndex (){
  				this.$router.replace('game_index');
  			},
			getMsg (){
				this.axios.post('/index/suda_game/gameNoticeInfo',{
					id : this.$route.query.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.list = data.data;
					} else{
						this.layers(data.message);
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
		background-image: url(http://www.suda66888.com/game/bg.png);
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
		background-image: url(http://www.suda66888.com/game/game_announcement_01.png);
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
	.return{
		width: 0.8rem;
		height: 0.8rem;
		position: absolute;
		left: 0.1rem;
		bottom: 1.6rem;
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
		background-color: #98b74e;
		justify-content: flex-start;
		overflow-y: scroll;
	}
	p{
		font-size: 0.22rem;
		color: #4e4944;
		line-height: 1.3;
		margin: 0.1rem 0.2rem;
	}
	h5{
		font-size: 0.24rem;
		color: #4f4a44;
		max-width: 2.8rem;
		margin: 0 0.2rem;
	}
</style>
