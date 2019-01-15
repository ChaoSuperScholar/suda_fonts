<template>
	<div class="contacts">
		<div class="top-module flex-row">
			<img class="img-left" @click="return_page()" src="../../static/images/return.png"/>
			<h3>联系人</h3>
			<img class="img-right" @click="goAddContact()" src="../../static/images/contacts_01.png" alt="">
		</div>
		<div class="list flex-row" v-for="list in lists" @click="chooseAddress(list)">
			<img src="../../static/images/contacts_02.png" alt="">
			<div class="list-center flex-col">
				<h4>{{list.remark_name}}</h4>
				<h5>{{list.remark_address}}</h5>
			</div>
			<div class="list-right flex-col">
				<div class="btn btn-blue flex-col" @click.stop="goModify(list)">
					修改
				</div>
				<div class="btn btn-red flex-col" @click.stop="deleteContacts(list)">
					删除
				</div>
			</div>
		</div>
		<!--没有数据-->
		<div class="no-data flex-row" v-if="!lists.length">
			暂无数据
		</div>
	</div>
</template>

<script>
	export default{
        name: 'contacts',
        data(){
            return {
            	remark_name : "",
              num:'',
				remark_address : "",
				lists : []
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
  			this.getMsg();
  			this.num=this.$route.query.num;
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
  		},
  		//实例方法
  		methods: {
  			return_page (){
				/* this.$router.go(-1); */
				this.$router.push({
					path : '/walletTransfer',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type
					}
				})
			},
			getMsg (){
				this.axios.post('/index/suda_wallet/contacts')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.lists = res;
					} else{
						this.layers(data.message);
					}
				})
			},
			chooseAddress (list){
				this.$router.push({
					path : '/walletTransfer',
					query : {
            qrcode_content : list.remark_address,
						title : this.$route.query.title,
						type : this.$route.query.type,
            num:this.$route.query.num
					}
				})
			},
			goModify (list){
				this.$router.push({
					path : '/modifyContact',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type,
						remark_address : list.remark_address,
						id : list.id
					}
				})
			},
			goAddContact (){
				this.$router.push({
					path : '/addContact',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type,
					}
				})
			},
			deleteContacts (list){
				this.axios.post('/index/suda_wallet/del_contacts',{
					id : list.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						this.layers(data.message);
						setTimeout(() => {
							this.getMsg();
						})
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
		font-size: 0.32rem;
		color: #454d60;
	}
	h4{
		font-size: 0.28rem;
		color: #8d94a2;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-weight: 500;
		margin-left: 0.6rem;
		color: #ffffff;
	}
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.img-right{
		width: 0.34rem;
		height: 0.34rem;
		margin-right: 0.3rem;
	}
	.list{
		width: 7rem;
		height: auto;
		padding: 0.2rem 0;
		border-bottom: 0.01rem solid #c8cdd9;
		justify-content: space-between;
	}
	.list img{
		width: 0.68rem;
		height: 0.68rem;
	}
	.list-center{
		width: auto;
		max-width: 4rem;
		height: auto;
		align-items: flex-start;
	}
	.list-right .btn{
		width: 1.3rem;
		height: 0.56rem;
		border-radius: 0.1rem;
		font-size: 0.28rem;
		color: #FFFFFF;
	}
	.btn-blue{
		margin-bottom: 0.2rem;
		background-color: #4e7cdf;
	}
	.btn-red{
		background-color: #ec5656;
	}
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>
