<template>
	<div class="game_ElectricPower">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<img class="return_page" src="../../../static/images/game/game_ElectricPower_02.png" alt="" @click="return_page()">
					<div class="list flex-row">
						<h4>电力:</h4>
						<img src="../../../static/images/game/game_ElectricPower_04_00.png" alt="" v-if="this.$route.query.time == 0">
						<img src="../../../static/images/game/game_ElectricPower_04_01.png" alt="" v-if="this.$route.query.time > 0&&this.$route.query.time < 2">
            <img src="../../../static/images/game/game_ElectricPower_04_01.png" alt="" v-if="this.$route.query.time > 1&&this.$route.query.time < 3">
						<img src="../../../static/images/game/game_ElectricPower_04_02.png" alt="" v-if="this.$route.query.time > 2&&this.$route.query.time < 5">
						<img src="../../../static/images/game/game_ElectricPower_04_03.png" alt="" v-if="this.$route.query.time > 4&&this.$route.query.time < 7">
						<img src="../../../static/images/game/game_ElectricPower_04_04.png" alt="" v-if="this.$route.query.time > 6&&this.$route.query.time < 9">
						<img src="../../../static/images/game/game_ElectricPower_04_05.png" alt="" v-if="this.$route.query.time > 8&&this.$route.query.time < 11">
						<img src="../../../static/images/game/game_ElectricPower_04_06.png" alt="" v-if="this.$route.query.time > 10&&this.$route.query.time < 13">
						<img src="../../../static/images/game/game_ElectricPower_04_07.png" alt="" v-if="this.$route.query.time > 12&&this.$route.query.time < 15">
						<img src="../../../static/images/game/game_ElectricPower_04_08.png" alt="" v-if="this.$route.query.time > 14&&this.$route.query.time < 17">
						<img src="../../../static/images/game/game_ElectricPower_04_09.png" alt="" v-if="this.$route.query.time > 16&&this.$route.query.time < 19">
						<img src="../../../static/images/game/game_ElectricPower_04_10.png" alt="" v-if="this.$route.query.time > 18&&this.$route.query.time < 21">
						<img src="../../../static/images/game/game_ElectricPower_04_11.png" alt="" v-if="this.$route.query.time > 20&&this.$route.query.time < 23">
						<img src="../../../static/images/game/game_ElectricPower_04_12.png" alt="" v-if="this.$route.query.time > 22&&this.$route.query.time < 25">
						<h4>{{power}}小时</h4>
					</div>
					<div class="list flex-row">
						<h4>充电:</h4>
						<div class="list-input flex-col">
							<!--<h4 v-if="this.$route.query.time >= 12">3金币</h4>-->
							<h4>{{powers}}金币</h4>
						</div>
						<h4>24小时</h4>
					</div>
					<img class="btn" src="../../../static/images/game/game_ElectricPower_03.png" alt="" @click="charging()">
					<h5></h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'game_ElectricPower',
        data(){
            return {
            	power : "",
              powers:'',
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
  			return_page (){
				this.$router.replace('game_index');
			},
			charging (){
				if (this.$route.query.time == 23) {
					this.layers("电力已满!")
				} else{
					this.axios.post('/index/suda_game/buyBattery',{
						num : "1"
					})
					.then(({data}) => {
						if (data.status == 200) {
							this.layers(data.message);
							setTimeout(() => {
								this.$router.replace('game_index');
							},1500)
						} else{
							this.layers(data.message);
						}
					})
				}
			},
			getMsg (){
				this.power = this.$route.query.time;
        this.powers = this.$route.query.powers;
			},
  		}
    }
</script>

<style scoped>
	h4{
		font-size: 0.24rem;
		font-weight: bolder;
		color: #463317;
	}
	h5{
		max-width: 4.8rem;
		word-break: break-all;
		font-size: 0.22rem;
		color: #d28326;
		margin-bottom: 0.2rem;
    height: 0.5rem;
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
		width: 5.86rem;
		height: 3.96rem;
		background-image: url(http://www.suda66888.com/game/game_ElectricPower_01.png);
		background-size: 100% 100%;
		position: relative;
		justify-content: flex-end;
	}
	.return_page{
		width: 0.44rem;
		height: 0.44rem;
		position: absolute;
		top: 0.2rem;
		right: 0.2rem;
	}
	.list{
		width: 4.5rem;
		height: auto;
		margin-bottom: 0.1rem;
		justify-content: space-between;
	}
	.list img,.list-input{
		width: 2.88rem;
		height: 0.48rem;
		margin-right: 0.1rem;
	}
	.btn{
		width: 2.88rem;
		height: 0.64rem;
		margin-bottom: 0.1rem;
	}
	.list .list-input{
		background-image: url(http://www.suda66888.com/game/game_ElectricPower_05.png);
		background-size: 100% 100%;
	}
	.list-input h4{
		color: #f9cc73;
	}
	.list h4{
		width: 0.8rem;
	}
</style>
