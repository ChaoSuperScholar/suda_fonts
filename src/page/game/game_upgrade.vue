<template>
	<div class="game_upgrade">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<div class="tab-father flex-col">
						<div class="tab-child flex-col">
							<div class="list flex-row">
								<img class="img-1" src="../../../static/images/game_upgrade_02.png" alt="">
								<div class="list-center flex-col">
									<h3>外观:Lv.{{list_1.lv}}</h3>
									<h4>生产力: {{list_1.product}}</h4>
									<h4>升级: {{list_1.gold}}金币</h4>
								</div>
								<img class="img-2" src="../../../static/images/game_upgrade_05.png" alt="" @click="upgrade(1)">
							</div>
							<div class="list flex-row">
								<img class="img-1" src="../../../static/images/game_upgrade_03.png" alt="">
								<div class="list-center flex-col">
									<h3>装修:Lv.{{list_2.lv}}</h3>
									<h4>生产力: {{list_2.product}}</h4>
									<h4>升级: {{list_2.gold}}金币</h4>
								</div>
								<img class="img-2" src="../../../static/images/game_upgrade_06.png" alt="" @click="upgrade(3)">
							</div>
							<div class="list flex-row">
								<img class="img-1" src="../../../static/images/game_upgrade_04.png" alt="">
								<div class="list-center flex-col">
									<h3>营销:Lv.{{list_3.lv}}</h3>
									<h4>生产力: {{list_3.product}}</h4>
									<h4>升级: {{list_3.gold}}金币</h4>
								</div>
								<img class="img-2" src="../../../static/images/game_upgrade_07.png" alt="" @click="upgrade(2)">
							</div>
							<div class="list flex-row">
								<h3>生产力:{{msg.product}}</h3>
							</div>
						</div>
						<div class="bottom-text flex-row">
							<h3>今日收益: {{msg.today}}</h3>
							<h3>累计收益: {{msg.sum}}</h3>
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
        name: 'game_upgrade',
        data(){
            return {
				msg : [],
				list_1 : [],
				list_2 : [],
				list_3 : []
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
				this.axios.post('/index/suda_game/oneLand',{
					num : this.$route.query.num
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.msg = res.data;
						this.list_1 = res.list.appearance;
						this.list_2 = res.list.marketing;
						this.list_3 = res.list.renovation;
 					} else{
						this.layers(data.message);
					}
				})
			},
			upgrade (index){
				console.log(index);
				this.axios.post('/index/suda_game/upgrade',{
					num : this.$route.query.num,
					type : index
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	h3{
		font-size: 0.28rem;
		font-weight: bolder;
		color: #ffd83b;
		line-height: 1.4;
		text-shadow: 0 0 0.06rem #463317;
	}
	h4{
		font-size: 0.22rem;
		color: #fef3cd;
		line-height: 1.4;
	}
	.h4-yellow{
		color: #ffd83b;
	}
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
		height: 11.5rem;
		background-image: url(http://www.suda66888.com/game_upgrade_01.png);
		background-size: 100% 100%;
		position: relative;
	}
	.tab-father{
		width: 5.2rem;
		height: auto;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		background-color: #c78c20;
		margin-top: 2rem;
		justify-content: flex-start;
	}
	.tab-child{
		width: 5rem;
		height: auto;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		background-color: #f9cd76;
		justify-content: flex-start;
		margin-top: 0.05rem;
		padding-top: 0.04rem;
	}
	.close-btn{
		width: 0.84rem;
		height: 0.84rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.7rem;
	}
	.list{
		width: 100%;
		height: 1.6rem;
		background-color: #98b74e;
		margin-bottom: 0.04rem;
		justify-content: space-between;
	}
	.list-center{
		align-items: flex-start;
	}
	.tab-child .list:last-child{
		height: 0.96rem;
	}
	.tab-child .list:last-child h3{
		margin-left: 0.1rem;
		color: #463317;
		text-shadow: 0 0 0;
	}
	.img-1{
		width: 1.09rem;
		height: 1.09rem;
		margin-left: 0.1rem;
	}
	.img-2{
		width: 1.94rem;
		height: 0.86rem;
		margin-right: 0.1rem;
	}
	.bottom-text{
		width: 4.7rem;
		height: 0.8rem;
		justify-content: space-between;
	}
	.bottom-text h3{
		color: #f2dfac;
		line-height: 1.2;
	}
</style>
