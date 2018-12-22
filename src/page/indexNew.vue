<template>
	<div class="indexNew">
		<!-- 主体 -->
		<div class="list-father flex-col">
			<img class="img-top" src="../../static/images/index_10.png"/>
			<img class="img-center" src="../../static/images/index_11.png"/>
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
  			this.getMsg();
  		},
  		//挂载之前
  		beforeMount: function (){
  			
  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){
  				document.onscroll = this.toggleHead;
  			})
  		},
  		//实例方法
  		methods: {
			toggleHead: function (e) {
				if (this.scrollRouteArr.indexOf(this.$route.name) === -1) return false;
				let scrollBottom = document.body.clientHeight - e.target.scrollingElement.scrollTop - window.innerHeight;
				if (scrollBottom <= 50) this.$store.commit('setwithBottom', scrollBottom);
			},
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
									this.$router.replace({name : 'wallet'});
									this.loginStatus();
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
			},
			loginStatus (){
				window.localStorage.setItem('isLogin','yes');
			},
			isShowLogin (){
				let ls = window.localStorage;
				if(ls.getItem('isLogin') == 'no'){
					return false;
				}
				return false;
			},
			getMsg (){
				let that = this;
				if (that.isShowLogin()) {
					this.$router.replace({name : 'wallet'});
					return false;
				}
			}
  		}
    }
</script>

<style scoped>
	.list-father{
		width: 100vw;
		min-height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		justify-content: flex-start;
		background-image: url(http://suda66888.com/static/img/index_09.png);
		background-size: 100%;
		background-repeat: no-repeat;
		background-color: #070707;
	}
	.img-top{
		width: 2.47rem;
		height: 2.79rem;
		margin-top: 1.1rem;
	}
	.img-center{
		width: 3.54rem;
		height: 0.55rem;
		margin: 0.66rem 0 0.66rem 0;
	}
	.list-father .list{
		width: 5.8rem;
		height: 1rem;
		border: 0.02rem solid #cdd0da;
		border-radius: 0.1rem;
		background-color: #2f343e;
		margin-bottom: 0.4rem;
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
