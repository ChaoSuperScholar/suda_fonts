<template>
	<div class="receivables">
		<headerBar :title="indexTitle"></headerBar>
		<div class="body  flex-col">
			<div @click="selectList" class="select flex-row">
				<h4>选择币种：<span>SDT</span></h4>
				<img src="../../static/images/receivables_01.png" alt="">
			</div>
			<div v-show="isShowSelect" v-for="list in lists" class="select-options flex-row">
				<h4>{{list.title}}</h4>
			</div>
			<div class="wallet-address flex-col">
				<h4>钱包地址</h4>
				<h5>0x33162AaFcD9149B2f73a8c923Eb24C76A 922804D</h5>
			</div>
			<div class="qr-code flex-col">
				<img src="../../static/images/receivables_02.png" alt="">
			</div>
			<div @click="createBtn" class="create-btn flex-col">
				复制钱包地址
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'receivables',
        data(){
            return {
            	indexTitle : "收款",
				lists : [],
				isShowSelect : false
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
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
			getMsg (){
				let that = this;
				this.axios.get('../static/receivables.json')
					.then((data) => {
						if (data.status === 200) {
							console.log(data);
							let res = data.data;
							this.lists = res.lists;
						} else {
							this.layers("請求失敗");
						}
					})
					.catch(function (error) {
						setTimeout(() => {
								console.log(error.message);
								that.layers(error.message);
							},4000)
					});
			},
  			createBtn (){
				console.log("点击了复制钱包地址")
			},
			selectList (){
				this.isShowSelect = !this.isShowSelect; 
			}
  		},
    }
</script>

<style scoped>
	.body{
		width: 7rem;
		height: auto;
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
		font-size: 0.26rem;
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
	.wallet-address{
		width: 100%;
		height: auto;
		border-bottom: 0.01rem solid #aaacb0;
		align-items: flex-start;
		padding: 0.3rem 0;
	}
	.wallet-address h4{
		margin: 0;
	}
	.wallet-address h5{
		font-size: 0.26rem;
		color: #616161;
	}
	.qr-code{
		width: 100%;
		height: auto;
		margin: 0.6rem 0;
	}
	.qr-code img{
		width: 3.34rem;
		height: 3.34rem;
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
