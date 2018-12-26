<template>
	<div class="game_index">
		<div class="bg flex-col">
			<div class="bg-img">
				<img src="../../../static/images/game/index_bg.gif" alt="">
			</div>
		</div>
		<!-- <div class="module flex-col">
			
		</div> -->
		<div class="content container">
			<div class="top-module flex-row">
				<div class="head-img-father flex-col">
					<div class="head-img">
						<div>
							<div>
								<img :src="msg.avatar" />
							</div>
						</div>
					</div>
				</div>
				<div class="productive flex-col">
					<h5 class="text-line-1">{{money[0]}}</h5>
				</div>
				<div class="gold flex-col">
					<h5 class="text-line-1">{{money[1]}}</h5>
				</div>
				<div class="suda-gold flex-col">
					<h5 class="text-line-1">{{money[2]}}</h5>
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
				<div class="btn flex-row" @click="getGoldAll()">
					<h4>领取 {{sum}}</h4>
					<img src="../../../static/images/game/game_index_14.png" alt="">
				</div>
				<h4></h4>
			</div>
			<!-- 可切换模块 -->
			<div class="runway">
				<img class="balloon" src="../../../static/images/game/game_index_15_1.png" alt="">
				<img src="../../../static/images/game/game_index_15.png" alt="">
			</div>
			<!-- 销售中心 -->
			<div class="sales-center" @click="btnSales()">
				<div class="sign sign-1">
					<img src="../../../static/images/game/index_sign_07_run.gif" alt="" v-if="statusList.six_status == 1">
					<img src="../../../static/images/game/index_sign_07.png" alt="" v-if="statusList.six_status == 2">
				</div>
				<img src="../../../static/images/game/game_index_16.png" alt="" v-if="statusList.seven_status == 2">
				<img src="../../../static/images/game/game_index_16_1.png" alt="" v-if="statusList.seven_status == 1">
			</div>
			<!-- 纯粹装饰 -->
			<div class="decorations">
				<img src="../../../static/images/game/game_index_20.png" alt="">
			</div>
			<!-- 测试车间和整装工厂 -->
			<div class="test-workshop">
				<div class="sign sign-2" @click="btnTestWorkshop_2()">
					<img src="../../../static/images/game/index_sign_06_run.gif" alt="" v-if="statusList.five_status == 1">
					<img src="../../../static/images/game/index_sign_06.png" alt="" v-if="statusList.five_status == 2">
				</div>
				<div class="sign sign-1" @click="btnTestWorkshop_1()">
					<img src="../../../static/images/game/index_sign_05_run.gif" alt="" v-if="statusList.four_status == 1">
					<img src="../../../static/images/game/index_sign_05.png" alt="" v-if="statusList.four_status == 2">
				</div>
				<img src="../../../static/images/game/game_index_17.png" alt="" v-if="statusList.five_status == 2">
				<img src="../../../static/images/game/game_index_17_1.png" alt="" v-if="statusList.five_status == 1">
				<img src="../../../static/images/game/game_index_17_2.png" alt="" v-if="statusList.six_status == 1">
			</div>
			<!-- 冲压工厂和焊装工厂和涂装工厂 -->
			<div class="stamping-plant">
				<div class="sign sign-3" @click="btnStamping_3()">
					<img src="../../../static/images/game/index_sign_04_run.gif" alt="" v-if="statusList.three_status == 1">
					<img src="../../../static/images/game/index_sign_04.png" alt="" v-if="statusList.three_status == 2">
				</div>
				<div class="sign sign-2" @click="btnStamping_2()">
					<img src="../../../static/images/game/index_sign_03_run.gif" alt="" v-if="statusList.two_status == 1">
					<img src="../../../static/images/game/index_sign_03.png" alt="" v-if="statusList.two_status == 2">
				</div>
				<div class="sign sign-1" @click="btnStamping_1()">
					<img src="../../../static/images/game/index_sign_02_run.gif" alt="" v-if="statusList.one_status == 1">
					<img src="../../../static/images/game/index_sign_02.png" alt="" v-if="statusList.one_status == 2">
				</div>
				<img src="../../../static/images/game/game_index_18.png" alt="" v-if="statusList.two_status == 2">
				<img src="../../../static/images/game/game_index_18_1.png" alt="" v-if="statusList.two_status == 1">
				<img src="../../../static/images/game/game_index_18_2.png" alt="" v-if="statusList.three_status == 1">
				<img src="../../../static/images/game/game_index_18_3.png" alt="" v-if="statusList.four_status == 1">
			</div>
			<!-- 研发中心 -->
			<div class="research-center">
				<div class="sign" @click="btnResearch()" v-if="statusList.one_status == 2">
					<img src="../../../static/images/game/index_sign_01_run.gif" alt="">
				</div>
				<img src="../../../static/images/game/game_index_19_1.png" alt="" v-if="statusList.one_status == 1">
				<img src="../../../static/images/game/game_index_19.png" alt="" v-if="statusList.one_status == 2">
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'game_index',
        data(){
            return {
            	money : [],
				msg : "",
				statusList : [],
				sum : ""
            }
        },
        // 创建之前
  		beforeCreate: function () {
  			
  		},
  		//创建之后
  		created: function (){
			this.getMsg();
			this.getUserInfo();
			this.getGoldList()
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
			btnSales (){
				console.log("点击了销售中心!");
				this.axios.post('/index/suda_game/developmentLand',{
					num : "7"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			btnTestWorkshop_2 (){
				console.log("点击了整装工厂!");
				this.axios.post('/index/suda_game/developmentLand',{
					num : "6"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			btnTestWorkshop_1 (){
				console.log("点击了测试车间!");
				this.axios.post('/index/suda_game/developmentLand',{
					num : "5"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			btnStamping_3 (){
				console.log("点击了涂装工厂!");
				this.axios.post('/index/suda_game/developmentLand',{
					num : "4"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			btnStamping_2 (){
				console.log("点击了焊装工厂!");
				this.axios.post('/index/suda_game/developmentLand',{
					num : "3"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			btnStamping_1 (){
				console.log("点击了冲压工厂!");
				this.axios.post('/index/suda_game/developmentLand',{
					num : "2"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			btnResearch (){
				console.log("点击了研发中心!");
				this.axios.post('/index/suda_game/developmentLand',{
					num : "1"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			getMsg (){
				this.axios.get('/index/suda_game/index')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						let res = data.data;
						this.money = res.balance;
						this.statusList = res;
					} else{
						this.layers(data.message);
					}
				})
			},
			getUserInfo (){
				this.axios.get('/index/suda_user/user_info')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.msg = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			getGoldAll (){
				this.axios.post('/index/suda_game/getGoldAll')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.layers(data.message);
					} else{
						this.layers(data.message);
					}
				})
			},
			getGoldList (){
				this.axios.post('/index/suda_game/getGoldList')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						let res = data.data;
						this.sum = res.sum;
					} else{
						this.layers(data.message);
					}
				})
			}
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
		justify-content: flex-end;
		z-index: -10;
		overflow: hidden;
	}
	.bg-img{
		width: 100%;
		height: 13.34rem;
	}
	.content{
		width: 100vw;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		z-index: 999;
		/* display: none; */
		overflow: hidden;
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
		z-index: 999;
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
		margin-bottom: 0.3rem;
		text-shadow: 0 0 0.06rem #463317;
	}
	.btn img{
		width: 0.41rem;
		height: 0.41rem;
		margin-bottom: 0.3rem;
	}
	/* 可切换模块 */
	.runway{
		width: 4.54rem;
		height: 1.04rem;
		position: absolute;
		right: 0;
		bottom: 10.4rem;
	}
	.runway .balloon{
		width: 0.63rem;
		height: 0.3rem;
		position: absolute;
		left: 0.4rem;
		top: 0.4rem;
	}
	.sales-center{
		width: 3.78rem;
		height: 4.88rem;
		position: absolute;
		left: 0.6rem;
		bottom: 8.6rem;
	}
	.decorations{
		width: 1.92rem;
		height: 1.74rem;
		position: absolute;
		left: 0;
		bottom: 7.3rem;
	}
	.test-workshop{
		width: 4.34rem;
		height: 2.5rem;
		position: absolute;
		right: 0;
		bottom: 7.3rem;
	}
	.stamping-plant{
		width: 100%;
		height: 4.06rem;
		position: absolute;
		right: 0;
		bottom: 4.2rem;
		z-index: 21;
		transform: rotate(1deg);
	}
	.research-center{
		width: 100%;
		height: 6.76rem;
		position: absolute;
		left: 0;
		bottom: 0;
		z-index: 20;
	}
	/* 标识 */
	.sign{
		width: 0.4rem;
		height: 1rem;
		position: absolute;
		z-index: 999;
	}
	.sales-center .sign-1{
		left: 1.7rem;
		bottom: 0.6rem;
	}
	.test-workshop .sign-2{
		left: 0.8rem;
		top: 0.6rem;
	}
	.test-workshop .sign-1{
		left: 2.5rem;
		top: 0.8rem;
	}
	.stamping-plant .sign-3{
		left: 3.3rem;
		top: 0;
	}
	.stamping-plant .sign-2{
		left: 2.2rem;
		top: 0.8rem;
	}
	.stamping-plant .sign-1{
		left: 5rem;
		top: 1.7rem;
	}
	.research-center .sign{
		left: 2.6rem;
		top: 2.4rem;
	}
</style>
