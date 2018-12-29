<template>
	<div class="market">
		<div class="top-module flex-row">
			<img class="img-left" @click="return_page()" src="../../static/images/return.png"/>
			<h3>行情</h3>
			<img class="img-right" src="../../static/images/walletTransfer_01.png" alt="" v-show="false">
			<h4></h4>
		</div>
		<template v-if="this.$route.query.type == 'eth'">
			<iframe src="https://m.feixiaohao.com/currencies/ethereum" frameborder="0"></iframe>
		</template>
		<template v-if="this.$route.query.type == 'usdt'">
			<iframe src="https://m.feixiaohao.com/currencies/tether/" frameborder="0"></iframe>
		</template>
		<template v-if="this.$route.query.type == 'sdt'">
			<div class="no-data flex-row">
				暂无行情
			</div>
		</template>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'market',
        data(){
            return {
            	
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
  			return_page (){
				this.$router.push({
					path : '/walletDetails',
					query : {
						title : this.$route.query.title,
						type : this.$route.query.type
					}
				})
			}
  		}
    }
</script>

<style scoped>
	iframe{
		width: 100%;
		height: 100vh;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -10;
	}
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-weight: 500;
		/* margin-left: 0.6rem; */
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
</style>
