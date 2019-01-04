<template>
	<div class="registered">
		<div class="block flex-col">
			<headerBar :title="indexTitle"></headerBar>
			<div class="list-father flex-col">
				<!-- 手机号 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<img class="phoneimg" src="../../static/images/registered_01.png" alt="">
						<h4>手机号：</h4>
					</div>
					<input v-model="phone" type="tel" value="" maxlength="11" placeholder="输入您的手机号码" />
				</div>
				<!-- 验证码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<img class="phoneimg" src="../../static/images/registered_02.png" alt="">
						<h4>验证码：</h4>
					</div>
					<input v-model="code" type="text" value="" maxlength="11" placeholder="输入您的验证码" />
					<div v-if="isCode" @click="getCode" class="flex-col code-btn">
						获取验证码
					</div>
					<div v-else class="flex-col clickOver">{{time}}</div>
				</div>
				<!-- 登录密码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<img class="phoneimg" src="../../static/images/registered_03.png" alt="">
						<h4>登录密码：</h4>
					</div>
					<input v-model="loginPassword" type="password" value="" placeholder="输入您的登录密码" />
				</div>
				<!-- 交易密码 -->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<img class="phoneimg" src="../../static/images/registered_03.png" alt="">
						<h4>交易密码：</h4>
					</div>
					<input v-model="transactionPassword" type="password" value="" placeholder="用于交易与转账" />
				</div>
				<!--输入邀请码-->
				<div class="list flex-row">
					<div class="list-left flex-row">
						<img class="phoneimg" src="../../static/images/invition.png" alt="">
						<h4>邀请码：</h4>
					</div>
          <input v-if="direct_token" v-model="direct_token" type="" disabled="disabled" value="" placeholder="输入邀请码" />
					<input v-else v-model="Invitation" type=""  value="" placeholder="输入邀请码" />
				</div>
				<div class="agree-clause flex-row">
					<div class="agree-check flex-col" @click="agreeBtn">
						<img src="../../static/images/registered_04.png" alt="" v-show="isShowAgree">
					</div>
					<h4>我已仔细阅读并同意</h4>
					<h5>《服务与隐私条款》</h5>
				</div>
				<div @click="createBtn" class="create-btn flex-col">
					创建钱包
				</div>
				<h3 @click="goDownload()">前往下载APP ></h3>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default {
		name: 'registered',
		data() {
			return {
				indexTitle: "注册账户",
				isShow: true,
				phone: "",
				code: "",
				loginPassword: "",
				transactionPassword: "",
				Invitation: '', //验证码
        direct_token:'',//
				isShowAgree: true,
				isCode: true,
				time: 60
			}
		},
		// 创建之前
		beforeCreate: function() {

		},
		//创建之后
		created: function() {
      this.huoqu()
		},
		//挂载之前
		beforeMount: function() {

		},

		// 挂载之后
		mounted: function() {
			this.$nextTick(function() {
				document.onscroll = this.toggleHead;
			})
		},
		components: {
			headerBar
		},
    created:function(){
     this.direct_token = this.$route.query.direct_token;
    },
		//实例方法
		methods: {
        huoqu:function () {
          console.log(this.$route.query.direct_token);
        },

			toggleHead: function(e) {
				if (this.scrollRouteArr.indexOf(this.$route.name) === -1) return false;
				let scrollBottom = document.body.clientHeight - e.target.scrollingElement.scrollTop - window.innerHeight;
				if (scrollBottom <= 50) this.$store.commit('setwithBottom', scrollBottom);
			},
			agreeBtn() {
				this.isShowAgree = !this.isShowAgree;
			},
			getCode() {
				console.log("发送获取验证码");
				let that = this;
				this.axios.post('/index/suda_sms/send', {
						phone: this.phone,
						event: "register"
					})
					.then(({
						data
					}) => {
						console.log(data);
						if (data.status == 200) {
							console.log(data);
							this.isCode = false;
							let me = this;
							me.isCode = false;
							let interval = window.setInterval(function() {
								--me.time;
								if (me.time < 0) {
									me.isCode = true;
									window.clearInterval(interval);
									me.time = 60;
								}
							}, 1000);
							this.layers(data.message);
						} else {
							this.layers(data.message);
						}
					})
			},
			createBtn() {

				if (!this.phone) {
					this.layers("请输入手机号！");
				} else if (!/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test(this.phone)) {
					this.layers("请输入正确的手机号！")
				} else if (!this.code) {
					this.layers("请输入验证码！");
				} else if (!this.loginPassword) {
					this.layers("请输入登录密码！");
				} else if (!this.transactionPassword) {
					this.layers("请输入交易密码！");
				} else if (this.isShowAgree == false) {
					this.layers("请点击同意服务与隐私条款!");
				} else {
					console.log(this.phone, this.code, this.loginPassword, this.transactionPassword);
					let that = this;
					this.axios.post('/index/suda_login/register', {
							phone: this.phone,
							code: this.code,
							password: this.loginPassword,
							two_password: this.transactionPassword,
							direct_token: this.$route.query.direct_token ? this.$route.query.direct_token : this.Invitation
						})
						.then(({
							data
						}) => {
							if (data.status === 200) {
								console.log(data.status);
								this.layers(data.message);
								setTimeout(() => {
									this.$router.go(-1);
								}, 2000)
							} else {
								that.layers(data.message);
							}
						})
						.catch(function(error) {
							setTimeout(() => {
								console.log(error.message);
								/* that.layers(error.message); */
							}, 4000)
						});
          if(this.direct_token != ''){
            this. Invitation = this.direct_token;
            console.log(this.direct_token);
          }
					/* this.layers("创建成功!")
					setTimeout(() => {
						this.$router.go(-1);
					},2000) */
				}
			},
			goDownload() {
				window.location.href = 'http://www.suda66888.com/download.html';
			},


		},

	}
