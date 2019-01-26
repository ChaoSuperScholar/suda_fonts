<template>
	<div class="importWallet">
    <div style="width: 100%;height: auto">
		<headerBar :title="indexTitle"></headerBar>
		<div class="tab-father flex-row">
			<template v-for="(tab,index) in tabsName">
				<div class="tab-btn flex-col" @click="tabsSwitch(index)" :class="{active:tab.isActive}">
					{{tab.name}}
				</div>
			</template>
		</div>
		<!-- Keystore -->
		<div class="tab-card" style="display: block;">
			<div class="tab-card-child flex-col">
				<textarea v-model="keystore" value="" placeholder="黏贴Keystore文件内容"/>
				<div class="list flex-col">
					<input  v-model="password" type="password" value="" placeholder="输入Keystore密码"/>
				</div>
				<div class="list flex-col">
					<input  v-model="walletTitle" type="text" value="" placeholder="输入钱包名称"/>
				</div>
				<div class="agree-clause flex-row">
					<div class="agree-check" @click="agreeBtn" :class="[isShow?'agreeCheck':'']"></div>
					<h4>我已仔细阅读并同意</h4>
					<h5>《服务与隐私条款》</h5>
				</div>
				<div @click="createBtn" class="create-btn flex-col">
					导入钱包
				</div>
			</div>
		</div>
		<!-- 私钥 -->
		<div class="tab-card" style="display: none;">
			<div class="tab-card-child flex-col">
				<textarea v-model="privatekey" value="" placeholder="黏贴私钥内容" />
				<div class="list flex-col">
					<input  v-model="walletTitle2" type="text" value="" placeholder="输入钱包名称"/>
				</div>
				<div class="list flex-col">
					<input  v-model="password2" type="password" value="" placeholder="输入密码,至少包含大小写字母和数字的8位字符"/>
				</div>
				<div class="list flex-col">
					<input  v-model="password3" type="password" value="" placeholder="再次输入钱包密码"/>
				</div>
				<div class="agree-clause flex-row">
					<div class="agree-check" @click="agreeBtn2" :class="[isShow2?'agreeCheck':'']"></div>
					<h4>我已仔细阅读并同意</h4>
					<h5>《服务与隐私条款》</h5>
				</div>
				<div @click="createBtn2" class="create-btn flex-col">
					导入钱包
				</div>
			</div>
		</div>
		<!-- 助记词 -->
		<div class="tab-card" style="display: none;">
			<div class="tab-card-child flex-col">
					333
			</div>
		</div>
    </div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'importWallet',
        data(){
            return {
            	indexTitle : "导入钱包", //向子组件中传入title数据
				tabsName: [{
							name: "Keystore",
							isActive: true
						}, {
							name: "私钥",
							isActive: false
						},{
							name: "助记词",
							isActive: false
						}],
				active : false,
				keystore : "",
				password : "",
				walletTitle : "",
				isShow : true,
				privatekey : "",
				walletTitle2 : "",
				password2 : "",
				password3 : "",
				isShow2 : true,
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
  			tabsSwitch: function(tabIndex) {
				var tabCardCollection = document.querySelectorAll(".tab-card"),
						len = tabCardCollection.length;
								for(var i = 0; i < len; i++) {
									tabCardCollection[i].style.display = "none";
								this.tabsName[i].isActive = false;
						}
				this.tabsName[tabIndex].isActive = true;
				tabCardCollection[tabIndex].style.display = "block";
  			},
			/* Keystore */
			agreeBtn (){
				this.isShow = !this.isShow;
			},
			createBtn (){
				if (!this.keystore) {
					this.layers("请输入Keystore文件内容！")
				} else if(!this.password){
					this.layers("请输入Keystore密码！")
				} else if(!this.walletTitle){
					this.layers("请设置钱包名称!")
				} else{
					console.log("Keystore方式导入成功！")
				}
			},
			/* 私钥 */
			agreeBtn2 (){
				this.isShow2 = !this.isShow2;
			},
			createBtn2 (){
				if (!this.privatekey) {
					this.layers("请输入私钥内容！")
				} else if(!this.walletTitle2){
					this.layers("请设置钱包名称!")
				} else if(!/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{8,16}$/.test(this.password2)){
					this.layers("请正确输入钱包密码！")
				} else if(this.password2!=this.password3){
					this.layers("两次输入的密码不一样！")
				} else{
					console.log("私钥方式导入成功！")
				}
			}
  		}
    }
</script>

<style scoped>
	.tab-father{
		width: 100%;
		height: 0.92rem;
		background-color: #eff0f2;
		align-items: flex-start;
		padding-left: 0.3rem;
		padding-right: 0.3rem;
		justify-content: space-between;
	}
	.tab-btn{
		width: 1.4rem;
		height: 0.9rem;
		font-size: 0.3rem;
		color: #2e2e2e;
	}
	.active{
		color: #4579ee;
		border-bottom: 0.02rem solid #4579ee;
	}
	.tab-btn:first-child{
		margin-left: 0.4rem;
	}
	.tab-btn:last-child{
		margin-right: 0.4rem;
	}
	.tab-card{
		width: 6.9rem;
		height: auto;
		margin-top: 0.4rem;
	}
	textarea{
		resize: none;
		width: 6.5rem;
		height: 2.7rem;
		padding: 0.2rem;
	}
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
