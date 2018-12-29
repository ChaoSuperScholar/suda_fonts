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
					<div class="tab-btn flex-col"  @click="tabsSwitch(tab,index)" v-bind:class="{active:tab.isActive}">
						{{tab.name}}
					</div>
					<h4 v-show="false">{{tab.coin}}</h4>
				</template>
			</div>
			<!-- 需要切换的部分 -->
			<div class="tab-card" style="display: block;">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="list in lists">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="list.avatar" alt="">
							</div>
							<h4>{{list.nickname}}</h4>
						</div>
						<h5>成交&nbsp;{{list.deal_num}}</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;{{list.price|numFilter}}CNY</h4>
							<h5>剩余数量:&nbsp;{{list.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-show="list.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-show="list.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-show="list.wechat == 1">
							</div>
							<!-- <div class="btn-red flex-col" @click="withdrawal(list)" v-if="list.status == 1">
								撤单
							</div> -->
							<div class="btn-blue flex-col" @click="buyClick(list)">
								购买
							</div>
						</div>
					</div>
				</div>
				<nodata v-if="!lists.length"></nodata>
			</div>
			<div class="tab-card">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="list in lists">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="list.avatar" alt="">
							</div>
							<h4>{{list.nickname}}</h4>
						</div>
						<h5>成交&nbsp;{{list.deal_num}}</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;{{list.price|numFilter}}CNY</h4>
							<h5>剩余数量:&nbsp;{{list.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-show="list.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-show="list.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-show="list.wechat == 1">
							</div>
							<!-- <div class="btn-red flex-col" @click="withdrawal(list)" v-if="list.status == 1">
								撤单
							</div> -->
							<div class="btn-blue flex-col" @click="buyClick(list)">
								购买
							</div>
						</div>
					</div>
				</div>
				<nodata v-if="!lists.length"></nodata>
			</div>
			<div class="tab-card">
				<!--没有数据-->
				<nodata></nodata>
			</div>
			<div class="tab-card">
				<!--没有数据-->
				<nodata></nodata>
			</div>
			<div class="tab-card">
				<!--没有数据-->
				<nodata></nodata>
			</div>
		</div>
		<div class="tab-right flex-col" v-show="showRight">
			<!-- 出售顶部切换 -->
			<div class="tab-father flex-row">
				<template v-for="(tab2,index) in tabsName2">
					<div class="tab-btn flex-col" @click="tabsSwitch2(tab2,index)" v-bind:class="{active2:tab2.isActive}">
						{{tab2.name}}
					</div>
				</template>
			</div>
			<div class="tab-card2" style="display: block;">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="item in items">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="item.avatar" alt="">
							</div>
							<h4>{{item.nickname}}</h4>
						</div>
						<h5>成交&nbsp;{{item.deal_num}}</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;{{item.price|numFilter}}CNY</h4>
							<h5>剩余数量:&nbsp;{{item.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-show="item.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-show="item.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-show="item.wechat == 1">
							</div>
							<!-- <div class="btn-red flex-col" @click="withdrawals(item)" v-if="item.status == 1">
								撤单
							</div> -->
							<div class="btn-red flex-col" @click="sellClick(item)">
								出售
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="tab-card2">
				<!-- 循环列表list -->
				<div class="list flex-col" v-for="item in items">
					<div class="list-top flex-row">
						<div class="list-top-left flex-row">
							<div class="avatar">
								<img :src="item.avatar" alt="">
							</div>
							<h4>{{item.nickname}}</h4>
						</div>
						<h5>成交&nbsp;{{item.deal_num}}</h5>
					</div>
					<div class="list-bottom flex-col">
						<div class="list-bottom-top flex-row">
							<h4>单价&nbsp;{{item.price|numFilter}}CNY</h4>
							<h5>剩余数量:&nbsp;{{item.num|numFilter}}</h5>
						</div>
						<div class="list-bottom-bottom flex-row">
							<div class="bottom-left flex-row">
								<img src="../../static/images/transaction_03.png" alt="" v-show="item.bank == 1">
								<img src="../../static/images/transaction_04.png" alt="" v-show="item.alipay == 1">
								<img src="../../static/images/transaction_05.png" alt="" v-show="item.wechat == 1">
							</div>
							<!-- <div class="btn-red flex-col" @click="withdrawals(item)" v-if="item.status == 1">
								撤单
							</div> -->
							<div class="btn-red flex-col" @click="sellClick(item)">
								出售
							</div>
						</div>
					</div>
				</div>
				<!-- 没有数据 -->
				<nodata v-if="!items.length"></nodata>
			</div>
			<div class="tab-card2">
				<!--没有数据-->
				<nodata></nodata>
			</div>
		</div>
		<transition name="slide-fade">
			<!-- 购买确认弹层 -->
			<div class="confirm-layer-father flex-col" v-show="showLayer">
				<div class="confirm-layer flex-col">
					<div class="layer-top flex-col">
						<div class="confirm-layer-child flex-col">
							<div class="layer-top-top flex-row">
								<div class="top-left flex-row">
									<div class="avatar">
										<img :src="avatarLayer" alt="">
									</div>
									<h4>{{nicknameLayer}}</h4>
								</div>
								<div class="top-right flex-row">
									<img src="../../static/images/transaction_03.png" alt="" v-show="showBankETH">
									<img src="../../static/images/transaction_04.png" alt="" v-show="showAlipaykETH">
									<img src="../../static/images/transaction_05.png" alt="" v-show="showWechatETH">
								</div>
							</div>
							<div class="layer-top-bottom flex-row">
								<h3>单价&nbsp;{{priceLayer|numFilter}}&nbsp;CNY</h3>
								<h4>剩余数量:&nbsp;{{numLayer|numFilter}}</h4>
							</div>
						</div>
					</div>
					<div class="confirm-layer-child flex-col">
						<div class="layer-center flex-col">
							<div class="input-list flex-row">
								<input v-model="layerNum" type="number" value="" placeholder="输入购买数量"/>
								<h3>{{coins}}</h3>
							</div>
							<div class="input-list flex-row">
								<input v-model="layerMoney" readonly="readonly" type="number" value="" placeholder="0.00"/>
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
		</transition>
		<transition name="slide-fade">
			<!-- 出售确认弹层 -->
			<div class="confirm-layer-father flex-col" v-show="showLayer2">
				<div class="confirm-layer flex-col">
					<div class="layer-top flex-col">
						<div class="confirm-layer-child flex-col">
							<div class="layer-top-top flex-row">
								<div class="top-left flex-row">
									<div class="avatar">
										<img :src="avatarLayer2" alt="">
									</div>
									<h4>{{nicknameLayer2}}</h4>
								</div>
								<div class="top-right flex-row">
									<img src="../../static/images/transaction_03.png" alt="" v-show="showBankETH2">
									<img src="../../static/images/transaction_04.png" alt="" v-show="showAlipaykETH2">
									<img src="../../static/images/transaction_05.png" alt="" v-show="showWechatETH2">
								</div>
							</div>
							<div class="layer-top-bottom flex-row">
								<h3>单价&nbsp;{{priceLayer2|numFilter}}&nbsp;CNY</h3>
								<h4>剩余数量:&nbsp;{{numLayer2|numFilter}}</h4>
							</div>
						</div>
					</div>
					<div class="confirm-layer-child flex-col">
						<div class="layer-center flex-col">
							<div class="input-list flex-row">
								<input v-model="layerNum2" type="number" value="" placeholder="输入出售数量"/>
								<h3>{{coins2}}</h3>
							</div>
							<div class="input-list flex-row">
								<input v-model="layerMoney2" readonly="readonly" type="number" value="" placeholder="0.00"/>
								<h3>CNY</h3>
							</div>
							<div class="input-list flex-row">
								<input v-model="layerPassword" type="password" value="" placeholder="请输入交易密码"/>
							</div>
						</div>
						<div class="layer-bottom flex-row">
							<div class="btn-layer btn-layer-left flex-col" @click="cancelClick2()">
								取消
							</div>
							<div class="btn-layer btn-layer-right flex-col" @click="confirmClick2()">
								确认
							</div>
						</div>
					</div>
				</div>
			</div>
		</transition>
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
						isActive: true,
						coin: "eth"
					},
					{  
						name: "SDT",  
						isActive: false,
						coin: "sdt"
					},
					{  
						name: "USDT",  
						isActive: false,
						coin: "usdt"
					},
					{  
						name: "BTC",  
						isActive: false,
						coin: "btc"
					},
					{  
						name: "EOS",  
						isActive: false,
						coin: "eos"
					}
				],  
				active: false,
				tabsName2:[
					{
						name: "ETH",  
						isActive: true,
						coin: "eth"
					},
					{
						name: "SDT",  
						isActive: false,
						coin: "sdt"
					},
					{
						name: "USDT",  
						isActive: false,
						coin: "usdt"
					}
				],
				active2: false,
				showLayer: false,
				showLayer2: false,
				layerNum: "",
				layerNum2: "",
				lists : [],
				items : [],
				avatarLayer : "",
				avatarLayer2 : "",
				nicknameLayer : "",
				nicknameLayer2 : "",
				priceLayer : "",
				priceLayer2 : "",
				numLayer : "",
				numLayer2 : "",
				showBankETH : false,
				showBankETH2 : false,
				showAlipaykETH : false,
				showAlipaykETH2 : false,
				showWechatETH : false,
				showWechatETH2 : false,
				coins : "",
				coins2 : "",
				layerPassword : ""
            }
        },
        // 创建之前
  		beforeCreate: function () {
  			
  		},
  		//创建之后
  		created: function (){
  			this.getPayETH();
			this.getSellETH();
  		},
  		//挂载之前
  		beforeMount: function (){
  			
  		},
		//注册组件
		components : {
			footerBar
		},
		computed: {
			layerMoney() {
				return this.layerNum * this.priceLayer; 
			},
			layerMoney2() {
				return this.layerNum2 * this.priceLayer2;
			}
		},
		filters: {
		/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
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
			tabsSwitch: function(tab,tabIndex) {
					let tabCardCollection = document.querySelectorAll(".tab-card"),  
						len = tabCardCollection.length;  
							for(var i = 0; i < len; i++) {  
								tabCardCollection[i].style.display = "none";  
							this.tabsName[i].isActive = false;  
						}  
					this.tabsName[tabIndex].isActive = true;  
					tabCardCollection[tabIndex].style.display = "block";
					let that = this;
					this.axios.post('/index/suda_order_buy/ad_list',{
						page : '1',
						type : '2',
						coin : tab.coin
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.lists = data.data;
						} else{
							this.layers(data.message);
						}
					})
			},
			tabsSwitch2: function(tab2,tabIndex2) {  
					let tabCardCollection2 = document.querySelectorAll(".tab-card2"),  
						len = tabCardCollection2.length;  
							for(var i = 0; i < len; i++) {  
								tabCardCollection2[i].style.display = "none";  
							this.tabsName2[i].isActive = false;  
						}  
					this.tabsName2[tabIndex2].isActive = true;  
					tabCardCollection2[tabIndex2].style.display = "block";
					  let that = this;
					  this.axios.post('/index/suda_order_buy/ad_list',{
					  	page : '1',
					  	type : '1',
					  	coin : tab2.coin
					  })
					  .then(({data}) => {
					  	if (data.status == 200) {
					  		this.items = data.data;
					  	} else{
					  		this.layers(data.message);
					  	}
					  })
			},
			/* 购买分页的购买 */
			buyClick (list){
				this.showLayer = true;
				this.avatarLayer = list.avatar;
				this.nicknameLayer = list.nickname;
				this.priceLayer = list.price;
				this.numLayer = list.num;
				this.coins = list.coin;
				this.adid = list.id;
				console.log(this.adid)
				if (list.bank == 1) {
					this.showBankETH = true
				} else{
					return false;
				};
				if (list.alipay == 1) {
					this.showAlipaykETH = true
				} else{
					return false;
				};
				if (list.wechat == 1) {
					this.showWechatETH = true
				} else{
					return false;
				}
			},
			/* 出售分页的出售 */
			sellClick (item){
				console.log(item);
				this.showLayer2 = true;
				this.avatarLayer2 = item.avatar;
				this.nicknameLayer2 = item.nickname;
				this.priceLayer2 = item.price;
				this.numLayer2 = item.num;
				this.coins2 = item.coin;
				this.adid2 = item.id;
				console.log(this.adid2)
				if (item.bank == 1) {
					this.showBankETH2 = true
				} else{
					return false;
				};
				if (item.alipay == 1) {
					this.showAlipaykETH2 = true
				} else{
					return false;
				};
				if (item.wechat == 1) {
					this.showWechatETH2 = true
				} else{
					return false;
				}
				
			},
			/* 购买页的取消和确认 */
			cancelClick (){
				this.showLayer = false;
			},
			confirmClick (){
				if (!this.layerNum) {
					this.layers("请输入出售数量!")
				} else{
					this.axios.post('/index/suda_order_sell/buy',{
						num : this.layerNum,
						adid : this.adid
					})
					.then(({data}) => {
						if (data.status == 200) {
							this.layers(data.message);
							setTimeout(() => {
								this.showLayer = false;
							}, 1000)
							this.layerNum = "";
							this.layerMoney = "";
						} else{
							this.layers(data.message);
						}
					})
				}
			},
			/* 出售页的取消和确认 */
			cancelClick2 (){
				console.log("点击了取消!");
				this.showLayer2 = false;
			},
			confirmClick2 (){
				console.log("点击了确认!");
				if (!this.layerNum2) {
					this.layers("请输入出售数量!")
				} else if(!this.layerPassword){
					this.layers("请输入交易密码!")
				} else{
					this.axios.post('/index/suda_order_sell/sell',{
						num : this.layerNum2,
						adid : this.adid2,
						password : this.layerPassword
					})
					.then(({data}) => {
						if (data.status == 200) {
							this.layers(data.message);
							setTimeout(() => {
								this.showLayer2 = false;
							}, 1000)
							this.layerNum2 = "";
							this.layerMoney2 = "";
						} else{
							this.layers(data.message);
						}
					})
				}
			},
			// 获取购买列表
			getPayETH (){
				this.axios.post('/index/suda_order_buy/ad_list',{
					page : '1',
					type : '2',
					coin : 'eth'
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			// 获取出售列表
			getSellETH (){
				this.axios.post('/index/suda_order_buy/ad_list',{
					page : '1',
					type : '1',
					coin : 'eth'
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.items = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			/* 购买列表撤销订单 */
			withdrawal (list){
				console.log(list);
				this.axios.post('/index/suda_order_buy/revoke',{
					id : list.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						this.getPayETH();
					} else{
						this.layers(data.message);
					}
				})
			},
			/* 出售列表撤销订单 */
			withdrawals (item){
				console.log(item);
				this.axios.post('/index/suda_order_buy/revoke',{
					id : item.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						this.getSellETH();
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped="scoped">
	/* 过渡动画 */
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active for below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
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
		overflow: hidden;
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
	.avatar{
		width: 0.6rem;
		height: 0.6rem;
		border-radius: 50%;
		margin: 0 0.16rem 0 0.3rem;
		background-image: url(../../static/images/userCenter_01.png);
		background-size: 100% 100%;
	}
	.avatar img{
		border-radius: 50%;
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
	.list-bottom-bottom .bottom-left{
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
	.layer-top-top .top-left .avatar{
		width: 0.6rem;
		height: 0.6rem;
		margin-right: 0.2rem;
		margin-left: 0;
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
	.layer-center .input-list:last-child{
		margin-bottom: 0;
	}
	.input-list{
		width: 100%;
		height: 0.94rem;
		border: 0.02rem solid #9095a0;
		border-radius: 0.1rem;
		justify-content: space-between;
		margin-bottom: 0.5rem;
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
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>
