<template>
	<div class="addAssets">
		<headerBar :title="indexTitle"></headerBar>
		<div class="list-father flex-col" v-for="list in lists">
			<div class="list flex-row">
				<div class="list-left flex-row">
					<img :src="list.img" alt="">
					{{list.title}}
				</div>
				<div class="checkbox flex-col" v-if="list.status == 2" @click="addWallet(list)">
					<div class="checkCircle"></div>
				</div>
				<div class="checkboxActive flex-col" v-if="list.status == 1" @click="addWallet(list)">
					<div class="checkCircle"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'addAssets',
        data(){
            return {
            	indexTitle : "添加资产",
				lists : [],
				imgUrl : []
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
				this.axios.get('/index/suda_wallet/assets')
					.then((data) => {
						if (data.status === 200) {
							console.log(data);
							let res = data.data;
							this.lists = res.data.lists;
						} else {
							this.layers("请求失败");
						}
					})
					.catch(function (error) {
						setTimeout(() => {
								console.log(error.message);
							},4000)
					});
			},
			addWallet (addItem){
				let that = this;
				console.log(addItem.id);
				this.axios.post('/index/suda_wallet/add_assets',{
					id : addItem.id
				})
				.then((data) => {
					if (data.status === 200) {
						let res =data.data;
						console.log(res.message);
						this.layers(res.message);
						this.getMsg();
					} else{
						this.layers(res.message);
					}
				})
				.catch(function (error) {
					setTimeout(() => {
							console.log(error.message);
						},4000)
				});
			}
  		}
    }
</script>

<style scoped>
	.list-father{
		width: 100%;
		height: 1.3rem;
		border-bottom: 0.01rem solid #e0e0e0;
	}
	.list{
		width: 7rem;
		height: auto;
		justify-content: space-between;
		font-size: 0.3rem;
		font-weight: 600;
		color: #404040;
	}
	.list-left img{
		width: 0.56rem;
		height: 0.56rem;
		margin-right: 0.2rem;
	}
	.checkbox{
		width: 0.8rem;
		height: 0.3rem;
		background-color: #bcbcbc;
		border-radius: 0.15rem;
		position: relative;
	}
	.checkbox .checkCircle{
		width: 0.4rem;
		height: 0.4rem;
		background-color: #dbdbdb;
		border-radius: 50%;
		position: absolute;
		left: 0;
	}
	.checkboxActive{
		width: 0.8rem;
		height: 0.3rem;
		background-color: #a8cbf7;
		border-radius: 0.15rem;
		position: relative;
	}
	.checkboxActive .checkCircle{
		width: 0.4rem;
		height: 0.4rem;
		background-color: #5396ea;
		border-radius: 50%;
		position: absolute;
		right: 0;
	}
</style>
