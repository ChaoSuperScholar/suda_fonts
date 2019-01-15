<template>
	<div class="orderPage">
		<div class="top-module flex-row">
			<img src="../../static/images/transactionRelease_01.png" alt="" @click="return_page()">
			<h3>订单详情</h3>
			<router-link to="transaction">
				<div class="top-right flex-row">
					<img src="../../static/images/order_01.png" alt="">
					<h4>广告</h4>
				</div>
			</router-link>
		</div>
		<div class="line-block"></div>
		<div class="list-father flex-col">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<h3>{{list.title}}</h3>
					<h3 class="h3-blue" v-if ="list.status == 1&&list.uid == list.buyer_uid">待付款</h3>
					<h3 class="h3-blue" v-if="list.status == 1&&list.uid == list.seller_uid">等待付款</h3>
					<h3 class="h3-blue" v-if="list.status == 2&&list.uid == list.buyer_uid">等待放行</h3>
					<h3 class="h3-blue" v-if="list.status == 2&&list.uid == list.seller_uid">待放行</h3>
					<h3 class="h3-blue" v-if="list.status == 3">完成</h3>
					<h3 class="h3-gray" v-if="list.status == -1">撤销</h3>
					<h3 class="h3-red" v-if="list.status == 4">申诉中</h3>
				</div>
				<div class="list-bottom flex-row">
					<h4>金额&nbsp;{{list.total|numFilter}}</h4>
					<h4>购买数量&nbsp;{{list.num|numFilter}}</h4>
				</div>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>付款备注码</h4>
				<h4>{{list.remark}}</h4>
			</div>
		</div>
		<div class="line-block"></div>
		<!-- 中间的循环数据 -->
		<div class="list-father flex-col" v-if="list.bank != ''">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<div class="list-top-left flex-row">
						<img src="../../static/images/transaction_03.png" alt="">
						<h4>银行卡</h4>
					</div>
          <h4>卡号:&nbsp;{{list.bank.account}}</h4>
				</div>
				<div class="list-bottom flex-row">
					<h4>姓名:&nbsp;{{list.bank.name}}</h4>
					<h4>开户行:&nbsp;{{list.bank.bank}}</h4>
				</div>
			</div>
		</div>
		<div class="list-father flex-col" v-if="list.alipay != ''">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<div class="list-top-left flex-row">
						<img src="../../static/images/transaction_04.png" alt="">
						<h4>支付宝</h4>
					</div>
					<img class="code" @click="Zshow=!Zshow" :src="list.alipay.code" alt="">
          <div class="tan flex-col " v-show="Zshow" @click="Zshow=!Zshow">
            <img class="code " :src="list.alipay.code" alt="">
          </div>
				</div>
				<div class="list-bottom flex-row">
					<h4>姓名:&nbsp;{{list.alipay.name}}</h4>
					<h4>账户:&nbsp;{{list.alipay.account}}</h4>
				</div>
			</div>
		</div>
		<div class="list-father flex-col" v-if="list.wechat != ''">
			<div class="list flex-col">
				<div class="list-top flex-row">
					<div class="list-top-left flex-row">
						<img src="../../static/images/transaction_05.png" alt="">
						<h4>微信</h4>
					</div>
					<img class="code" @click="Wshow=!Wshow" :src="list.wechat.code" alt="">
          <div class="tan flex-col " v-show="Wshow" @click="Wshow=!Wshow">
            <img class="code " :src="list.wechat.code" alt="">
          </div>
				</div>
				<div class="list-bottom flex-row">
					<h4>姓名:&nbsp;{{list.wechat.name}}</h4>
					<h4>账户:&nbsp;{{list.wechat.account}}</h4>
				</div>
			</div>
		</div>
		<!-- 中间的循环数据 end -->
		<div class="line-block"></div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>单价</h4>
				<h4>{{list.price}} CNY/ETH</h4>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>订单时间</h4>
				<h4>{{list.created_at}}</h4>
			</div>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h4>订单编号</h4>
				<h4>{{list.order_sn}}</h4>
			</div>
		</div>
		<div class="line-block"></div>
		<div class="alert-text-father flex-col">
			<div class="alert-text flex-col">
				<h4>交易提醒</h4>
				<p>1.您所出售的数字资产，已交由平台托管冻结。请确定收到对方付款后点击“确认放行”支付数字资产！</p>
				<p>2.请不要相信任何催促放币的理由，确认收到款项后再释放数字资产，避免造成损失。</p>
				<p>3.在收到短信后，请务必登录网上银行或手机银行确认款项是否入账，避免因收到诈骗短信错误释放数字资产！</p>
			</div>
		</div>
		<div class="bottom-btn flex-row">
			<div class="btn-left flex-col" @click="noData()">
				<img src="../../static/images/orderPage_01.png" alt="">
			</div>
			<div class="btn-center btn flex-col" v-if="list.status == 1&&list.uid == list.buyer_uid" @click="payMoney(list)">
				确认付款
			</div>
		<!--	<div class="btn-center btn flex-col" v-if="C" @click="noData()">
				申述中
			</div>-->
			<!-- 申述跳转 -->
			<div class="btn-center btn flex-col" v-if="status==2" @click="appeal()">
				发起申述
			</div>
			<div class="btn-right btn flex-col" v-if="list.status == 1&&list.type == 1" @click="cancelBtn(list)">
				取消订单
			</div>
			<div class="btn-right btn flex-col" v-if="list.status == 1&&list.type == 2" @click="cancelBtn(list)">
				取消订单
			</div>
			<div class="btn-right btn-gray btn flex-col" v-if="list.status == 2&&list.uid == list.buyer_uid">
				我已付款
			</div>
			<div class="btn-right btn flex-col" v-if="list.status == 2&&list.uid == list.seller_uid" @click="confirmRelease
