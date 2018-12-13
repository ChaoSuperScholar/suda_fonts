<template>
	<div class="pageHead flex-col">
		<slot></slot>
	</div>
</template>

<script>
	export default{
        name: 'pageHead',
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
  		//实例方法
  		methods: {
  			
  		},
		props: {
			title: {
				title: String
			}
		},
    }
</script>

<style scoped>
	.pageHead{
		width: 100%;
		height: 1rem;
		background-color: #393f4c;
		font-size: 0.36rem;
		color: #ffffff;
		position: fixed;
		left: 0;
		top: 0;
	}
</style>
