<template>
	<div class="createWallet">
		<headerBar :title="indexTitle"></headerBar>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'createWallet',
        data(){
            return {
            	indexTitle : "创建钱包", //向子组件中传入title数据
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
		components : {  //注册组件
				headerBar
		},
  		//实例方法
  		methods: {
  			
  		}
    }
</script>

<style scoped>
	
</style>
