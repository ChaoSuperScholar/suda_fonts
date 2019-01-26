<template>
	<div class="modifyContact">
    <div style="height: auto;width: 100%">
		<div class="top-module flex-row">
			<img class="img-left" @click="return_page()" src="../../static/images/return.png"/>
			<h3>修改联系人</h3>
			<h4></h4>
		</div>
		<div class="list flex-row">
			<input type="text" value="" placeholder="联系人备注" v-model="inputNum"/>
		</div>
		<div class="list flex-row">
			<h4>{{remark_address}}</h4>
			<img src="../../static/images/walletTransfer_01_de.png" alt="">
		</div>
		<div class="btn-blue flex-col" @click="btnClick()">
			确认修改
		</div>
    </div>
	</div>
</template>

<script>
	export default{
        name: 'modifyContact',
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
  			this.remark_address = this.$route.query.remark_address;
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
  			return_page (){
				this.$router.push({
					path : '/contacts',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type
					}
				})
			},
			btnClick (){
				this.axios.post('/index/suda_wallet/edit_contacts',{
					name : this.inputNum,
					address : this.remark_address,
					id : this.$route.query.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
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
		margin-top: 0.7rem;
	}
</style>
