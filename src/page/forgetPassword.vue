<template>
	<div class="forgetPassword">
		<headerBar :title="indexTitle"></headerBar>
		<div class="list-father flex-col">
			<!-- 手机号 -->
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img class="phoneimg" src="../../static/images/registered_01.png" alt="">
					<h4>手机号：</h4>
				</div>
				<input v-model="phone" type="tel" value="" maxlength="11" placeholder="输入您的手机号码"/>
			</div>
			<!-- 验证码 -->
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img class="phoneimg" src="../../static/images/registered_02.png" alt="">
					<h4>验证码：</h4>
				</div>
				<input v-model="code" type="text" value="" maxlength="11" placeholder="输入您的验证码"/>
				<div @click="getCode" class="code-btn flex-col">
					获取验证码
				</div>
			</div>
			<!-- 登录密码 -->
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img class="phoneimg" src="../../static/images/registered_01.png" alt="">
					<h4>登录密码：</h4>
				</div>
				<input v-model="loginPassword" type="password" value="" placeholder="输入您的登录密码"/>
			</div>
			<!-- 交易密码 -->
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img class="phoneimg" src="../../static/images/registered_01.png" alt="">
					<h4>重新输入：</h4>
				</div>
				<input v-model="transactionPassword" type="password" value="" placeholder="再次输入登录密码"/>
			</div>
			<div @click="createBtn" class="create-btn flex-col">
				确认
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'forgetPassword',
        data(){
            return {
            	indexTitle : "找回密码",
				phone : "",
				code : "",
				loginPassword : "",
				transactionPassword : "",
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
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
			getCode (){
				console.log("发送获取验证码");
				let that = this;
				this.axios.post('/index/suda_sms/send',{
					phone : this.phone,
					event : "resetpwd"
				})
				.then(({data}) =>{
					console.log(data);
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
					} else{
						this.layers(data.message);
					}
				})
			},
			createBtn (){
				if (!this.phone) {
					this.layers("请输入手机号！");
				} else if(!/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(this.phone)){
					this.layers("请输入正确的手机号！")
				} else if(!this.code){
					this.layers("请输入验证码！");
				}else if(!this.loginPassword){
					this.layers("请输入登录密码！");
				} else if(this.loginPassword != this.transactionPassword){
					this.layers("两次输入的密码不一致！");
				} else{
					/* console.log("创建成功!"); */
					let that = this;
					this.axios.post('/index/suda_password/forget_password',
						{
							phone : this.phone,
							code : this.code,
							new_pwd : this.loginPassword,
							re_pwd : this.transactionPassword
						})
						.then(({data}) => {
							if (data.status === 200) {
								this.layers(data.message);
								setTimeout(() => {
									this.$router.go(-1);
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
					
					
					/* this.layers("创建成功!")
					setTimeout(() => {
						this.$router.go(-1);
					},2000) */
				}
			}
  		}
    }
</script>

<style scoped>
	.list-father{
		width: 7rem;
		height: auto;
	}
	.list{
		width: 100%;
		height: 1rem;
		border-bottom: 0.01rem solid #c0bebe;
		justify-content: flex-start;
	}
	.list-left h4{
		width: 1.6rem;
		font-size: 0.28rem;
		color: #2a2a2a;
		margin-left: 0.2rem;
	}
	.phoneimg{
		width: 0.26rem;
		height: 0.38rem;
	}
	.list input{
		width: 2.7rem;
		height: 0.5rem;
		border: none;
	}
	.code-btn{
		width: 1.6rem;
		height: 0.6rem;
		background-color: #4676e3;
		font-size: 0.28rem;
		color: #ffffff;
		border-radius: 0.1rem;
	}
	.reading-consent{
		width: 100%;
		height: 1.1rem;
		justify-content: flex-start;
	}
	.create-btn{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.2rem;
		background-color: #4a7cee;
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-top: 0.8rem;
	}
</style>
