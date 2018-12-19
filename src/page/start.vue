<template>
	<div class="start">
		<img src="../../static/images/start_01.png"/>
	</div>
</template>

<script>
	export default{
        name: 'start',
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
  				setTimeout(() => {
  					this.$router.replace('indexNew');
  				},1500)
  			})
  		},
  		//实例方法
  		methods: {
  			
  		}
    }
</script>

<style scoped>
	.start{
		width: 100vw;
		height: 100vh;
	}
</style>