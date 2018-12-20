<template>
	<div class="personalData">
		<headerBar :title="indexTitle"></headerBar>
		<div class="top-module flex-col">
			<div class="img-father">
				<img src="../../static/images/userCenter_01.png" alt="">
			</div>
			<h3>{{nickname}}</h3>
		</div>
		<div class="list flex-row">
			<h4>账户昵称:</h4>
			<input type="text" value="" placeholder="输入账号昵称" v-model="newName"/>
		</div>
		<div class="list flex-row">
			<h4>手机号码:</h4>
			<h4>{{phone}}</h4>
		</div>
		<router-link to="securityCenter">
			<div class="list flex-row">
				<h4>修改登录密码:</h4>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
		</router-link>
		<router-link to="securityCenter">
			<div class="list flex-row">
				<h4>修改交易密码:</h4>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
		</router-link>
		<div class="create-btn flex-col" @click="btnClick()">
			确认修改
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'personalData',
        data(){
            return {
            	indexTitle : "个人资料",
				nickname : '',
				phone : '',
				newName : ''
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
		// 注册组件
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
  			getMsg (){
				let that = this;
				this.axios.get('/index/suda_user/user_info')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.nickname = res.nickname;
						this.phone = res.phone;
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
			btnClick (){
				this.axios.post('/index/suda_user/user_info',{
					nickname : this.newName,
					avatar : ''
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
						setTimeout(() => {
							this.getMsg();
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
	h3{
		font-size: 0.36rem;
		color: #c1cce1;
	}
	h4{
		font-size: 0.32rem;
		color: #3d3d3d;
	}
	.top-module{
		width: 100%;
		height: auto;
		background-color: #393f4c;
	}
	.top-module .img-father{
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
		border: 0.04rem solid #9ca5b7;
		overflow: hidden;
		margin: 0.4rem 0;
	}
	.top-module h3{
		margin-bottom: 0.5rem;
	}
	.list{
		width: 6.9rem;
		height: auto;
		justify-content: space-between;
		padding: 0.4rem 0;
		border-bottom: 0.01rem solid #d6dae2;
	}
	.list input{
		width: 3.2rem;
		height: 0.4rem;
		font-size: 0.3rem;
		color: #919191;
		border: none;
		text-align: right;
	}
	.list img{
		width: 0.15rem;
		height: 0.28rem;
	}
	.create-btn{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.1rem;
		background-color: #4a7cee;
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-top: 0.72rem;
	}
</style>
