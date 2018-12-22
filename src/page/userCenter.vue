<template>
	<div class="userCenter">
		<pageHead>我的</pageHead>
		<div class="top-module flex-col">
			<div class="top flex-row">
				<img :src="avatar" alt="">
				<div class="top-title flex-col">
					<h3 v-if="auth == 1">{{nickname}}<span>已认证</span></h3>
					<h3 v-if="auth == 2">{{nickname}}<span class="span-de">未认证</span></h3>
					<router-link to="personalData">
						<h5>点击编辑个人资料</h5>
					</router-link>
				</div>
			</div>
			<div class="bottom flex-row">
				<div class="bottom-list flex-col" @click="nodata()">
					<img src="../../static/images/userCenter_02.png" alt="">
					<h4>推广</h4>
				</div>
				<router-link to="myTeam">
					<div class="bottom-list flex-col">
						<img src="../../static/images/userCenter_03.png" alt="">
						<h4>团队</h4>
					</div>
				</router-link>
				<router-link to="transferRecord">
					<div class="bottom-list flex-col">
						<img src="../../static/images/userCenter_04.png" alt="">
						<h4>记录</h4>
					</div>
				</router-link>
			</div>
		</div>
		<div class="list flex-row" @click="goIdentity()">
			<div class="list-left flex-row">
				<img src="../../static/images/userCenter_05.png" alt="">
				<h4>身份认证</h4>
			</div>
			<img src="../../static/images/receivables_01.png" alt="">
		</div>
		<router-link to="paymentMethod">
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img src="../../static/images/userCenter_06.png" alt="">
					<h4>收款方式</h4>
				</div>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
		</router-link>
		<router-link to="securityCenter">
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img src="../../static/images/userCenter_07.png" alt="">
					<h4>安全中心</h4>
				</div>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
		</router-link>
		<router-link to="aboutUs">
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img src="../../static/images/userCenter_08.png" alt="">
					<h4>关于我们</h4>
				</div>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
		</router-link>
		<router-link to="moreInformation">
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img src="../../static/images/userCenter_09.png" alt="">
					<h4>更多信息</h4>
				</div>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
		</router-link>
		<div class="list list-last flex-row" @click="returnAccount()">
			<div class="list-left flex-row">
				<img src="../../static/images/userCenter_10.png" alt="">
				<h4>退出账户</h4>
			</div>
			<img src="../../static/images/receivables_01.png" alt="">
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
	import pageHead from '../components/pageHead'
	import footerBar from '../components/footerBar'
	export default{
        name: 'userCenter',
        data(){
            return {
            	img1 : require('../../static/images/indexNew_01.png'),
            	img2 : require('../../static/images/indexNew_02.png'),
            	img3 : require('../../static/images/indexNew_03.png'),
            	img4 : require('../../static/images/indexNew_04.png'),
            	img5 : require('../../static/images/indexNew_05_de.png'),
				nickname : '',
				auth : '',
				avatar : ''
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
  				
  			})
  		},
		//注册组件
		components : {
			pageHead,
			footerBar
		},
  		//实例方法
  		methods: {
			nodata (){
				this.layers("暂未开放!");
			},
  			returnAccount (){
				let that = this;
				this.axios.post('/index/suda_password/Logout')
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						window.localStorage.setItem('isLogin','no');
						setTimeout(() =>{
							this.$router.replace({name : 'indexNew'})
						},2000)
					} else{
						this.layers(data.message);
					}
				})
				.catch(function (error) {
					setTimeout(() => {
							console.log(error.message);
							/* that.layers(error.message); */
						},4000)
				});
			},
			getMsg (){
				let that = this;
				this.axios.get('/index/suda_user/user_info')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.nickname = res.nickname;
						this.auth = res.auth;
						this.avatar = res.avatar;
					} else{
						this.layers(data.message);
					}
				})
				.catch(function (error) {
					setTimeout(() => {
							console.log(error.message);
							/* that.layers(error.message); */
						},4000)
				});
			},
			goIdentity (){
				this.$router.replace('identity');
			}
  		}
    }
</script>

<style scoped>
	.top-module{
		width: 100%;
		height: auto;
		box-shadow: 0 0 0.1rem 0.05rem #d6d6d6;
		margin-top: 1rem;
	}
	.top{
		width: 6.9rem;
		height: auto;
		padding: 0.4rem 0;
		justify-content: flex-start;
		border-bottom: 0.01rem solid #dbe1e9;
	}
	.top img{
		width: 0.92rem;
		height: 0.92rem;
		margin-right: 0.2rem;
		border-radius: 50%;
	}
	.top-title{
		align-items: flex-start;
	}
	h3{
		font-size: 0.38rem;
		color: #2b2f38;
	}
	h4{
		font-size: 0.32rem;
		color: #464f62;
	}
	h5{
		font-size: 0.28rem;
		color: #7f90a7;
	}
	span{
		width: auto;
		height: auto;
		padding: 0.06rem 0.2rem;
		border: 0.02rem solid #5174e7;
		border-radius: 0.3rem;
		font-size: 0.26rem;
		color: #5174e7;
		margin-left: 0.2rem;
	}
	.span-de{
		width: auto;
		height: auto;
		padding: 0.06rem 0.2rem;
		border: 0.02rem solid #828fac;
		border-radius: 0.3rem;
		font-size: 0.26rem;
		color: #828fac;
		margin-left: 0.2rem;
	}
	.bottom{
		width: 6.9rem;
		height: auto;
		justify-content: space-around;
		padding: 0.3rem 0;
	}
	.bottom-list img{
		width: 0.52rem;
		height: 0.52rem;
	}
	.list{
		width: 6.9rem;
		height: auto;
		justify-content: space-between;
		padding: 0.4rem 0;
		border-bottom: 0.01rem solid #d6dae2;
	}
	.list img{
		width: 0.15rem;
		height: 0.28rem;
	}
	.list-left img{
		width: 0.42rem;
		height: 0.42rem;
		margin-right: 0.2rem;
	}
	.list-last{
		margin-bottom: 1rem;
	}
</style>
