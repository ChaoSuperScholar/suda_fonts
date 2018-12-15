<template>
	<div class="transaction">
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
			<router-link to="order">
				<div class="top-right flex-row">
					<img src="../../static/images/transaction_01.png" alt="">
					<h3>订单</h3>
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
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>小熊奥西商家</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-blue flex-col" @click="buyClick()">
								购买
							</div>
						</div>
					</div>
				</div>
				<!-- 循环列表list  end -->
				<div class="list flex-col">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<img src="../../static/images/userCenter_01.png" alt="">
							<h4>及时收款商家</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
							</div>
							<div class="btn-blue flex-col">
								购买
							</div>
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
							<h4>SDT测试数据</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-blue flex-col">
								购买
							</div>
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
							<h4>USDT测试数据</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-blue flex-col">
								购买
							</div>
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
							<h4>BTC测试数据</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-blue flex-col">
								购买
							</div>
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
							<h4>EOS测试数据</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-blue flex-col">
								购买
							</div>
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
							<h4>ETH出售订单测试数据</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-red flex-col">
								出售
							</div>
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
							<h4>SDT出售订单测试数据</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-red flex-col">
								出售
							</div>
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
							<h4>USDT出售订单测试数据</h4>
						</div>
						<h5>成交&nbsp;326</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;826.80CNY</h4>
							<h5>剩余数量:&nbsp;15402</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
							<div class="btn-red flex-col">
								出售
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 确认弹层 -->
		<div class="confirm-layer-father flex-col" v-show="showLayer">
			<div class="confirm-layer flex-col">
				<div class="layer-top flex-col">
					<div class="confirm-layer-child flex-col">
						<div class="layer-top-top flex-row">
							<div class="top-left flex-row">
								<img src="../../static/images/userCenter_01.png" alt="">
								<h4>小熊奥西商家</h4>
							</div>
							<div class="top-right flex-row">
								<img src="../../static/images/transaction_03.png" alt="">
								<img src="../../static/images/transaction_04.png" alt="">
								<img src="../../static/images/transaction_05.png" alt="">
							</div>
						</div>
						<div class="layer-top-bottom flex-row">
							<h3>单价&nbsp;823.00&nbsp;CNY</h3>
							<h4>剩余数量:&nbsp;80000</h4>
						</div>
					</div>
				</div>
				<div class="confirm-layer-child flex-col">
					<div class="layer-center flex-col">
						<div class="input-list flex-row">
							<input v-model="layerNum" type="number" value="" placeholder="输入出售数量"/>
							<h3>ETH</h3>
						</div>
						<div class="input-list flex-row">
							<input v-model="layerMoney" type="number" value="" placeholder="0.00"/>
							<h3>CNY</h3>
						</div>
					</div>
					<div class="layer-bottom flex-row">
						<div class="btn-layer btn-layer-left flex-col" @click="cancelClick()">
							取消
						</div>
						<div class="btn-layer btn-layer-right flex-col" @click="confirmClick()">
							确认
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 发布币种 -->
		<router-link to="transactionRelease">
			<div class="release-fixed">
				<img src="../../static/images/transaction_02.png" alt="">
			</div>
		</router-link>
		<footerBar></footerBar>
	</div>
</template>

<script>
	import footerBar from '../components/footerBar'
	export default{
        name: 'transaction',
        data(){
            return {
            	img1 : require('../../static/images/indexNew_01.png'),
            	img2 : require('../../static/images/indexNew_02_de.png'),
            	img3 : require('../../static/images/indexNew_03.png'),
            	img4 : require('../../static/images/indexNew_04.png'),
            	img5 : require('../../static/images/indexNew_05.png'),
				isTabLeft : true,
				isTabRight : false,
				showLeft : true,
				showRight : false,
				tabsName: [
					{  
						name: "ETH",  
						isActive: true  
					},
					{  
						name: "SDT",  
						isActive: false
					},
					{  
						name: "USDT",  
						isActive: false
					},
					{  
						name: "BTC",  
						isActive: false
					},
					{  
						name: "EOS",  
						isActive: false
					}
				],  
				active: false,
				tabsName2:[
					{
						name: "ETH",  
						isActive: true
					},
					{
						name: "SDT",  
						isActive: false
					},
					{
						name: "USDT",  
						isActive: false
					}
				],
				active2: false,
				showLayer: false,
				layerNum: "",
				layerMoney: ""
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
		//注册组件
		components : {
			footerBar
		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){
  				
  			})
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
			},
			buyClick (){
				console.log("点击了购买!");
				this.showLayer = true;
			},
			cancelClick (){
				console.log("点击了取消!");
				this.showLayer = false;
			},
			confirmClick (){
				console.log("点击了确认!");
				if (!this.layerNum) {
					this.layers("请输入出售数量!")
				} else if(!this.layerMoney){
					this.layers("请输入金额!")
				} else{
					this.layers("确认成功!");
					setTimeout(() => {
						this.showLayer = false;
					}, 1000)
					
				}
			}
  		}
    }
