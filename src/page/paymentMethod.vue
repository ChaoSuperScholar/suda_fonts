<template>
	<div class="paymentMethod">
		<headerBar :title="indexTitle"></headerBar>
		<div class="list-father flex-col" v-for="list in lists">
			<div class="list flex-row">
				<div class="list-left flex-row" v-if="list.type == 'bank'">
					<img src="../../static/images/transaction_03.png" alt="">银行卡
				</div>
				<div class="list-left flex-row" v-if="list.type == 'alipay'">
					<img src="../../static/images/transaction_04.png" alt="">支付宝
				</div>
				<div class="list-left flex-row" v-if="list.type == 'weixin'">
					<img src="../../static/images/transaction_05.png" alt="">微信
				</div>
				<div class="checkboxActive flex-col" v-if="list.status == '1'" @click="statusClick(list)">
					<div class="checkCircle"></div>
				</div>
				<div class="checkbox flex-col" v-if="list.status == '2'"  @click="statusClick(list)">
					<div class="checkCircle"></div>
				</div>
			</div>
			<div class="list-bottom flex-col">
				<div class="list-bottom-top flex-row">
					<h4>名称: {{list.name}}</h4>
					<div class="btn-father flex-row">
						<div class="btn btn-blue flex-col" v-show="false">
							编辑
						</div>
						<div class="btn btn-red flex-col" @click="deleteList(list)">
							删除
						</div>
					</div>
				</div>
				<h4>账户: {{list.account}}</h4>
			</div>
		</div>
		<div class="addPaycard flex-col">
			<img src="../../static/images/paymentMethod_01.png" alt="">
			<h5>添加收款方式,交易更迅速流畅</h5>
			<router-link to='addPayment'>
				<div class="btn btn-blue btn-add flex-col">
					立即添加 >
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'paymentMethod',
        data(){
            return {
            	indexTitle : "收款方式",
				lists : []
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
		// 注册组件
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
  			getMsg (){
				this.axios.post('/index/suda_user/bind_list')
				.then(({data}) =>{
					console.log(data);
					if (data.status == 200) {
						console.log(data);
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			deleteList (list){
				this.axios.post('/index/suda_user/del_bind',{
					id : list.id,
					flag : list.flag
				})
				.then(({data}) =>{
					console.log(data);
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
						this.getMsg();
					} else{
						this.layers(data.message);
					}
				})
			},
			statusClick (list){
				if (list.status == 1) {
					this.axios.post('/index/suda_user/edit_status',{
						id : list.id,
						flag : list.flag,
						status : '2'
					})
					.then(({data}) =>{
						console.log(data);
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
							this.getMsg();
						} else{
							this.layers(data.message);
						}
					})
				} else{
					this.axios.post('/index/suda_user/edit_status',{
						id : list.id,
						flag : list.flag,
						status : '1'
					})
					.then(({data}) =>{
						console.log(data);
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
							this.getMsg();
						} else{
							this.layers(data.message);
						}
					})
				}
				
			}
  		}
    }
</script>

<style scoped>
	h4{
		font-size: 0.32rem;
		color: #3a404d;
	}
	h5{
		font-size: 0.3rem;
		color: #687082;
	}
	.list-father{
		width: 6.9rem;
		height: auto;
		padding-bottom: 0.3rem;
		border: 0.01rem solid #d7d8da;
		margin-top: 0.4rem;
		border-radius: 0.1rem;
	}
	.list{
		width: 6.6rem;
		height: auto;
		justify-content: space-between;
		font-size: 0.3rem;
		color: #404040;
		padding: 0.26rem 0;
		border-bottom: 0.01rem solid #d0d4dd;
	}
	.list-left img{
		width: 0.56rem;
		height: 0.56rem;
		margin-right: 0.2rem;
	}
	.checkbox{
		width: 0.8rem;
		height: 0.3rem;
		background-color: #bcbcbc;
		border-radius: 0.15rem;
		position: relative;
	}
	.checkbox .checkCircle{
		width: 0.4rem;
		height: 0.4rem;
		background-color: #dbdbdb;
		border-radius: 50%;
		position: absolute;
		left: 0;
	}
	.checkboxActive{
		width: 0.8rem;
		height: 0.3rem;
		background-color: #a8cbf7;
		border-radius: 0.15rem;
		position: relative;
	}
	.checkboxActive .checkCircle{
		width: 0.4rem;
		height: 0.4rem;
		background-color: #5396ea;
		border-radius: 50%;
		position: absolute;
		right: 0;
	}
	.list-bottom{
		width: 6.6rem;
		height: auto;
		align-items: flex-start;
	}
	.list-bottom-top{
		width: 100%;
		height: auto;
		padding-top: 0.3rem;
		justify-content: space-between;
	}
	.btn{
		width: 1.16rem;
		height: 0.6rem;
		border-radius: 0.1rem;
		font-size: 0.28rem;
		color: #fdfeff;
	}
	.btn-blue{
		background-color: #5c7ff1;
		margin-right: 0.26rem;
	}
	.btn-red{
		background-color: #de5555;
	}
	.addPaycard{
		width: 6.9rem;
		height: auto;
		padding: 0.4rem 0;
		border: 0.01rem solid #aeb4c3;
		border-radius: 0.1rem;
		margin-top: 0.4rem;
	}
	.addPaycard img{
		width: 0.58rem;
		height: 0.52rem;
	}
	.addPaycard h5{
		margin: 0.3rem 0;
	}
	.btn-add{
		width: 1.68rem;
	}
</style>
