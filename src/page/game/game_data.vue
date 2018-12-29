<template>
	<div class="game_data">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
            <div class="num_box" v-show="num_data" >
              <!--收益列表-->
              <div class="num_box_title">
                <p>日期</p>
                <p>车厂收益</p>
                <p>邀请收益</p>
              </div>
              <div class="num_list">
                <ul>
                  <li v-for="item in num_data">
                    <p>{{item[0]}}</p>
                    <p>{{item[1]}}</p>
                    <p>{{item[2]}}</p>
                  </li>
                </ul>
              </div>
            </div>
          <!--总收益-->
            <div class="summary">
              <p>累计车厂收益：{{list[0]}}</p>
              <p>累计邀请收益：{{list[1]}}</p>
              <p>今日收益：{{list[2]}}</p>
            </div>
          <div class="shadown">
            <img @click="goIndex()" src="../../../static/images/game/game_play_02.png" alt="">
          </div>
          <div v-show="num_data==''" class="nones">
            <p>暂无提币记录</p>
          </div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default{
        name: 'game_data',
        data(){
            return {
                num_data : [],
								list : []
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
				this.getMsg();
				this.getData();
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
        goIndex (){
          this.$router.replace('game_index');
        },
				getMsg (){
					this.axios.post('/index/suda_game/profitList',{
						page : '1'
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.num_data = data.data;
						} else{
							this.layers(data.message);
						}
					})
				},
				getData (){
					this.axios.post('/index/suda_game/getProfit')
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
  body{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
	.bg-father{
		width: 100vw;
		height: 100vh;
		background-image: url(../../../static/images/game/bg.png);
		background-size: 100% 100%;

	}
	.bg{
		width: 100vw;
		height: 100vh;
		background-color: rgba(0,0,0,0.6);

	}
	.layer-module{
		width: 7.2rem;
		height: 11.67rem;
		background-image: url(../../../static/images/game/num_li.png);
		background-size: 100% 100%;
		position: relative;
    top: .6rem;
	}
  .num_box{
    width: 5.5rem;
    height: 7.8rem;
   position: absolute;
    top: 3.2rem;

  }
  .num_box_title{
    display: flex;
    flex-flow: row;
    height: .5rem;
    margin: 0 .15rem;
  }
  .num_box_title p{
    flex: 1;
    text-align: center;
    margin-top: .1rem;
    font-size: .24rem;
    font-weight: 900;
    color: #f2dfac;
    line-height: .3rem;
    height: .3rem;
  }
  .num_box_title p:nth-child(2){
    border-left: .02rem solid #463317;
    border-right: .02rem solid #463317;
  }
  .num_list{
    width: 5.2rem;
    height: 6.2rem;
    border-radius: .05rem;
    border: .01rem solid #463317;
    margin: .15rem;
    margin-top: 0;

  }
  .num_list ul{
    overflow: auto;
    width: 100%;
    height: 100%;
  }
  .num_list ul li{
    display: flex;
    flex-flow: row;
    width: 100%;
    height: .64rem;
    margin-top: .04rem;
    background: #98b74e;
  }
  .num_list ul li p{
    flex: 1;
    line-height: .64rem;
    text-align: center;
    font-size: .16rem;
    color: #5a4d41;
    font-weight: 600;
  }
  .num_list ul li p:nth-child(2){
    border-left: .02rem solid #768e33;
    border-right: .02rem solid #768e33;
  }

  .summary{
    width: 5rem;
    margin-top: 9rem;
  }
  .summary p{
    width: 50%;
    float: left;
    font-size: .18rem;
    line-height: .4rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
  .shadown{
    position: absolute;
    z-index: 999;
    bottom: .8rem;
    width: .84rem;
    height: .84rem;
    left:  .05rem;
  }
  .nones{
    font-size: .24rem;
    color: #5a4d41;
    font-weight: 800;
  }
</style>