</script>

<style scoped="scoped">
	.transaction{
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
		width: 0.28rem;
		height: 0.34rem;
		margin-right: 0.2rem;
	}
	.top-right h3{
		color: #FFFFFF;
	}
	.tab-card,.tab-card2{
		width: 100%;
		height: auto;
		display: none;
	}
	.tab-left,.tab-right{
		width: 100%;
		height: auto;
		margin-bottom: 1rem;
		background-color: #e8eaee;
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
	.list-top h5{
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
	.list-bottom-top h5{
		margin-right: 0.3rem;
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
	.list-bottom-bottom .btn-blue,.btn-red{
		width: 1.6rem;
		height: 0.66rem;
		border-radius: 0.1rem;
		background-color: #4779e3;
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-right: 0.3rem;
	}
	.release-fixed{
		width: 1.08rem;
		height: 1.08rem;
		position: fixed;
		right: 0.26rem;
		bottom: 1.8rem;
	}
	.btn-red{
		width: 1.6rem;
		height: 0.66rem;
		border-radius: 0.1rem;
		background-color: #e55656;
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-right: 0.3rem;
	}
	/* 弹层 */
	.confirm-layer-father{
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0,0,0,0.6);
		z-index: 999;
	}
	.confirm-layer{
		width: 6.9rem;
		height: auto;
		background-color: #ffffff;
		border-radius: 0.1rem;
		overflow: hidden;
		padding-bottom: 0.7rem;
	}
	.confirm-layer-child{
		width: 6.3rem;
		height: auto;
	}
	.confirm-layer h3{
		font-size: 0.32rem;
		color: #2b2f38;
		font-weight: 600;
	}
	.confirm-layer h4{
		font-size: 0.34rem;
		color: #2b2f38;
	}
	.layer-top{
		width: 100%;
		height: auto;
		padding: 0.3rem 0;
		background-color: #eaedf4;
	}
	.layer-top-top{
		width: 100%;
		height: auto;
		justify-content: space-between;
	}
	.layer-top-top .top-left img{
		width: 0.6rem;
		height: 0.6rem;
		margin-right: 0.2rem;
	}
	.layer-top-top .top-right{
		margin: 0;
	}
	.layer-top-top .top-right img{
		width: 0.46rem;
		height: 0.46rem;
		margin-left: 0.2rem;
		margin-right: 0;
	}
	.layer-top-bottom{
		width: 100%;
		justify-content: space-between;
		margin-top: 0.3rem;
	}
	.layer-center{
		width: 100%;
		height: auto;
		padding: 0.5rem 0;
	}
	.layer-center .input-list:first-child{
		margin-bottom: 0.5rem;
	}
	.input-list{
		width: 100%;
		height: 0.94rem;
		border: 0.02rem solid #9095a0;
		border-radius: 0.1rem;
		justify-content: space-between;
	}
	.input-list input{
		width: 3.5rem;
		height: 0.4rem;
		font-size: 0.32rem;
		margin-left: 0.3rem;
		border: none;
	}
	.input-list h3{
		margin-right: 0.3rem;
	}
	.layer-bottom{
		width: 100%;
		height: 0.96rem;
		justify-content: space-between;
	}
	.btn-layer{
		width: 2.9rem;
		height: 0.96rem;
		border-radius: 0.05rem;
		font-size: 0.32rem;
		color: #FFFFFF;
	}
	.btn-layer-left{
		background-color: #aeb7cd;
	}
	.btn-layer-right{
		background-color: #4172e1;
	}
</style>
