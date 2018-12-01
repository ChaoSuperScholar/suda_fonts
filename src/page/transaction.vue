<template>
	<div class="transaction">
		<footerBar></footerBar>
	</div>
</template>

<script>
	import footerBar from '../components/footerBar'
	export default{
        name: 'transaction',
        data(){
            return {
            	img1 : require('../../static/images/indexNew_01.png'),
            	img2 : require('../../static/images/indexNew_02_de.png'),
            	img3 : require('../../static/images/indexNew_03.png'),
            	img4 : require('../../static/images/indexNew_04.png'),
            	img5 : require('../../static/images/indexNew_05.png')
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
		//注册组件
		components : {
			footerBar
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
	
</style>
