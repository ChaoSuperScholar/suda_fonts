<template>
	<div class="game_ranking">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<div class="content flex-col">
						<div class="content-top flex-row">
							<h2>排名</h2>
							<h2>头衔</h2>
							<h2>昵称</h2>
							<h2>生产力</h2>
						</div>
						<div class="content-center">
							<div class="list flex-row" v-for="(list,index) in lists" v-if="index < 50">
                <h4 v-if="index==0"><img src="../../../static/images/game/first.png" alt=""></h4>
                <h4 v-if="index==1"><img  src="../../../static/images/game/second.png" alt=""></h4>
                <h4 v-if="index==2"><img src="../../../static/images/game/thirdly.png" alt=""></h4>
								<h3 v-if="index!=0&index!=1&index!=2">{{index+1}}</h3>
                <h4 class="types" v-if="list.level == 1">普通</h4>
                <h4 class="types" v-if="list.level == 2">理事长</h4>
                <h4 class="types" v-if="list.level == 3">秘书长</h4>
                <h4 class="types" v-if="list.level == 4">会长</h4>
								<h4 class="text flex-row">{{list.nickname}}</h4>
								<h4 class="text flex-row">{{list.profit|numFilter}}</h4>
							</div>
						</div>
					</div>
          <div class="total">
            <h4 class="types"  v-if="list.level == 1">我的头衔：普通</h4>
            <h4 class="types"  v-if="list.level == 2">我的头衔：理事长</h4>
            <h4 class="types"  v-if="list.level == 3">我的头衔：秘书长</h4>
            <h4 class="types"  v-if="list.level == 4">我的头衔：会长</h4>
            <h4>我的社区总人数：{{lists.length}}</h4>
          </div>
					<div class="close-btn" @click="goIndex()">
						<img src="../../../static/images/game/game_play_02.png" alt="">
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'game_ranking',
        data(){
            return {
            	lists : [],
              list:','
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
  			this.getMsg();
  			this.Title();
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
  		},
		filters: {
		/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 0;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			goIndex (){
  				this.$router.replace('game_index');
  			},
			getMsg (){
				this.axios.get('/index/suda_game/weekRank')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						this.lists = data.data;
					} else{
						this.layers(data.message);
					}
				})
			},
        Title(){
          this.axios.get('/index/suda_game/myAccount')
            .then(({data}) => {
              if (data.status == 200) {
                console.log(data);
                this.list = data.data;
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
		font-size: 0.3rem;
		font-weight: bolder;
		color: #f2dfac;
	}
	h3{
		font-size: 0.3rem;
		font-weight: bolder;
		color: #f7b52c;
	}
	h4{
		font-size: 0.24rem;
		color: #5a4d41;
	}
	.bg-father{
		width: 100vw;
		height: 100vh;
		background-image: url(http://www.suda66888.com/game/bg.png);
		background-size: 100% 100%;
	}
	.bg{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,0.6);
	}
	.layer-module{
		width: 7.2rem;
		height: 11.7rem;
		background-image: url(http://suda66888.com/img/game_ranking_01.png);
		background-size: 100% 100%;
		position: relative;
	}
	.close-btn{
		width: 0.84rem;
		height: 0.84rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.7rem;
	}
	.content{
		width: 5.46rem;
		height: 6.9rem;
		background-color: #c78c20;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		margin-top: 2.3rem;
	}
	.content-top{
		width: 5.16rem;
		height: auto;
		padding: 0.14rem 0;
		justify-content: space-between;
	}
	.content-top h2{
		flex: 1;
		text-align: center;
		height: 0.56rem;
		border-right: 0.03rem solid #463317;
	}
	.content-top h2:last-child{
		flex: 2;
		border: none;
	}
	.content-center{
		width: 5.16rem;
		height: 5.5rem;
		background-color: #f9cc73;
		border-radius: 0.1rem;
		border: 0.02rem solid #463317;
		overflow-y: scroll;
		padding: 0.06rem 0;
		justify-content: flex-start;
	}
	.list{
		width: 100%;
		height: 0.64rem;
		background-color: #98b74e;
		margin-bottom: 0.06rem;
	}
	.list h3{
		text-shadow: 0 0 0.06rem #463317;
	}
	.list h3,.list h4{
		text-align: center;
		flex: 1;
	}
	.list h4:last-child{
		text-align: center;
		flex: 2;
	}
	.list img{
		width: 0.5rem;
		height: 0.5rem;
		border-radius: 50%;
	}
	.text{
		display: block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

  .total{
    width: 5.26rem;
    height: 1rem;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
  }
  .total h4{
    padding-top: .3rem;
    font-size: .26rem;
    color: #684d46;

  }
  h4 img{
    margin: 0 auto;
  }



</style>
