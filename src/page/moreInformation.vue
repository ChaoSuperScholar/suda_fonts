<template>
	<div class="moreInformation">
    <div style="height: auto;width: 100%">
		<headerBar :title="indexTitle"></headerBar>
		<div class="list flex-row">
			<div class="list-left flex-row">
				<img src="../../static/images/moreInformation_01.png" alt="">
				<h4>身份认证</h4>
			</div>
			<h5>sudaqianbao112</h5>
		</div>
		<div class="list flex-row">
			<div class="list-left flex-row">
				<img src="../../static/images/moreInformation_02.png" alt="">
				<h4>新浪微博</h4>
			</div>
			<h5>S-TOKEN钱包官方账户</h5>
		</div>
		<div class="list flex-row">
			<div class="list-left flex-row">
				<img src="../../static/images/moreInformation_03.png" alt="">
				<h4>电报群</h4>
			</div>
			<h5>15648413621</h5>
		</div>
    </div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'moreInformation',
        data(){
            return {
            	indexTitle : "更多信息"
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
		color: #464f62;
	}
	h5{
		font-size: 0.28rem;
		color: #9297a1;
		margin-right: 0.3rem;
	}
	.list{
		width: 100%;
		height: auto;
		justify-content: space-between;
		padding: 0.4rem 0;
		border-bottom: 0.01rem solid #d6dae2;
	}
	.list-left img{
		width: 0.44rem;
		height: 0.44rem;
		margin-right: 0.2rem;
		margin-left: 0.3rem;
	}
	.list-last{
		margin-bottom: 1rem;
	}
</style>