(list)">
				确认放行
			</div>
			<div class="btn-right btn-gray btn flex-col" v-if="list.status == 3">
				完成
			</div>
			<div class="btn-right btn-gray btn flex-col" v-if="list.status == -1">
				撤销
			</div>
			<div class="btn-right btn flex-col" v-if="list.status == 4">
				申述中
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'orderPage',
        data(){
            return {
            	list : [],
              status:'',
              Wshow:false,
              Zshow:false
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
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			return_page (){
				this.$router.go(-1);
			},
			getMsg (){
				this.axios.post('/index/suda_order_buy/order_info',{
					id : this.$route.query.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.list = data.data;
						this.status=data.data.status;
					} else{
						this.layers(data.message);
					}
				})
			},
			payMoney (list){
				this.axios.post('/index/suda_order_sell/confirmPayment',{
					oid : this.$route.query.id,
					adid : list.adid
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
						setTimeout(() => {
							this.$router.replace('order');
						},1500)
					} else{
						this.layers(data.message);
					}
				})
			},
			cancelBtn (list){
				this.axios.post('/index/suda_order_buy/revoke_order',{
					id : this.$route.query.id,
					adid : list.adid
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
						setTimeout(() => {
							this.$router.replace('order');
						},1500)
					} else{
						this.layers(data.message);
					}
				})
			},
			confirmRelease (list){
				this.axios.post('/index/suda_order_buy/receive_ad',{
					oid : this.$route.query.id,
					adid : list.adid
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
						setTimeout(() => {
							this.$router.replace('order');
						},1500)
					} else{
						this.layers(data.message);
					}
				})
			},
			noData (){
				this.$router.push({
				    path:'news',
            query:{
              id:this.$route.query.id,
            }
        })
			},
			//点击 发起申诉 按钮操作
			appeal () {
				let that = this;
				let orderId = that.$route.query.id;
				this.$router.push('appeal')
				this.$router.push({
					path: 'appeal',
					query: {
						orderId: orderId
					}
				})
			}
  		}
    }
</script>

<style scoped>
	.orderPage{
		min-height: 100vh;
		background-color: #e8eaee;
		justify-content: flex-start!important;
		margin-bottom: 1rem;
	}
	h3{
		font-size: 0.32rem;
		color: #FFFFFF;
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
	.top-module img{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.top-module h3{
		margin-left: 1rem;
	}
	.top-right{
		margin-right: 0.3rem;
	}
	.top-right img{
		width: 0.3rem;
		height: 0.3rem;
		margin-right: 0.2rem;
	}
	.top-right h4{
		color: #FFFFFF;
	}
	.list-father{
		width: 100%;
		height: auto;
		background-color: #ffffff;
		border-bottom: 0.01rem solid #dadee6;
	}
  .list-father .tan{
    position: fixed;
    width: 100%;
    height: 100%;
    top:0;
    left: 0;
    background: rgba(0,0,0,0.6);
    z-index: 9999;
  }
  .list-father .tan img{
    height: auto;
    width: 3.5rem;
  }
	.list{
		width: 6.9rem;
		height: auto;
		padding: 0.3rem 0;
		justify-content: space-between;
	}
	.list-top,.list-bottom{
		width: 100%;
		height: auto;
		justify-content: space-between;
	}
	.list-top img{
		width: 0.46rem;
		height: 0.46rem;
	}
	.list-bottom{
		margin-top: 0.3rem;
	}
	.list h3{
		font-size: 0.34rem;
		font-weight: 600;
	}
	.list h3:first-child{
		color: #393d47;
	}
	.h3-blue{
		color: #4172dc;
	}
	.h3-gray{
		color: #535d72;
	}
	.h3-red{
		color: #e94949;
	}
	.list h4{
		font-size: 0.32rem;
		color: #393d47;
	}
	.line-block{
		width: 100%;
		height: 0.16rem;
	}
	.list-top-left img{
		width: 0.46rem;
		height: 0.46rem;
		margin-right: 0.2rem;
	}
	.alert-text-father{
		width: 100%;
		height: auto;
		background-color: #FFFFFF;
	}
	.alert-text{
		width: 6.9rem;
		height: auto;
		align-items: flex-start;
		padding: 0.3rem 0;
	}
	.alert-text p{
		font-size: 0.28rem;
		color: #696c74;
	}
	.bottom-btn{
		width: 100%;
		height: 1rem;
		background-color: #f4f5fa;
		position: fixed;
		left: 0;
		bottom: 0;
	}
	.btn-left{
		width: auto;
		height: 100%;
		flex: auto;
	}
	.btn-left img{
		width: 0.49rem;
		height: 0.45rem;
	}
	.btn{
		width: 2.8rem;
		height: 100%;
		font-size: 0.32rem;
	}
	.btn-center{
		background-color: #d1d5e9;
		color: #525c7b;
	}
	.btn-right{
		background-color: #5174e7;
		color: #FFFFFF;
	}
	.btn-gray{
		background-color: #e3e5eb;
	}
</style>
