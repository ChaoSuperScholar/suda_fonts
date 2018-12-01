<template>
	<div class="registered">
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
					<h4>交易密码：</h4>
				</div>
				<input v-model="transactionPassword" type="password" value="" placeholder="用于交易与转账"/>
			</div>
			<div class="agree-clause flex-row">
				<div class="agree-check" @click="agreeBtn" :class="[isShow?'agreeCheck':'']"></div>
				<h4>我已仔细阅读并同意</h4>
				<h5>《服务与隐私条款》</h5>
			</div>
			<div @click="createBtn" class="create-btn flex-col">
				创建钱包
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'registered',
        data(){
            return {
            	indexTitle : "注册账户",
				isShow : true,
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
  			agreeBtn (){
  				this.isShow = !this.isShow;
  			},
			getCode (){
				console.log("发送s获取验证码")
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
				} else if(!this.transactionPassword){
					this.layers("请输入交易密码！");
				} else{
					console.log("创建成功");	
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
	.agree-clause{
		width: 6.9rem;
		height: 1.2rem;
		justify-content: flex-start;
		margin-bottom: 0.2rem;
	}
	.agree-check{
		width: 0.28rem;
		height: 0.28rem;
		border: 0.02rem solid #c3c8d1;
		border-radius: 0.06rem;
		margin-right: 0.1rem;
		background-color: #4a7cee;
	}
	.agreeCheck{
		background-image: url(../../static/images/registered_04.png);
		background-size: 100% 100%;
	}
	.agree-clause h4{
		font-size: 0.28rem;
		color: #7c7c7c;
	}
	.agree-clause h5{
		font-size: 0.28rem;
		color: #4579ee;
	}
	.create-btn{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.2rem;
		background-color: #4a7cee;
		font-size: 0.32rem;
		color: #FFFFFF;
	}
</style>
