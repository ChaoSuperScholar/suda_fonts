<template>
	<div class="footerBar flex-row">
			<router-link to="/wallet">
				<div class="img-1">
					<img :src="img1" alt="">
				</div>
			</router-link>
			<router-link to="transaction">
				<div class="img-2">
					<img :src="img2" alt="">
				</div>
			</router-link>
			<router-link to="application">
				<div class="img-3">
					<img :src="img3" alt="">
				</div>
			</router-link>
			<router-link to="information">
				<div class="img-4">
					<img :src="img4" alt="">
				</div>
			</router-link>
			<router-link to="userCenter">
				<div class="img-5">
					<img :src="img5" alt="">
				</div>
			</router-link>
	</div>
</template>

<script>
	export default{
        name: 'footerBar',
        data(){
            return {

            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
  			this.img1 = this.$parent.img1;
			this.img2 = this.$parent.img2;
			this.img3 = this.$parent.img3;
			this.img4 = this.$parent.img4;
			this.img5 = this.$parent.img5;
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

  		}
    }
</script>

<style scoped>
  body{
    width: 100%;
    height:100vh ;
  }
	.footerBar{
		width: 100%;
		height: 1.4rem;
		border-top: 0.01rem solid #c3c9d5;
		position: fixed;
		left: 0;
		bottom: 0;
		justify-content: space-between;
		background-color: #FFFFFF;
	}
	.footerBar div{
		width: 0.48rem;
		height: 0.74rem;
		margin-bottom: 0.1rem;
	}
	.img-1{
		margin-left: 0.8rem;
	}
	.img-5{
		margin-right: 0.8rem;
	}
</style>
