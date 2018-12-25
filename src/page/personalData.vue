<template>
	<div class="personalData">
		<headerBar :title="indexTitle"></headerBar>
		<div class="top-module flex-col">
			<div class="img-father">
				<label class="user">
					<img :src="userImg ? userImg : require('../../static/images/userCenter_01.png')" alt="">
					<input type="file" class="img_input" ref="" @change="selectImg">
				</label>
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
				newName : '',
				userImg : '',
				upImg1 : ''
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
						this.userImg = res.avatar;
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
					avatar : this.upImg1
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
						setTimeout(() => {
							this.$router.replace('userCenter');
						},1500)
					} else{
						this.layers(data.message);
					}
				})
			},
			// 图片选择，赋值给file
			selectImg: function (e) {
				this.hasImg = false;
				this.file = e.target.files[0];
				let reader = new FileReader();
				reader.addEventListener('load', () => {
					this.userImg = reader.result;
				}, false);
				if (this.file) {
					reader.readAsDataURL(this.file);
				}
				console.log(this.file);
				let fm = new window.FormData();
				fm.append('avatar', this.file);
				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				this.$http.post('http://admin.suda66888.com/index/uploadfile/uploadPic',fm,config)
				.then(({data}) => {
					if (data.status === 200) {
						console.log(data.data);
						this.hasImg = true;
						this.upImg1 = data.data;
						this.layers(data.message);
					} else {
						this.layers(data.message);
					}
				})
			},
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
		padding-top: 0.4rem;
	}
	/* .top-module .img-father{
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
		border: 0.04rem solid #9ca5b7;
		overflow: hidden;
		margin: 0.4rem 0;
	} */
	.top-module h3{
		margin: 0.4rem 0 0.5rem 0;
	}
	.top-title{
		margin-bottom: 0.4rem;
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
	.user{
		position: relative;
		overflow: hidden;
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
		/* border: 0.04rem solid #9ca5b7; */
		overflow: hidden;
		/* margin: 0.4rem 0; */
	}
	.user img{
		width: 1.1rem;
		height: 1.1rem;
		border-radius: 50%;
	}
	.img_input{
		position: absolute;
		left: -20rem;
		top: 0.6rem;
	}
</style>
