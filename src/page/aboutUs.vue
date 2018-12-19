<template>
	<div class="aboutUs">
		<headerBar :title="indexTitle"></headerBar>
		<div class="top-text flex-col">
			<img src="../../static/images/aboutUs_01.png" alt="">
			<p>速达钱包S-TOKEN集合了数字钱包系统、OTC场外交易 游戏、商城、竞猜、理财6大功能板块，并基于全球通用 标准ERC20发行速达通证SDT.</p>
		</div>
		<div class="updata flex-row">
			<div class="updata-child flex-row">
				<h4>版本更新</h4>
				<div class="updata-child-right flex-row">
					<div class="new-prompt flex-col">
						NEW
					</div>
					<h5>v1.02</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'aboutUs',
        data(){
            return {
            	indexTitle : "关于我们"
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
  			
  		}
    }
</script>

<style scoped>
	h4{
		font-size: 0.32rem;
		color: #3f4450;
	}
	p,h5{
		font-size: 0.28rem;
		color: #515662;
	}
	.top-text{
		width: 6.9rem;
		height: auto;
		padding: 0.5rem 0;
	}
	.top-text img{
		width: 1.82rem;
		height: 1.82rem;
		margin-bottom: 0.6rem;
	}
	.updata{
		width: 100%;
		height: auto;
		border-top: 0.06rem solid #ebeef3;
		border-bottom: 0.02rem solid #c8cfde;
		padding: 0.3rem 0;
	}
	.updata-child{
		width: 6.9rem;
		height: auto;
		justify-content: space-between;
	}
	.new-prompt{
		width: 1rem;
		height: 0.4rem;
		border: 0.02rem solid #da4545;
		font-size: 0.24rem;
		color: #da4545;
		border-radius: 0.2rem;
		margin-right: 0.2rem;
	}
</style>
