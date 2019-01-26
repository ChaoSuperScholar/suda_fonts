<template>
	<div class="addContact">
    <div style="height: auto;width: 100%">
		<div class="top-module flex-row">
			<img class="img-left" @click="goContacts()" src="../../static/images/return.png"/>
			<h3>添加联系人</h3>
			<h4></h4>
		</div>
		<div class="list flex-row">
			<input type="text" value="" placeholder="联系人备注" v-model="inputNum"/>
		</div>
		<div class="list flex-row">
			<input type="text" value="" placeholder="请输入钱包地址" v-model="remark_address"/>
			<img v-show="false" src="../../static/images/walletTransfer_01_de.png" alt="">
		</div>
		<div class="btn-blue flex-col" @click="btnClick()">
			确认添加
		</div>
    </div>
	</div>
</template>

<script>
	export default{
        name: 'addContact',
        data(){
            return {
            	inputNum : '',
				remark_address : ''
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
  		//实例方法
  		methods: {
  			goContacts (){
  				this.$router.push({
  					path : '/contacts',
  					query : {
  						title : this.$route.query.title,
  						type : this.$route.query.type
  					}
  				})
  			},
			btnClick (){
				this.axios.post('/index/suda_wallet/add_contacts',{
					name : this.inputNum,
					address : this.remark_address
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						setTimeout(() => {
							this.$router.push({
								path : '/contacts',
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
			}
  		}
    }
</script>

<style scoped>
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-weight: 500;
		color: #ffffff;
	}
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.list{
		width: 6.9rem;
		height: auto;
		padding: 0.3rem 0;
		border-bottom: 0.01rem solid #b2b6bf;
		justify-content: space-between;
    margin: 0 auto;
	}
	.list input{
		width: 5rem;
		height: 0.46rem;
		font-size: 0.32rem;
		color: #6a7385;
		border: none;
	}
	.list h4{
		width: 5rem;
		font-size: 0.3rem;
		color: #444a57;
		word-break: break-all;
	}
	.list img{
		width: 0.4rem;
		height: 0.4rem;
	}
	.btn-blue{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.1rem;
		background-color: #4a7cee;
		font-size: 0.34rem;
		color: #FFFFFF;
    margin: .7rem auto;
	}
</style>
