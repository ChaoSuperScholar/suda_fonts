<template>
	<div class="start">
		
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
			this.getMsg();
			this.getStatus();
  		},
  		//挂载之前
  		beforeMount: function (){
  			
  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){
				this.axios.get('/index/suda_wallet/total_coin')
				.then(({data}) => {
					if (data.status === 10001) {
						console.log(data);
						this.$router.replace('indexNew');
					} else {
						return false;
					}
				})
  			})
  		},
  		//实例方法
  		methods: {
			getStatus (){
				this.axios.get('/index/suda_wallet/total_coin')
				.then(({data}) => {
					if (data.status === 10001) {
						console.log(data);
						this.$router.replace('indexNew');
					} else if(data.status === 10004){
						this.$router.replace('indexNew');
					} else{
						return false;
					}
				})
			},
  			getMsg (){
				let ls = window.localStorage;
				/* ls.setItem('isLogin','no'); */
				if (ls.getItem('isLogin') === 'yes') {
					this.$router.replace({
						path:'/wallet',
						name:'wallet'
					})
				} else{
					this.$router.replace({
						path:'/indexNew',
						name:'indexNew'
					})
				}
			}
  		}
    }
</script>

<style scoped>
	.start{
		width: 100vw;
		height: 100vh;
	}
</style>