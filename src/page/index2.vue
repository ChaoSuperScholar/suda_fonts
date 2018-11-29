<template>
	<div class="index">
		<div class="header flex-col">
			<div class="top-title flex-row">
				<img @click="return_page" src="../../static/images/return.png"/>
				<h3>購買廣告位</h3>
				<h4></h4>
			</div>
			<div class="line-gradual-change"></div>
			<div class="bottom-tab flex-row">
				<router-link to="orderCenter">
					<h4 class="tabLeft">訂單中心</h4>
				</router-link>
				<router-link to="myAdverts">
					<h4 class="tabRight">我的廣告</h4>
				</router-link>
			</div>
		</div>
		<!--可用广告金钱展示模块-->
		<div class="tab-money flex-row">
			<div class="tab-money-child flex-col">
				<h4>可用廣告租金</h4>
				<h4>{{advertisement_money}}</h4>
				<div class="btn-father flex-row">
					<router-link to="transformation">
						<div class="btn btn-blue flex-col">
							轉換
						</div>
					</router-link>
					<router-link to="transformation2">
						<div class="btn btn-write flex-col">
							記錄
						</div>
					</router-link>
				</div>
			</div>
			<div class="division-line"></div>
			<div class="tab-money-child flex-col">
				<h4>可用廣告管理費</h4>
				<h4>{{advertisement_admin_money}}</h4>
				<div class="btn-father flex-row">
					<router-link to="exchange">
						<div class="btn btn-blue flex-col">
							兌換
						</div>
					</router-link>
					<router-link to="exchange2">
						<div class="btn btn-write flex-col">
							記錄
						</div>
					</router-link>
				</div>
			</div>
		</div>
		<!--广告位模块-->
		<div class="advertising-position flex-row">
			<div class="advertising-left flex-col">
				<img src="../../static/images/index_01.png"/>
				<div class="bottom-text flex-row">
					<h4>金額：</h4>
					<h4>200</h4>
				</div>
				<div class="bottom-text text-black flex-row">
					<h4>數量：</h4>
					<h4>1</h4>
				</div>
				<div @click="purchaseLeft" class="advertising-btn flex-col">
					購買
				</div>
			</div>
			<div class="advertising-right flex-col">
				<img src="../../static/images/index_01.png"/>
				<div class="bottom-text flex-row">
					<h4>金額：</h4>
					<h4>{{moneyShow}}</h4>
				</div>
				<div class="bottom-text text-black flex-row">
					<h4>數量：</h4>
					<div class="num-father flex-row">
						<img @click="addnum" src="../../static/images/index_02.png"/>
						<h4>{{moneyNum}}</h4>
						<img @click="reducenum" src="../../static/images/index_03.png"/>
					</div>
				</div>
				<div @click="purchaseRight" class="advertising-btn flex-col">
					購買
				</div>
			</div>
		</div>
		<!--底部竞拍模块-->
		<div class="bidders flex-row">
			<div class="bidders-left flex-col">
				<div class="bidders-ranking flex-row">
					<h3>競拍排名</h3>
					<h4>週一開始競拍</h4>
				</div>
				<div class="bidders-title flex-row">
					<h4>排名(前八名)</h4>
					<h4>數量</h4>
				</div>
				<div class="ranking-number flex-row" v-for="(num,index) in list">
					<div class="ranking-number-left flex-row" v-if="index == 0">
						<img src="../../static/images/index_04.png"/>
						<h5>{{num.phone}}</h5>
					</div>
					<div class="ranking-number-left flex-row" v-else-if="index == 1">
						<img src="../../static/images/index_05.png"/>
						<h5>{{num.phone}}</h5>
					</div>
					<div class="ranking-number-left flex-row" v-else-if="index == 2">
						<img src="../../static/images/index_06.png"/>
						<h5>{{num.phone}}</h5>
					</div>
					<div class="ranking-number-left flex-row" v-else>
						<h5>{{num.ranking}}</h5>
						<h5>{{num.phone}}</h5>
					</div>
					<!--<h5 class="flex-row" v-if="index == 0"><span><img src="../../static/images/index_04.png"/></span>{{num.phone}}</h5>
					<h5 v-else-if="index == 1"><span><img src="../../static/images/index_05.png"/></span>{{num.phone}}</h5>
					<h5 v-else-if="index == 2"><span><img src="../../static/images/index_06.png"/></span>{{num.phone}}</h5>
					<h5 v-else><span>{{num.ranking}}</span>{{num.phone}}</h5>-->
					<h5>{{num.num}}</h5>
				</div>
				<!--没有数据-->
				<div class="no-data flex-row" v-if="!list.length">
					暫無數據
				</div>
			</div>
			<div class="bidders-right flex-col">
				<div class="bidders-btn bidders-btn-write flex-row">
					<h4>可用廣告牌</h4>
					<h4>{{advertisement_card}}</h4>
				</div>
				<div class="bidders-btn bidders-btn-write flex-row">
					<h4>競拍數：</h4>
					<input class="" type="number" id="" value="" placeholder="輸入數量" v-model="billboardNum"/>
				</div>
				<div class="bidders-btn bidders-btn-blue flex-col" @click="getBillboardNum">
					確認
				</div>
				<router-link to="myAdverts">
					<div class="bidders-btn bidders-btn-write flex-col">
						查看記錄
					</div>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
 	export default{
        name: 'index',
        data(){
            return {
            	indexTitle : "購買廣告位", //向子组件中传入title数据
            	indexTabLeft : "訂單中心",
            	indexTabRight : "我的廣告",
            	moneyNum : "1",
            	billboard : "",
            	billboardNum : "",
            	list : [],
            	advertisement_admin_money : "",
            	advertisement_money : "",
            	advertisement_card : "",
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
  		components : {  //注册组件
        	headerBar
    	},
    	computed : {   //计算属性
	        moneyShow(){
	            return this.moneyNum * 200;
	        }
	    },
  		//实例方法
  		methods: {
  			return_page (){
				/*this.$router.go(-1);*/
				top.location.href = "http://app.popc-token.net/#/index";
			},
  			/*减少数量*/
  			addnum (){
  				if (this.moneyNum == 1) {
  					return this.moneyNum;
  				} else{
  					this.moneyNum --;
  				}
  			},
  			/*点击购买左边的*/
  			purchaseLeft (){
  				console.log("点击了左边的购买一个")
  			},
  			/*点击购买自定义数量的*/
  			purchaseRight (){
  				console.log(this.moneyShow)
  			},
  			/*增加数量*/
  			reducenum (){
  				this.moneyNum ++;
  			},
  			/*竞拍数*/
  			getBillboardNum (){
  				/*let billboardNum = document.querySelectorAll(".billboardNum").val;*/
  				let billboards = this.advertisement_card;
  				if (!this.billboardNum) {
  					this.layers("請輸入競拍數！")
  				} else if(!/^\+?[1-9][0-9]*$/.test(this.billboardNum)){
  					this.layers("請輸入正確的競拍數！")
  				}else if(parseFloat(this.billboardNum)> parseFloat(billboards)){
  					this.layers("可用廣告牌不足！")
  				}else{
  					console.log(this.billboardNum);
					let that = this;
					this.axios.post('http://api.popc-token.net/index/Advertisement_Card/auction',
						{
							num: this.billboardNum
						})
						.then((data) => {
							if (data.status === 200) {
								console.log(data);
								this.layers(data.data.msg);
								this.billboardNum = "";
							} else {
									this.layers("請求失敗");
							}
						})
						.catch(function (error) {
							setTimeout(() => {
									console.log(error.message);
									that.layers(error.message);
								},4000)
						});
  				}
  			},
  			/*请求接口数据*/
  			getMsg(){
  				let that = this;
		        this.axios.get('http://api.popc-token.net/index/Help/index')
		            .then(({data}) => {
		            	if (data.status === 200) {
		            		console.log(data);
				            this.list = data.data.compete_lists;
				            this.advertisement_admin_money = data.data.advertisement_admin_money;
				            this.advertisement_money = data.data.advertisement_money;
				            this.advertisement_card = data.data.advertisement_card;
				        } else {
				            this.layers("請求失敗");
				        }
		            })
		            .catch(function (error) {
			            setTimeout(() => {
		                	console.log(error.message);
		                	that.layers(error.message);
		                },4000)
		            });
		    }  		}
    }
</script>

<style scoped>
	.header{
		width: 100%;
		height: auto;
		background: linear-gradient(to right,#4082cd,#552aa8);
	}
	.top-title{
		width: 100%;
		height: 0.9rem;
		padding-right: 0.3rem;
		justify-content: space-between;
	}
	.top-title img{
		width: 0.34rem;
		height: 0.26rem;
		margin-left: 0.3rem;
	}
	.top-title h3{
		font-size: 0.32rem;
		color: #fefefe;
	}
	.line-gradual-change{
		width: 6.4rem;
		height: 0.03rem;
		background:linear-gradient(to left,#4a88d0,#8ba4de,#4a88d0);
	}
	.bottom-tab{
		width: 100%;
		height: 0.9rem;
		justify-content: space-between;
	}
	.bottom-tab a{
		width: 50%;
	}
	.bottom-tab h4{
		font-size: 0.28rem;
		color: #d4d6ff;
		width: 100%;
		text-align: center;
	}
	.tab-money{
		width: 100%;
		height: auto;
		box-shadow: 0 0 0.08rem 0 rgba(7, 7, 7, 0.32);
	}
	.division-line{
		width: 0.04rem;
		height: 1.52rem;
		background-color: #ccd0d9;
	}
	.tab-money-child{
		width: 50%;
		height: 100%;
		justify-content: space-between;
	}
	.tab-money-child h4{
		font-size: 0.28rem;
		color: #4b4b4b;
	}
	.tab-money-child h4:first-child{
		margin-top: 0.3rem;
	}
	.tab-money-child h4:last-child{
		margin: 0.2rem 0;
	}
	.btn-father{
		width: 3rem;
		margin-bottom: 0.2rem;
		justify-content: space-between;
	}
	.btn{
		width: 1.3rem;
		height: 0.6rem;
		font-size: 0.28rem;
		border-radius: 0.04rem;
		border: 0.04rem solid #2f5cb7;
	}
	.btn-blue{
		background-color: #2F5CB7;
		color: #FFFFFF;
	}
	.btn-write{
		background-color: #FFFFFF;
		color: #2f5cb7;
	}
	.advertising-position{
		width: 7rem;
		height: auto;
		margin-top: 0.3rem;
		justify-content: space-between;
	}
	.advertising-position img{
		width: 3.3rem;
		height: 3.3rem;
	}
	.bottom-text{
		width: 100%;
		margin-top: 0.1rem;
		justify-content: space-between;
	}
	.bottom-text h4{
		font-size: 0.28rem;
		color: #eb4646;
	}
	.text-black{
		height: 0.64rem;
		margin: 0.15rem 0;
	}
	.text-black h4{
		color: #262626;
	}
	.advertising-btn{
		width: 3.26rem;
		height: 0.7rem;
		background-color: #ffb72b;
		border-radius: 0.06rem;
		box-shadow: 0.03rem 0.03rem 0.06rem 0 #a4580f;
		font-size: 0.28rem;
		color: #ffedd5;
	}
	.num-father{
		width: 2rem;
		height: 0.64rem;
		border: 0.01rem solid #565656;
		border-radius: 0.02rem;
		justify-content: space-between;
		padding: 0 0.1rem;
	}
	.num-father img:first-child{
		width: 0.32rem;
		height: 0.04rem;
	}
	.num-father img:last-child{
		width: 0.3rem;
		height: 0.3rem;
	}
	.bidders{
		width: 7rem;
		height: auto;
		margin-top: 0.3rem;
		align-items: flex-start;
		justify-content: space-between;
	}
	.bidders-left{
		width: 3.56rem;
		height: auto;
	}
	.bidders-ranking{
		width: 100%;
		height: 0.8rem;
		border-bottom: 0.04rem solid #c1c6d0;
		justify-content: space-between;
	}
	.bidders-ranking h3{
		font-size: 0.3rem;
		font-weight: 600;
		color: #3f5bc5;
	}
	.bidders-ranking h4{
		font-size: 0.26rem;
		color: #ee6641;
	}
	.bidders-title{
		width: 100%;
		height: auto;
		margin: 0.1rem 0;
		justify-content: space-between;
	}
	.bidders-title h4{
		font-size: 0.26rem;
		color: #585858;
	}
	.ranking-number{
		width: 100%;
		margin: 0.04rem 0;
		justify-content: space-between;
	}
	.ranking-number img{
		width: 0.4rem;
		height: 0.4rem;
		margin-right: 0.2rem;
	}
	.ranking-number h5:first-child{
		width: 0.4rem;
		height: 0.4rem;
		text-align: center;
		font-size: 0.26rem;
		font-weight: 600;
		color: #2f49b7;
		margin-right: 0.2rem;
	}
	.ranking-number h5{
		font-size: 0.24rem;
		color: #313131;
	}
	.bidders-right{
		width: 3.1rem;
		height: auto;
		margin-top: 0.8rem;
	}
	.bidders-btn{
		width: 3.1rem;
		height: 0.8rem;
		box-shadow: 0 0 0.06rem #cecece;
		margin-bottom: 0.26rem;
	}
	.bidders-btn-write{
		justify-content: space-between;
	}
	.bidders-btn-write h4{
		font-size: 0.26rem;
		color: #292929;
		margin: 0 0.16rem;
	}
	.bidders-btn-write input{
		border: none;
		width: 1.3rem;
		height: 0.3rem;
		text-align: center;
		margin-right: 0.16rem;
	}
	.bidders-btn-blue{
		background-color: #4054cc;
		color: #FFFFFF;
		font-size: 0.28rem;
	}
	.bidders-btn-write:last-child{
		justify-content: center;
		color: #4c70cd;
		font-size: 0.28rem;
	}
	.no-data{
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>