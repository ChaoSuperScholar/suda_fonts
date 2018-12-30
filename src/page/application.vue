<template>
	<div class="application">
		<pageHead>应用</pageHead>
		<div class="swiper-father">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiperSlide v-for="(item,index) in swiperImg" :key="index">
					<img class="swiper-slid_img" :src="item.img" alt=""/>
				</swiperSlide>
				<div class="swiper-pagination flex-row" slot="pagination"></div>
				<!-- Optional controls -->
			</swiper>
		</div>
		<div class="tab-father flex-row">
			<template v-for="(tab,index) in tabsName">
				<div class="tab-btn flex-col" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">
					{{tab.name}}
				</div>
			</template>
		</div>
		<!-- 全部 -->
		<div class="tab-card" style="display: block;">
			<router-link to="game_index">
				<div class="list flex-row" @click="getStatus()">
					<img src="../../static/images/application_04.png" alt="">
					<div class="list-right flex-col">
						<h4>汽车大亨</h4>
						<p class="text-line-1">模拟经营自动收益游戏，采用流行“IDLE”游戏模式，为游戏玩家带来极佳的游玩体验。</p>
					</div>
				</div>
			</router-link>
			<!-- <div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_04.png" alt="">
				<div class="list-right flex-col">
					<h4>汽车大亨</h4>
					<p>模拟经营自动收益游戏，采用流行“IDLE”游戏模式，为游戏玩家带来极佳的游玩体验。</p>
				</div>
			</div> -->
			<div class="list flex-row"  @click="goFinancial()">
				<img src="../../static/images/application_11.png" alt="">
				<div class="list-right flex-col">
					<h4>汽车银行</h4>
					<p>有效的、合理的处理和运用钱财，让自己的钱财花费发挥最大的效果。</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_10.png" alt="">
				<div class="list-right flex-col">
					<h4>燃烧 NBA</h4>
					<p>篮球队之间的对决，参与游戏赢取ETH</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_14.png" alt="">
				<div class="list-right flex-col">
					<h4>异族战争</h4>
					<p>PVP对战策略类游戏</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_13.png" alt="">
				<div class="list-right flex-col">
					<h4>侦探猫咪</h4>
					<p>侦查破案，寻求宝藏获取奖励</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_18.png" alt="">
				<div class="list-right flex-col">
					<h4>魔法拼图</h4>
					<p>可查找任何拼图攻略</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_16.png" alt="">
				<div class="list-right flex-col">
					<h4>N-you</h4>
					<p>完成悬赏任务，获取ETH赏金</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_12.png" alt="">
				<div class="list-right flex-col">
					<h4>Boling</h4>
					<p>区块链上的聊天室</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_05.png" alt="">
				<div class="list-right flex-col">
					<h4>金猪</h4>
					<p>存取ETH免手续费，每日可得5%收益</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_15.png" alt="">
				<div class="list-right flex-col">
					<h4>Kefol</h4>
					<p>音乐播放器助手，用于各个音乐播放器的查找</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_07.png" alt="">
				<div class="list-right flex-col">
					<h4>G-mise</h4>
					<p>去中心化交易所</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_08.png" alt="">
				<div class="list-right flex-col">
					<h4>BOPE</h4>
					<p>一键兑换以太系Token</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_09.png" alt="">
				<div class="list-right flex-col">
					<h4>Opcic</h4>
					<p>基于Opcic协议的去中心交易所</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_17.png" alt="">
				<div class="list-right flex-col">
					<h4>钱袋子</h4>
					<p>去中心化借贷平台</p>
				</div>
			</div>
		</div>
		<!-- 游戏 -->
		<div class="tab-card">
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_04.png" alt="">
				<div class="list-right flex-col">
					<h4>汽车大亨</h4>
					<p>模拟经营自动收益游戏，采用流行“IDLE”游戏模式，为游戏玩家带来极佳的游玩体验。</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_10.png" alt="">
				<div class="list-right flex-col">
					<h4>燃烧 NBA</h4>
					<p>篮球队之间的对决，参与游戏赢取ETH</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_14.png" alt="">
				<div class="list-right flex-col">
					<h4>异族战争</h4>
					<p>PVP对战策略类游戏</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_13.png" alt="">
				<div class="list-right flex-col">
					<h4>侦探猫咪</h4>
					<p>侦查破案，寻求宝藏获取奖励</p>
				</div>
			</div>
		</div>
		<!-- 理财 -->
		<div class="tab-card">
			<div class="list flex-row"  @click="goFinancial()">
				<img src="../../static/images/application_11.png" alt="">
				<div class="list-right flex-col">
					<h4>汽车银行</h4>
					<p>有效的、合理的处理和运用钱财，让自己的钱财花费发挥最大的效果。</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_05.png" alt="">
				<div class="list-right flex-col">
					<h4>金猪</h4>
					<p>存取ETH免手续费，每日可得5%收益</p>
				</div>
			</div>
		</div>
		<!-- 工具 -->
		<div class="tab-card">
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_18.png" alt="">
				<div class="list-right flex-col">
					<h4>魔法拼图</h4>
					<p>可查找任何拼图攻略</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_15.png" alt="">
				<div class="list-right flex-col">
					<h4>Kefol</h4>
					<p>音乐播放器助手，用于各个音乐播放器的查找</p>
				</div>
			</div>
		</div>
		<!-- 交易所 -->
		<div class="tab-card">
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_07.png" alt="">
				<div class="list-right flex-col">
					<h4>G-mise</h4>
					<p>去中心化交易所</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_08.png" alt="">
				<div class="list-right flex-col">
					<h4>BOPE</h4>
					<p>一键兑换以太系Token</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_09.png" alt="">
				<div class="list-right flex-col">
					<h4>Opcic</h4>
					<p>基于Opcic协议的去中心交易所</p>
				</div>
			</div>
		</div>
		<!-- 社交 -->
		<div class="tab-card">
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_16.png" alt="">
				<div class="list-right flex-col">
					<h4>N-you</h4>
					<p>完成悬赏任务，获取ETH赏金</p>
				</div>
			</div>
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_12.png" alt="">
				<div class="list-right flex-col">
					<h4>Boling</h4>
					<p>区块链上的聊天室</p>
				</div>
			</div>
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import pageHead from '../components/pageHead'
	import footerBar from '../components/footerBar'
	require('swiper/dist/css/swiper.css');
	export default{
        name: 'application',
        data(){
            return {
            	img1 : require('../../static/images/indexNew_01.png'),
            	img2 : require('../../static/images/indexNew_02.png'),
            	img3 : require('../../static/images/indexNew_03_de.png'),
            	img4 : require('../../static/images/indexNew_04.png'),
            	img5 : require('../../static/images/indexNew_05.png'),
				// swiper配置
				swiperOption: {
					notNextTick: true,
					autoplay: 3000,
					loop: true,
					autoHeight: true,
					autoplayDisableOnInteraction: false,
					pagination: '.swiper-pagination'
				},
				// swiper图片
				swiperImg: [],
				tabsName: [{  
						name: "全部",  
						isActive: true  
					},
					{  
						name: "游戏",  
						isActive: false
					},
					{  
						name: "理财",  
						isActive: false
					},
					{  
						name: "工具",  
						isActive: false
					},
					{  
						name: "交易所",  
						isActive: false
					},
					{  
						name: "社交",  
						isActive: false
					}
				],  
				active: false
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
		//注册组件
		components : {
			footerBar,
			pageHead,
			swiper,
			swiperSlide
		},
  		//实例方法
  		methods: {
  			tabsSwitch: function(tabIndex) {  
  					var tabCardCollection = document.querySelectorAll(".tab-card"),  
						len = tabCardCollection.length;  
							for(var i = 0; i < len; i++) {  
								tabCardCollection[i].style.display = "none";  
							this.tabsName[i].isActive = false;  
						}  
  					this.tabsName[tabIndex].isActive = true;  
  					tabCardCollection[tabIndex].style.display = "block";  
  			},
			noData (){
				this.layers("暂未开放")
			},
			goFinancial (){
				this.$router.replace('Financial');
			},
			getStatus (){
				this.axios.get('/index/suda_game/inGame')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
					} else{
						this.layers(data.message);
					}
				})
			},
			getMsg (){
				this.axios.get('/index/suda_financial/AppWheel')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						this.swiperImg = data.data;
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	.swiper-father{
		width: 100%;
		height: auto;
		margin-top: 1rem;
	}
	.swiper-slide{
		width: 100%;
		height: auto;
	}
	/* .swiper-pagination-bullets{
		width: 1.36rem;
		height: 0.26rem;
		border-radius: 0.14rem;
		bottom: 0.32rem;
		left: 50%;
		margin-left: -0.86rem;
	} */
	.swiper-pagination-bullets{
		bottom: 0.4rem;
	}
	.swiper-pagination-bullet{
		width: 0.14rem;
		height: 0.14rem;
		background-color: #acbcd2;
		background: #acbcd2;
		border-radius: 50%;
	}
	.swiper-pagination-bullet-active{
		background: #ffffff;
	}
	.tab-card{
		margin-bottom: 1.4rem;
		display: none;
	}
	.tab-father{
		width: 100%;
		height: 0.84rem;
		background-color: #f5f7f9;
		justify-content: space-between;
	}
	.tab-father .tab-btn:first-child{
		margin-left: 0.3rem;
	}
	.tab-father .tab-btn:last-child{
		margin-right: 0.3rem;
	}
	.tab-btn{
		font-size: 0.32rem;
		color: #88919e;
	}
	.active{
		color: #3071ca;
	}
	.list{
		width: 6.9rem;
		height: auto;
		padding: 0.3rem 0;
		border-bottom: 0.01rem solid #e3e6eb;
		justify-content: flex-start;
	}
	.list img{
		width: 1.3rem;
		height: 1.3rem;
		margin-right: 0.2rem;
	}
	.list h4{
		font-size: 0.32rem;
		color: #323943;
	}
	.list p{
		word-break: break-all;
		font-size: 0.28rem;
		color: #7d8289;
	}
	.list-right{
		width: auto;
		height: auto;
		max-width: 5.2rem;
		align-items: flex-start;
	}
	.no-data{
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
	.swiper-pagination-bullets{
		bottom: 0.4rem;
	}
	.text-line-1{
		-webkit-line-clamp: 2;
	}
</style>
