<template>
	<div class="application">
		<pageHead>应用</pageHead>
		<div class="swiper-father">
			<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiperSlide v-for="(item,index) in swiperImg" :key="index">
					<img class="swiper-slid_img" :src="item.image" alt=""/>
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
		<div class="tab-card" style="display: block;">
			<div class="list flex-row" @click="noData()">
				<img src="../../static/images/application_04.png" alt="">
				<div class="list-right flex-col">
					<h4>汽车大亨</h4>
					<p>模拟经营自动收益游戏，采用流行“IDLE”游戏模式，为游戏玩家带来极佳的游玩体验。</p>
				</div>
			</div>
			<div class="list flex-row"  @click="goFinancial()">
				<img src="../../static/images/application_05.png" alt="">
				<div class="list-right flex-col">
					<h4>理财</h4>
					<p>有效的、合理的处理和运用钱财，让自己的钱财花费发挥最大的效果。</p>
				</div>
			</div>
		</div>
		<div class="tab-card">
			<!-- 沒有數據 -->
			<div class="no-data flex-row">
				暫無數據
			</div>
		</div>
		<div class="tab-card">
			<!-- 沒有數據 -->
			<div class="no-data flex-row">
				暫無數據
			</div>
		</div>
		<div class="tab-card">
			<!-- 沒有數據 -->
			<div class="no-data flex-row">
				暫無數據
			</div>
		</div>
		<div class="tab-card">
			<!-- 沒有數據 -->
			<div class="no-data flex-row">
				暫無數據
			</div>
		</div>
		<div class="tab-card">
			<!-- 沒有數據 -->
			<div class="no-data flex-row">
				暫無數據
			</div>
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	import pageHead from '../components/pageHead'
	import footerBar from '../components/footerBar'
	/* require('swiper/dist/css/swiper.css'); */
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
				swiperImg: [
					{
						image: require('../../static/images/application_01.jpg'),
					},
					{
						image: require('../../static/images/application_01.jpg'),
					},
					{
						image: require('../../static/images/application_01.jpg'),
					}
				],
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
						name: "保障",  
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
</style>
