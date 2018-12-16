<template>
	<div class="wallet">
		<div class="top-bg flex-col">
			<div class="top-btn flex-row">
				<router-link to="receivables">
					<img src="../../static/images/indexNew_06.png" alt="">
				</router-link>
				<router-link to="addAssets">
					<img src="../../static/images/indexNew_07.png" alt="">
				</router-link>
			</div>
			<h4 class="text-line-1">{{myname}}</h4>
			<h5><span>{{totalAssets}}</span>总资产(￥)</h5>
		</div>
		<div class="list flex-row" v-for="list in lists">
			<div class="list-left flex-col">
				<img :src="list.img" alt="">
			</div>
			<div class="list-right flex-col">
				<div class="list-text top flex-row">
					<h4>{{list.title}}</h4>
				</div>
				<div class="list-text center flex-row">
					<h5>{{list.num}}</h5>
					<h5>￥{{list.price}}</h5>
				</div>
				<div class="list-text bottom flex-row">
					<h5>≈￥{{list.money}}</h5>
					<h5>{{list.up_down}}</h5>
				</div>
			</div>
		</div>
		<!--没有数据-->
		<div class="no-data flex-row" v-if="!lists.length">
			暂无数据
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
	import footerBar from '../components/footerBar'
	export default{
        name: 'wallet',
        data(){
            return {
				myname : "名字的默认显示",
            	totalAssets : "0",
				lists : [],
				imgUrl : [],
				img1 : require('../../static/images/indexNew_01_de.png'),
				img2 : require('../../static/images/indexNew_02.png'),
				img3 : require('../../static/images/indexNew_03.png'),
				img4 : require('../../static/images/indexNew_04.png'),
				img5 : require('../../static/images/indexNew_05.png')
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
			footerBar
		},
  		//实例方法
  		methods: {
  			getMsg (){
				let that = this;
				this.axios.get('/index/suda_wallet/total_coin')
					.then(({data}) => {
						if (data.status === 200) {
							console.log(data);
							let res = data.data;
							this.lists = res.list;
							if (res.total.nickname == '') {
								return this.myname;
							} else{
								this.myname = res.total.nickname;
							}
							this.totalAssets = res.total.money;
							/* this.imgUrl = res.lists.imgUrl; */
						} else {
							this.layers("請求失敗");
						}
					})
					.catch(function (error) {
						setTimeout(() => {
								console.log(error.message);
								/* that.layers(error.message); */
							},4000)
					});
			}
  		}
    }
</script>

<style scoped>
	span{
		font-size: 0.36rem;
		color: #FFFFFF;
		font-weight: 700;
		margin-right: 0.2rem;
	}
	h4{
		font-size: 0.32rem;
		font-weight: 600;
	}
	h5{
		font-size: 0.28rem;
	}
	.top-bg{
		width: 100%;
		height: 3.8rem;
		background-image: url(../../static/images/indexNew_08.png);
		background-size: 100% 100%;
		position: relative;
	}
	.top-btn{
		width: 6.9rem;
		height: auto;
		justify-content: space-between;
		position: absolute;
		top: 0.2rem;
	}
	.top-btn img:first-child{
		width: 0.4rem;
		height: 0.4rem;
	}
	.top-btn img:last-child{
		width: 0.42rem;
		height: 0.42rem;
	}
	.top-bg h4{
		color: #FFFFFF;
		width: 5rem;
		text-align: center;
	}
	.top-bg h5{
		color: #FFFFFF;
		width: 5rem;
		text-align: center;
		margin-top: 0.4rem;
	}
	.list{
		width: 100%;
		height: auto;
		border-bottom: 0.01rem solid #dddddd;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0.3rem 0 0.3rem 0;
	}
	.list-left{
		width: auto;
		height: 0.5rem;
	}
	.list-left img{
		width: 0.42rem;
		height: 0.42rem;
		margin: 0 0.2rem 0 0.3rem;
	}
	.list .list-right{
		width: 100%;
		height: auto;
		margin-right: 0.3rem;
	}
	.list-text{
		width: 100%;
		height: 0.5rem;
		justify-content: space-between;
	}
	.list-right .top h4{
		color: #454545;
	}
	.list-right .center h5{
		color: #343434;
	}
	.list-right .bottom h5:first-child{
		color: #767676;
	}
	.list-right .bottom h5:last-child{
		color: #e93e3e;
	}
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>
