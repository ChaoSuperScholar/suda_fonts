<template>
	<div class="securityCenter">
		<headerBar :title="indexTitle"></headerBar>
		<!-- 购买顶部切换 -->
		<div class="tab-father flex-row">
			<div class="tab-child flex-row">
				<template v-for="(tab,index) in tabsName">
					<div class="tab-btn flex-col" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">
						{{tab.name}}
					</div>
				</template>
			</div>
		</div>
		<div class="tab-card" style="display: block;">
			<div class="list-father flex-col">
				<!-- 手机号 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_01.png" alt="">-->
						<h4>手机号：</h4>
					</div>
					<input v-model="phone" type="tel" value="" maxlength="11" placeholder="输入您的手机号码"/>
				</div>
				<!-- 验证码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_02.png" alt="">-->
						<h4>验证码：</h4>
					</div>
					<input v-model="code" type="text" value="" maxlength="11" placeholder="输入您的验证码"/>
					<div @click="getCode" class="code-btn flex-col">
						获取验证码
					</div>
				</div>
				<!-- 旧密码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_01.png" alt="">-->
						<h4>新密码：</h4>
					</div>
					<input v-model="loginPassword" type="password" value="" placeholder="输入新的登录密码"/>
				</div>
				<!-- 新密码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_01.png" alt="">-->
						<h4>再次输入：</h4>
					</div>
					<input v-model="newPassword" type="password" value="" placeholder="再次输入新的密码"/>
				</div>
				<div @click="createBtn" class="create-btn flex-col">
					确认修改
				</div>
			</div>
		</div>
		<div class="tab-card">
			<div class="list-father flex-col">
				<!-- 手机号 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_01.png" alt="">-->
						<h4>手机号：</h4>
					</div>
					<input v-model="phone" type="tel" value="" maxlength="11" placeholder="输入您的手机号码"/>
				</div>
				<!-- 验证码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_02.png" alt="">-->
						<h4>验证码：</h4>
					</div>
					<input v-model="payCode" type="text" value="" maxlength="11" placeholder="输入您的验证码"/>
					<div @click="getPayCode" class="code-btn flex-col">
						获取验证码
					</div>
				</div>
				<!-- 旧密码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_01.png" alt="">-->
						<h4>新密码：</h4>
					</div>
					<input v-model="oldPayPassword" type="password" value="" placeholder="输入新的交易密码"/>
				</div>
				<!-- 新密码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<!--<img class="phoneimg" src="../../static/images/registered_01.png" alt="">-->
						<h4>再次输入：</h4>
					</div>
					<input v-model="newPayPassword" type="password" value="" placeholder="再次输入新的密码"/>
				</div>
				<div @click="createPayBtn" class="create-btn flex-col">
					确认修改
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'securityCenter',
        data(){
            return {
            	indexTitle : "安全中心",
				tabsName: [
					{
						name: "登录密码",
						isActive: true
					},
					{
						name: "交易密码",
						isActive: false
					}
				],
				active : false,
				phone : "",
				code : "",
				loginPassword : "",
				newPassword : "",
				payCode : "",
				oldPayPassword : "",
				newPayPassword : ""
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
		// 注册组件
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
  			tabsSwitch: function(tabIndex) {
  					let tabCardCollection = document.querySelectorAll(".tab-card"),
  						len = tabCardCollection.length;
  							for(var i = 0; i < len; i++) {
  								tabCardCollection[i].style.display = "none";
  							this.tabsName[i].isActive = false;
  						}
  					this.tabsName[tabIndex].isActive = true;
  					tabCardCollection[tabIndex].style.display = "block";
  			},
			getCode (){
				console.log("发送获取验证码");
				let that = this;
				this.axios.post('/index/suda_sms/send',{
					phone : this.phone,
					event : "changepwd"
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
					this.layers("请输入新的密码！");
				} else if(this.loginPassword != this.newPassword){
					this.layers("两次输入的密码不一致！");
				}else{
					let that = this;
					this.axios.post('/index/suda_password/edit_password',
					{
						re_pwd : this.loginPassword,
						new_pwd : this.newPassword,
						code : this.code,
						flag : "1"
					})
					.then(({data}) => {
						console.log(data);
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
						} else{
							this.layers(data.message);
						}
					})
				}
			},
			getPayCode (){
				console.log("发送获取验证码");
				let that = this;
				this.axios.post('/index/suda_sms/send',{
					phone : this.phone,
					event : "setpaypwd"
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
			createPayBtn (){
				if (!this.phone) {
					this.layers("请输入手机号！");
				} else if(!/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(this.phone)){
					this.layers("请输入正确的手机号！")
				} else if(!this.payCode){
					this.layers("请输入验证码！");
				}else if(!this.oldPayPassword){
					this.layers("请输入交易密码！");
				} else if(this.oldPayPassword != this.newPayPassword){
					this.layers("请输入新的密码！");
				}else{
					let that = this;
					this.axios.post('/index/suda_password/edit_password',
					{
						re_pwd : this.oldPayPassword,
						new_pwd : this.newPayPassword,
						code : this.payCode,
						flag : "2"
					})
					.then(({data}) => {
						console.log(data);
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
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
	.tab-father{
		width: 100%;
		height: 1rem;
		background-color: #f5f6f8;
	}
	.tab-child{
		width: 5.3rem;
		height: 100%;
		justify-content: space-between;
	}
	.tab-btn{
		width: auto;
		height: 100%;
		font-size: 0.32rem;
		color: #9198aa;
	}
	.tab-card{
		width: 7rem;
		height: auto;
		display: none;
	}
	.active{
		color: #3c6cda;
		border-bottom: 0.03rem solid #3c6cda;
	}
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
		margin-top: 0.72rem;
	}
</style>
