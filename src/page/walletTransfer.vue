<template>
	<div class="walletTransfer">
		<div class="top-module flex-row">
			<img class="img-left" @click="return_page()" src="../../static/images/return.png"/>
			<h3>{{title}}转账</h3>
			<img @click="goScan()" class="img-right"  src="../../static/images/walletTransfer_01.png" alt="" >
			<!--<h4></h4>-->
		</div>
		<div class="list flex-row">
			<!-- <h4>{{address}}</h4> -->
			<input type="text" value="" placeholder="请输入钱包地址" v-model="address"/>
			<img src="../../static/images/walletTransfer_02.png" alt="" @click="goContacts()">
		</div>
		<div class="list flex-row">
			<input type="number" placeholder="输入转账金额" v-model="inputNumber">
			<h4>≈￥{{showInputNum}}</h4>
		</div>
		<div class="list flex-row">
			<input type="password" placeholder="输入交易密码" v-model="passWord">
		</div>
		<div class="btn-blue flex-col" @click="btnClick()">
			确认转账
		</div>
	</div>
</template>

<script>

  let scan = null;
  //点手机虚拟返回键
  document.addEventListener("plusready", function() {
    // 注册返回按键事件
    plus.key.addEventListener('backbutton', function() {
      // 事件处理
      scan.close();//关闭条码识别控件
      window.history.back();
    }, false);
  });


	export default{
        name: 'walletTransfer',
        data(){
            return {
            	title : "",
				address : "",
				inputNumber : "",
				passWord : "",
				proportion : ""
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
			this.getMsg();
			this.address = this.$route.query.address;
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){
  				this.title = this.$route.query.title;
  			})
  		},
		computed: {
			showInputNum (){
				return this.inputNumber * this.proportion;
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
  		//实例方法
  		methods: {
  			return_page (){
				/* this.$router.replace('walletDetails'); */
				this.$router.push({
					path : '/walletDetails',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type
					}
				})
			},
			btnClick (){
				/* if (this.address = "请选择联系人信息") {
					this.layers("请选择联系人信息");
				} else if(!this.inputNumber){
					this.layers("请输入转账金额");
				} else if(!this.passWord){
					this.layers("请输入交易密码");
				} else { */
					this.axios.post('/index/suda_wallet/sdt_to_user',{
						address : this.address,
						num : this.inputNumber,
						type : this.$route.query.type,
						pay_password : this.passWord
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
							setTimeout(() => {
								this.$router.push({
									path : '/walletDetails',
									query : {
										title : this.$route.query.title,
										type : this.$route.query.type
									}
								})
							},1500)
						} else{
							this.layers(data.message);
						}
					})
				/* } */
			},
			getMsg (){
				this.axios.post('/index/suda_wallet/get_price',{
					type : this.$route.query.type
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.proportion = data.data;
					} else{
						this.layers(data.message);
						console.log(data.message);
					}
				})
			},
			goContacts (){
				this.$router.push({
					path : '/contacts',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type
					}
				})
			},
        goScan:function () {
          this.$router.push({
            path : '/scan'
          })
        }
  		}
    }
</script>

<style scoped>
	h4{
		font-size: 0.32rem;
		color: #6a7385;
		max-width: 5rem;
		word-break: break-all;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-weight: 500;
		/* margin-left: 0.6rem; */
		color: #ffffff;
	}
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.img-right{
		width: 0.34rem;
		height: 0.34rem;
		margin-right: 0.3rem;
	}
	.list{
		width: 6.9rem;
		height: auto;
		padding: 0.3rem 0;
		border-bottom: 0.01rem solid #b2b6bf;
		justify-content: space-between;
	}
	.list img{
		width: 0.42rem;
		height: 0.42rem;
	}
	.list input{
		width: 4rem;
		height: 0.46rem;
		font-size: 0.34rem;
		color: #6a7385;
		border: none;
	}
	.btn-blue{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.1rem;
		background-color: #4a7cee;
		font-size: 0.34rem;
		color: #FFFFFF;
		margin-top: 0.7rem;
	}
</style>
