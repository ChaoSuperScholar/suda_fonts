<template>
	<div class="myInvestment">
		<headerBar :title="indexTitle"></headerBar>
		<!-- 循环数据 -->
		<div class="list flex-col" v-for="list in lists">
			<div class="list-top flex-row">
				<h4>{{list.title}}</h4>
				<div class="list-top-right flex-row">
					<img :src="list.icon" alt="">
					<h4>{{list.type}}</h4>
				</div>
			</div>
			<div class="list-bottom flex-col">
				<div class="list-bottom-top flex-row">
					<div class="list-tab flex-col">
						<h4>{{list.num|numFilter}}</h4>
						<h5>投资数量</h5>
					</div>
					<div class="list-tab flex-col">
						<h4>{{list.start}}</h4>
						<h5>开始时间</h5>
					</div>
					<div class="list-tab flex-col">
						<h4>{{list.cycle}}天</h4>
						<h5>周期时间</h5>
					</div>
				</div>
				<div class="list-btn flex-col" v-if="list.status == 1">
					剩余周期{{list.surplus}}天
				</div>
				<div class="list-btn btnBlue flex-col" v-if="list.status == 2" @click="expiration(list)">
					到期转出
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'myInvestment',
        data(){
            return {
            	indexTitle : "我的投资",
				lists : []
            }
        },
        // 创建之前
  		beforeCreate: function () {
  			
  		},
  		//创建之后
  		created: function (){
  			this.getMsg();
  		},
  		//挂载之前
  		beforeMount: function (){
  			
  		},
		// 注册组件
		components:{
			headerBar
		},
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){
  				
  			})
  		},
  		//实例方法
  		methods: {
  			getMsg (){
				this.axios.post('/index/suda_financial/MyInvestment',{
					page : "1"
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
			expiration (list){
				this.axios.post('/index/suda_financial/Profit',{
					id : list.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.layers(data.message);
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	h4{
		font-size: 0.3rem;
		color: #343b49;
	}
	h5{
		font-size: 0.3rem;
		color: #8d949f;
	}
	.list{
		width: 100%;
		height: auto;
		border-top: 0.14rem solid #eceff4;
		justify-content: space-between;
	}
	.myInvestment .list:last-child{
		border-bottom: 0.14rem solid #eceff4;
	}
	.list-top{
		width: 100%;
		height: 0.9rem;
		justify-content: space-between;
		border-bottom: 0.01rem solid #dbdfe7;
	}
	.list-top h4:first-child,.list-bottom-left{
		margin-left: 0.3rem;
	}
	.list-top-right,.list-bottom-right{
		margin-right: 0.3rem;
	}
	.list-top-right img{
		width: 0.42rem;
		height: 0.42rem;
		margin-right: 0.1rem;
	}
	.list-bottom{
		width: 100%;
		height: auto;
		padding: 0.4rem 0;
	}
	.list-bottom-top{
		width: 100%;
		height: 1.2rem;
	}
	.list-tab{
		flex: 1;
	}
	.list-tab:nth-child(2){
		border-left: 0.01rem solid #dbdfe7;
		border-right: 0.01rem solid #dbdfe7;
	}
	.list-btn{
		width: 5rem;
		height: 0.84rem;
		border-radius: 0.1rem;
		font-size: 0.34rem;
		color: #ffffff;
		background-color: #9ca5b7;
		margin-top: 0.4rem;
	}
	.btnBlue{
		background-color: #3f75e9;
	}
</style>
