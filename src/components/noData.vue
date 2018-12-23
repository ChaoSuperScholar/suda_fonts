<template>
	<div class="noData">
		<!--没有数据-->
		<div class="no-data flex-row">
			暂无数据
		</div>
	</div>
</template>

<script>
	export default{
        name: 'noData',
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
  			
  		}
    }
</script>

<style scoped>
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>
