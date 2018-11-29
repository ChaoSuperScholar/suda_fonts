<template>
	<div class="header flex-col">
		<div class="top-title flex-row">
			<img @click="return_page" src="../../static/images/return.png"/>
			<h3>{{title}}</h3>
			<h4></h4>
		</div>
		<div class="line-gradual-change"></div>
		<div class="bottom-tab flex-row">
			<h4 @click="clickLeft" :class="{active : activeLeft}" class="tabLeft">{{tableft}}</h4>
			<h4 @click="clickRight" :class="{active : activeRight}" class="tabRight">{{tabright}}</h4>
		</div>
	</div>
</template>
<script>
	export default{
		data () {
			return {
				activeLeft : true,
				activeRight : false
			}
		},
		//创建之后
  		created: function (){
  			this.activeLeft = this.$parent.activeLeft;
  			this.activeRight = this.$parent.activeRight;
  		},
		methods:{
			return_page (){
				this.$router.go(-1);
			},
  			clickLeft (){
  				this.$parent.isShowLeft = true;
  				this.$parent.isShowRight = false;
  				this.activeLeft = true;
  				this.activeRight = false
  			},
  			clickRight (){
  				this.$parent.isShowLeft = false;
  				this.$parent.isShowRight = true;
  				this.activeLeft = false;
  				this.activeRight = true
  			}
		},
		props : {
			title : String, //接收父组件传递的值
			tableft : String,
			tabright : String
		}
	}
</script>
<style scoped>
	.header{
		width: 100%;
		height: auto;
		background: linear-gradient(to right,#4082cd,#552aa8);
	}
	.top-title{
		width: 100%;
		height: 0.9rem;
		padding-right: 0.3rem;
		justify-content: space-between;
	}
	.top-title img{
		width: 0.34rem;
		height: 0.26rem;
		margin-left: 0.3rem;
	}
	.top-title h3{
		font-size: 0.32rem;
		color: #fefefe;
	}
	.line-gradual-change{
		width: 6.4rem;
		height: 0.03rem;
		background:linear-gradient(to left,#4a88d0,#8ba4de,#4a88d0);
	}
	.bottom-tab{
		width: 100%;
		height: 0.9rem;
		justify-content: space-between;
	}
	.bottom-tab h4{
		font-size: 0.28rem;
		color: #d4d6ff;
		width: 50%;
		text-align: center;
	}
	.active{
		font-size: 0.32rem!important;
		color: #ffffff!important;
	}
</style>