<template>
	<div class="header flex-col">
		<div class="top-title flex-row">
			<img @click="return_page" src="../../static/images/return.png"/>
			<h3>{{title}}</h3>
			<h4></h4>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				
			}
		},
		//创建之后
  		created: function (){
			
  		},
		methods:{
			return_page (){
				this.$router.go(-1);
			}
		},
		props : {
			title : String, //接收父组件传递的值
		}
	}
</script>
<style scoped>
	.header{
		width: 100%;
		height: auto;
		/* background: linear-gradient(to right,#4082cd,#552aa8); */
		background-color: #393f4c;
	}
	.top-title{
		width: 100%;
		height: 0.9rem;
		/*padding-right: 0.3rem;*/
		justify-content: space-between;
	}
	.top-title img{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.top-title h3{
		font-size: 0.32rem;
		color: #fff;
	}
</style>