</script>

<style scoped>
	h3 {
		font-size: 0.28rem;
		color: #517cf4;
		align-self: flex-end;
		margin-top: 0.4rem;
	}

	.block {
		width: 100vw;
		min-height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		justify-content: flex-start;
	}

	.list-father {
		width: 7rem;
		height: auto;
	}

	.list {
		width: 100%;
		height: 1rem;
		border-bottom: 0.01rem solid #c0bebe;
		justify-content: flex-start;
	}

	.list-left h4 {
		width: 1.6rem;
		font-size: 0.28rem;
		color: #2a2a2a;
		margin-left: 0.2rem;
	}

	.phoneimg {
		width: 0.38rem;
		height: 0.38rem;
	}

	.list input {
		width: 2.7rem;
		height: 0.5rem;
		border: none;
		background-color: transparent;
	}

	.code-btn {
		width: 1.6rem;
		height: 0.6rem;
		background-color: #4676e3;
		font-size: 0.28rem;
		color: #ffffff;
		border-radius: 0.1rem;
	}

	.reading-consent {
		width: 100%;
		height: 1.1rem;
		justify-content: flex-start;
	}

	.agree-clause {
		width: 6.9rem;
		height: 1.2rem;
		justify-content: flex-start;
		margin-bottom: 0.2rem;
	}

	.agree-check {
		width: 0.28rem;
		height: 0.28rem;
		border: 0.02rem solid #c3c8d1;
		border-radius: 0.06rem;
		margin-right: 0.1rem;
		background-color: #4a7cee;
	}

	.agree-check img {
		width: 0.17rem;
		height: 0.12rem;
	}

	.agreeCheck {
		background-image: url(../../static/images/registered_04.png);
		background-size: 100%;
		background-repeat: no-repeat;
	}

	.agree-clause h4 {
		font-size: 0.28rem;
		color: #7c7c7c;
	}

	.agree-clause h5 {
		font-size: 0.28rem;
		color: #4579ee;
	}

	.create-btn {
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.2rem;
		background-color: #4a7cee;
		font-size: 0.32rem;
		color: #FFFFFF;
	}

	.clickOver {
		background: #ddd;
		width: 1.6rem;
		height: 0.6rem;
		font-size: 0.28rem;
		color: #ffffff;
		border-radius: 0.1rem;
	}
</style>
