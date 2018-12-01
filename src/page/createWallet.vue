<template>
	<div class="createWallet">
		<headerBar :title="indexTitle"></headerBar>
		<div class="list flex-col">
			<input v-model="walletTitle" type="text" value="" placeholder="设置钱包名称"/>
		</div>
		<div class="list flex-col">
			<input  v-model="password1" type="password" value="" placeholder="设置密码,至少包含大小写字母和数字的8位字符"/>
		</div>
		<div class="list flex-col">
			<input 	v-model="password2" type="password" value="" placeholder="再次输入钱包密码"/>
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
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'createWallet',
        data(){
            return {
            	indexTitle : "创建钱包", //向子组件中传入title数据
				walletTitle : "",
				password1 : "",
				password2 : "",
				isShow : true
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
		components : {  //注册组件
				headerBar
		},
  		//实例方法
  		methods: {
  			agreeBtn (){
				this.isShow = !this.isShow;
			},
			createBtn (){
				if (!this.walletTitle) {
					this.layers("请输入钱包名称！");
				} else if (!/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,16}$/.test(this.password1)){
					this.layers("密码为至少包含大小写字母和数字的8位以上16位以下字符！")
				}else if(!this.password1){
					this.layers("请设置密码！");
				} else if(!this.password2){
					this.layers("请再次输入密码！");
				} else if(this.password1!=this.password2){
					this.layers("两次输入的密码不一样！");
				} else{
					console.log("创建成功");	
				}
			}
  		}
    }
</script>

<style scoped>
	.list{
		width: 6.9rem;
		height: auto;
		border-bottom: 0.01rem solid #c0bebe;
		align-items: flex-start;
	}
	.list input{
		width: 6rem;
		height: 0.5rem;
		border: none;
		margin: 0.5rem 0 0.2rem 0;
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
	}
	.agreeCheck{
		background-color: #4a7cee;
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
