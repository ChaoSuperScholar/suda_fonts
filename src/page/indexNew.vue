<template>
	<div class="indexNew">
		<!-- 背景 -->
		<div class="background-img flex-col">
			<img src="../../static/images/index_01.png" alt="">
			<img src="../../static/images/index_02.png" alt="">
			<img src="../../static/images/index_03.png" alt="">
			<img src="../../static/images/index_04.png" alt="">
			<img src="../../static/images/index_05.png" alt="">
		</div>
		<!-- 主体 -->
		<div class="list-father flex-col">
			<div class="list flex-col">
				<input type="tel" value="" placeholder="输入手机号码" maxlength="11" v-model.trim="phone"/>
			</div>
			<div class="list flex-col">
				<input type="password" value="" placeholder="输入账号密码" v-model.trim="password"/>
			</div>
			<div class="list-text flex-row">
				<router-link to="forgetPassword">
					<h4>忘记密码</h4>
				</router-link>
				<router-link to="registered">
					<h4>注册账户></h4>
				</router-link>
			</div>
			<div class="list flex-col" @click="goLogin">
				登录
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'indexNew',
        data(){
            return {
            	phone : "",
				password : ""
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
  			goLogin (){
				if (!this.phone) {
					this.layers("请输入手机号码！")
				} else if(!/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(this.phone)){
					this.layers("请输入正确的手机号码！")
				} else if(!this.password){
					this.layers("请输入账号密码！")
				} else{
					console.log("登录成功！");
					let that = this;
					this.axios.post('/index/suda_login/login',
						{
							phone : this.phone,
							password : this.password
						})
						.then(({data}) => {
							if (data.status === 200) {
								console.log(data);
								this.layers(data.message);
								 setTimeout(() => {
									this.$router.replace({name : 'wallet'})
								},2000)
							} else {
								that.layers(data.message);
							}
						})
						.catch(function (error) {
							setTimeout(() => {
									console.log(error.message);
									/* that.layers(error.message); */
								},4000)
						});
				}
			}
  		}
    }
</script>

<style scoped>
	.background-img,.list-father{
		width: 100vw;
		height: 100vh;
	}
	.list-father{
		position: absolute;
		left: 0;
		top: 0;
		z-index: 10;
		justify-content: flex-start;
	}
	.list-father .list{
		width: 5.8rem;
		height: 1rem;
		border: 0.02rem solid #cdd0da;
		border-radius: 0.1rem;
		background-color: #2f343e;
	}
	.list-father .list:first-child{
		margin: 6rem 0 0.7rem 0;
	}
	.list input{
		width: 4.8rem;
		height: 0.6rem;
		font-size: 0.38rem;
		color: #d9dade;
		background-color: transparent;
		border: none;
	}
	input::-webkit-input-placeholder{
		color: #d9dade;
	}
	.list-text{
		width: 5.8rem;
		height: 0.9rem;
		justify-content: space-between;
	}
	.list-text h4{
		font-size: 0.28rem;
	}
	.list-text h4:first-child{
		color: #f3f4f8;
	}
	.list-text h4:last-child{
		color: #5479de;
	}
	.list-father .list:last-child{
		font-size: 0.34rem;
		color: #f3f4f8;
		margin-top: 0.4rem;
		background-color: #324fa0;
	}
</style>
