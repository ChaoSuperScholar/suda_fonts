<template>
	<div class="myCommunityChild">
    <div style="height: auto;width: 100%">
		<headerBar :title="indexTitle"></headerBar>
		<div class="bg"></div>
		<div class="center-module flex-col">
			<h2>{{user.num}}</h2>
			<h4>{{user.nickname}}的社区</h4>
		</div>
		<div class="list-father flex-col">
			<div class="list flex-row">
				<h5>ID</h5>
				<h5>昵称</h5>
				<h5>社区人数</h5>
			</div>
			<div class="list flex-row" v-for="list in lists" @click="goChild(list)">
				<h5>{{list.id}}</h5>
				<h5>{{list.nickname}}</h5>
				<h5>{{list.num}}</h5>
			</div>
			<!-- 没有数据 -->
			<nodata v-if="!lists.length"></nodata>
		</div>
    </div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'myCommunityChild',
        data(){
            return {
            	indexTitle : "",
				user : [],
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
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
  		},
		// 注册组件
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
  			getMsg (){
				this.axios.post('/index/suda_team/childTeam',{
					page : "1",
					id : this.$route.query.id
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data.message);
						let res = data.data;
						this.user = res.user;
						this.lists = res.list;
						this.indexTitle = this.user.nickname + "的社区";
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	h2{
		font-size: 0.74rem;
		font-weight: bolder;
		color: #efeff0;
		margin-bottom: 0.7rem;
	}
	h4{
		font-size: 0.46rem;
		color: #efeff0;
		margin-bottom: 0.5rem;
	}
	h5{
		font-size: 0.32rem;
		color: #efeff0;
	}
	.bg{
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		z-index: -10;
		background-color: #1f1f2e;
	}
	.center-module{
		width: 5.5rem;
		height: 3.75rem;
		background-image: url(http://www.suda66888.com/game/myCommunity_02.png);
		background-size: 100% 100%;
		justify-content: flex-end;
    margin: 0.1rem auto 0;
	}
	.list-father{
		width: 6.9rem;
		height: auto;
		min-height: 4.6rem;
		border: 0.02rem solid #b7b9c5;
		border-radius: 0.1rem;
		justify-content: flex-start;
    margin: .6rem auto 0;
	}
	.list{
		width: 6.4rem;
		height: auto;
		padding: 0.3rem 0;
		justify-content: space-between;
		border-bottom: 0.02rem solid #545468;
	}
	.list h5{
		flex: 1;
	}
	.list h5:nth-child(2){
		text-align: left;
	}
	.list h5:nth-child(3){
		text-align: right;
	}
</style>
