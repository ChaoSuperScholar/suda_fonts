<template>
	<div class="addPayment">
    <div style="height: auto;width: 100%">
		<headerBar :title="indexTitle"></headerBar>
		<div class="body  flex-col">
			<div @click="selectList" class="select flex-row">
				<h4>收款方式：<span>{{chooseTitle}}</span></h4>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
			<div v-show="isShowSelect" v-for="list in lists" class="select-options flex-row" @click="choose(list)">
				<h4>{{list.card}}</h4>
			</div>
			<div class="list flex-row">
				<h4>真实姓名:</h4>
				<input type="text" value="" placeholder="输入名称" v-model="inputName"/>
			</div>
			<div class="list flex-row">
				<h4>账号:</h4>
				<input type="text" value="" placeholder="输入账户" v-model="inputAccount"/>
			</div>
      <div v-show="flag==1" class="list flex-row">
        <h4>开户行:</h4>
        <input type="text" value="" placeholder="输入账户" v-model="bank"/>
      </div>
			<div class="list flex-row">
				<h4>交易密码:</h4>
				<input type="password" value="" placeholder="输入交易密码" v-model="inputPassword"/>
			</div>
			<div class="uploadImg" v-if="chooseTitle != '银行卡'">
				<label class="user">
					<img :src="userImg ? userImg : require('../../static/images/addPayment_01.png')" alt="">
					<input type="file" class="img_input" ref="" @change="selectImg">
				</label>
			</div>
			<div class="btn btn-blue flex-col" @click="addPayBtn()">
				确认
			</div>
		</div>
    </div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'addPayment',
        data(){
            return {
            	indexTitle : "添加收款方式",
				lists : [
					{
						card : "银行卡",
						flag : "1"
					},
					{
						card : "支付宝",
						flag : "2"
					},
					{
						card : "微信",
						flag : "3"
					}
				],
				isShowSelect : false,
				chooseTitle : "银行卡",
              bank:'',
				inputName : '',
				inputAccount : '',
				inputPassword : '',
				userImg : '',
				flag : '1'
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
  			selectList (){
				this.isShowSelect = !this.isShowSelect;
			},
			choose(list){
				console.log(list.card,list.flag);
				this.chooseTitle = list.card;
				this.flag = list.flag;
				this.isShowSelect = false;
			},
			addPayBtn (){
				let that = this;
				this.axios.post('/index/suda_user/bind',{
					name : this.inputName,
					account : this.inputAccount,
					pay_password : this.inputPassword,
					flag : this.flag,
					code : this.upImg1,
          bank:this.bank
				})
				.then(({data}) => {
					if (data.status === 200) {
						console.log(data);
						this.layers(data.message);
						setTimeout(() => {
							this.$router.replace('paymentMethod');
						},1500)
						/* this.chooseTitle = res.lists[0].title; */
					} else {
						this.layers(data.message);
					}
				})
			},
			selectImg: function (e) {
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
						this.upImg1 = data.data;
						this.layers(data.message);
					} else {
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	.body{
		width: 7rem;
		height: auto;
    margin: 0 auto;
	}
	.select{
		width: 100%;
		height: 0.9rem;
		background-color: #eceef1;
		border-radius: 0.1rem;
		margin-top: 0.3rem;
		justify-content: space-between;
	}
	h4{
		font-size: 0.32rem;
		color: #272c37;
		margin-left: 0.2rem;
	}
	.select span{
		font-size: 0.3rem;
		color: #545a67;
	}
	.select img{
		width: 0.16rem;
		height: 0.28rem;
		margin-right: 0.2rem;
	}
	.select-options{
		width: 100%;
		height: 0.86rem;
		border: 0.01rem solid #dee1e6;
		border-top: none;
		justify-content: flex-start;
	}
	.list{
		width: 100%;
		height: 1.1rem;
		border-bottom: 0.01rem solid #aaacb0;
		justify-content: space-between;
	}
	.list input{
		width: 5.1rem;
		height: 0.5rem;
		font-size: 0.32rem;
		color: #9fa2a9;
		border: none;
	}
	.btn-blue{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.1rem;
		background-color: #4a7cee;
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-top: 0.5rem;
	}
	.user{
		position: relative;
		overflow: hidden;
	}
	.user img{
		width: 5rem;
		height: 4.5rem;
		margin-top: 0.6rem;
	}
	.img_input{
		position: absolute;
		left: -20rem;
		top: 0.6rem;
	}
</style>
