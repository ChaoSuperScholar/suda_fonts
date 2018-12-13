<template>
	<div class="order">
		<div class="top-module flex-row">
			<h4></h4>
			<div class="top-tab flex-row">
				<div class="top-tab-list flex-col" :class="{activeTab:isTabLeft}" @click="clickTabLeft()">
					<h3>购买</h3>
				</div>
				<div class="top-tab-list flex-col" :class="{activeTab:isTabRight}" @click="clickTabRight()">
					<h3>出售</h3>
				</div>
			</div>
			<router-link to="transaction">
				<div class="top-right flex-row">
					<img src="../../static/images/order_01.png" alt="">
					<h3>广告</h3>
				</div>
			</router-link>
		</div>
		<div class="tab-left flex-col" v-show="showLeft">
			<!-- 购买顶部切换 -->
			<div class="tab-father flex-row">
				<template v-for="(tab,index) in tabsName">
					<div class="tab-btn flex-col" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">
						{{tab.name}}
					</div>
				</template>
			</div>
			<!-- 需要切换的部分 -->
			<div class="tab-card" style="display: block;">
				<!-- 循环列表list -->
				<router-link to="orderPage">
					<div class="list flex-col">
						<div class="list-top flex-row">
							<div class="list-top-left flex-row">
								<img src="../../static/images/userCenter_01.png" alt="">
								<h4>全部模拟数据</h4>
							</div>
							<h4 class="h4-blue">待付款</h4>
						</div>
						<div class="list-bottom flex-col">
							<div class="list-bottom-top flex-row">
								<h4>金额&nbsp;826.80CNY</h4>
								<h5>购买数量:&nbsp;15402</h5>
							</div>
							<div class="list-bottom-bottom flex-row">
								<div class="bottom-left flex-row">
									<img src="../../static/images/transaction_03.png" alt="">
									<img src="../../static/images/transaction_04.png" alt="">
									<img src="../../static/images/transaction_05.png" alt="">
								</div>
								<h5>购买单价:&nbsp;827.00</h5>
							</div>
						</div>
					</div>
				</router-link>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>待付款模拟数据</h4>
						</div>
						<h4 class="h4-blue">待付款</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>已付款模拟数据</h4>
						</div>
						<h4 class="h4-blue">等待放行</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>申诉中模拟数据</h4>
						</div>
						<h4 class="h4-red">申诉中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>已取消模拟数据</h4>
						</div>
						<h4 class="h4-gray">已取消</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="tab-right flex-col" v-show="showRight">
			<!-- 出售顶部切换 -->
			<div class="tab-father flex-row">
				<template v-for="(tab2,index) in tabsName2">
					<div class="tab-btn flex-col" @click="tabsSwitch2(index)" v-bind:class="{active2:tab2.isActive}">
						{{tab2.name}}
					</div>
				</template>
			</div>
			<div class="tab-card2" style="display: block;">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>全部模拟数据</h4>
						</div>
						<h4 class="h4-blue">等待付款</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card2">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>未付款模拟数据</h4>
						</div>
						<h4 class="h4-blue">等待付款</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card2">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>已付款模拟数据</h4>
						</div>
						<h4 class="h4-blue">待放行</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card2">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>申诉中模拟数据</h4>
						</div>
						<h4 class="h4-blue">申述中</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card2">
				<!-- 循环列表list -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>已取消模拟数据</h4>
						</div>
						<h4 class="h4-blue">已取消</h4>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>金额&nbsp;826.80CNY</h4>
							<h5>购买数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<h5>购买单价:&nbsp;827.00</h5>
						</div>
					</div>
				</div>
			</div>
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
	import footerBar from '../components/footerBar'
	export default{
        name: 'order',
        data(){
            return {
            	isTabLeft : true,
            	isTabRight : false,
            	showLeft : true,
            	showRight : false,
				img1 : require('../../static/images/indexNew_01.png'),
				img2 : require('../../static/images/indexNew_02_de.png'),
				img3 : require('../../static/images/indexNew_03.png'),
				img4 : require('../../static/images/indexNew_04.png'),
				img5 : require('../../static/images/indexNew_05.png'),
				tabsName: [
					{  
						name: "全部",  
						isActive: true  
					},
					{  
						name: "未付款",  
						isActive: false
					},
					{  
						name: "已付款",  
						isActive: false
					},
					{  
						name: "申述中",  
						isActive: false
					},
					{  
						name: "已取消",  
						isActive: false
					}
				],  
				active: false,
				tabsName2:[
					{  
						name: "全部",  
						isActive: true  
					},
					{  
						name: "未付款",  
						isActive: false
					},
					{  
						name: "已付款",  
						isActive: false
					},
					{  
						name: "申述中",  
						isActive: false
					},
					{  
						name: "已取消",  
						isActive: false,
					}
				],
				active2: false
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
			footerBar
		},
  		//实例方法
  		methods: {
  			clickTabLeft (){
  				this.isTabLeft = true;
  				this.isTabRight = false;
  				this.showLeft = true;
  				this.showRight = false;
  			},
  			clickTabRight (){
  				this.isTabLeft = false;
  				this.isTabRight = true;
  				this.showLeft = false;
  				this.showRight = true
  			},
			tabsSwitch: function(tabIndex) {  
					let tabCardCollection = document.querySelectorAll(".tab-card"),  
						len = tabCardCollection.length;  
							for(var i = 0; i < len; i++) {  
								tabCardCollection[i].style.display = "none";  
							this.tabsName[i].isActive = false;  
						}  
					this.tabsName[tabIndex].isActive = true;  
					tabCardCollection[tabIndex].style.display = "block";  
			},
			tabsSwitch2: function(tabIndex2) {  
					let tabCardCollection2 = document.querySelectorAll(".tab-card2"),  
						len = tabCardCollection2.length;  
							for(var i = 0; i < len; i++) {  
								tabCardCollection2[i].style.display = "none";  
							this.tabsName2[i].isActive = false;  
						}  
					this.tabsName2[tabIndex2].isActive = true;  
					tabCardCollection2[tabIndex2].style.display = "block";  
			}
			
  		}
    }
</script>

<style scoped>
	.order{
		min-height: 100vh;
		background-color: #e8eaee;
		justify-content: flex-start!important;
	}
	h3{
		font-size: 0.32rem;
	}
	h4{
		font-size: 0.3rem;
		color: #2b2f38;
	}
	h5{
		font-size: 0.28rem;
		color: #6b707b;
	}
	.top-module{
		width: 100%;
		height: 1.2rem;
		background-color: #393f4c;
		justify-content: space-between;
	}
	.top-tab{
		width: 3.5rem;
		height: 0.64rem;
		border: 0.02rem solid #8a9cc2;
		border-radius: 0.1rem;
		margin-left: 1rem;
	}
	.top-tab-list{
		width: 50%;
		height: 100%;
	}
	.top-tab-list h3{
		color: #8998b9;
	}
	.activeTab{
		background-color: #5e719a;
	}
	.activeTab h3{
		color: #ffffff;
	}
	.top-right{
		margin-right: 0.3rem;
	}
	.top-right img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.2rem;
	}
	.top-right h3{
		color: #FFFFFF;
	}
	.tab-left,.tab-right{
		width: 100%;
		height: auto;
		margin-bottom: 1rem;
		background-color: #e8eaee;
	}
	.tab-card,.tab-card2{
		width: 100%;
		height: auto;
		display: none;
	}
	.tab-father{
		width: 100%;
		height: auto;
		justify-content: space-around;
		background-color: #393f4c;
	}
	.tab-btn{
		width: auto;
		height: 0.8rem;
		font-size: 0.32rem;
		color: #b7c6e8;
	}
	.active,.active2{
		color: #FFFFFF;
		border-bottom: 0.06rem solid #FFFFFF;
	}
	.list,.list-top,.list-bottom,.list-bottom-top,.list-bottom-bottom{
		width: 100%;
	}
	.list{
		margin-top: 0.16rem;
		background-color: #ffffff;
	}
	.list-top{
		height: auto;
		padding: 0.2rem 0;
		justify-content: space-between;
		border-bottom: 0.01rem solid #e9ebef;
	}
	.list-top-left img{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		margin: 0 0.16rem 0 0.3rem;
	}
	.list h5{
		margin-right: 0.3rem;
	}
	.list-bottom-top,.list-bottom-bottom{
		justify-content: space-between;
	}
	.list-bottom{
		padding: 0.3rem 0;
	}
	.list-bottom-top h4{
		margin-left: 0.3rem;
	}
	.list-bottom-bottom{
		margin-top: 0.3rem;
	}
	.list-bottom-bottom img{
		width: 0.46rem;
		height: 0.46rem;
		margin-right: 0.18rem;
	}
	.list-bottom-bottom img:first-child{
		margin-left: 0.3rem;
	}
	.list-bottom-top h4{
		font-weight: 600;
		color: #2a2d35;
	}
	.h4-blue{
		font-weight: 600;
		color: #3f74e3;
		margin-right: 0.3rem;
	}
	.h4-gray{
		font-weight: 600;
		color: #535d72;
		margin-right: 0.3rem;
	}
	.h4-red{
		font-weight: 600;
		color: #e94949;
		margin-right: 0.3rem;
	}
</style>
