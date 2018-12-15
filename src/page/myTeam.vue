<template>
	<div class="myTeam">
		<headerBar :title="indexTitle"></headerBar>
		<div class="background-color"></div>
		<div class="bg-color flex-col">
			<img src="../../static/images/myTeam_01.png" alt="">
			<div class="center-list flex-col">
				<img src="../../static/images/myTeam_02.png" alt="">
				<div class="list flex-row">
					<h4>账户</h4>
					<h4>生产力</h4>
					<h4>业绩</h4>
				</div>
				<div class="list flex-row">
					<h5>13144571984</h5>
					<h5>3.45</h5>
					<h5>1500</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'myTeam',
        data(){
            return {
            	indexTitle : "我的团队"
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
		font-weight: bolder;
		color: #d76000;
		width: 33%;
	}
	h5{
		font-size: 0.28rem;
		color: #e16a0b;
		width: 33%;
	}
	.background-color{
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #ffe6b0;
		z-index: -999;
	}
	.bg-color{
		width: 100%;
		height: auto;
		justify-content: flex-start;
	}
	.center-list{
		width: 6.9rem;
		height: auto;
		min-height: 6rem;
		margin-bottom: 0.6rem;
		padding: 0.6rem 0;
		justify-content: flex-start;
		border: 0.01rem solid #cb1a15;
		border-radius: 0.4rem;
		position: relative;
	}
	.center-list img{
		width: 4.3rem;
		height: 0.8rem;
		margin: 0;
		position: absolute;
		top: -0.4rem;
	}
	.list{
		width: 6.4rem;
		height: 0.9rem;
		justify-content: space-between;
		border-bottom: 0.01rem solid #fbaa79;
	}
	.list h4:last-child,.list h5:last-child{
		text-align: right;
	}
	h4:nth-child(2),h5:nth-child(2){
		text-align: center;
	}
</style>
