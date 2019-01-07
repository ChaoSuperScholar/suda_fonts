<template>
	<div class="game_play">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<div class="tab-father flex-col">
						<div class="tab-child flex-col">
							<div class="tab-card" @click="this.getMsg(62);" v-show="show==1">
						    {{play}}
							</div>
							<div class="tab-card" @click="this.getMsg(63);" v-show="show==2">
								{{play}}
							</div>
							<div class="tab-card" @click="this.getMsg(64);" v-show="show==3" >
								{{play}}
							</div>
							<div class="tab-card" @click="this.getMsg(65);" v-show="show==4">
							{{play}}
							</div>
						</div>
					</div>
					<div class="tab flex-row">
						<template>
              <div class="tab-btn flex-col" @click="goShow1" :class="{active: show == 1}">
                <h4>介绍</h4>
              </div>
              <div class="tab-btn flex-col" @click="goShow2" :class="{active: show == 2}">
                <h4>充值</h4>
              </div>
              <div class="tab-btn flex-col" @click="goShow3" :class="{active: show == 3}">
                <h4>奖励</h4>
              </div>
              <div class="tab-btn flex-col" @click="goShow4" :class="{active: show == 4 }">
                <h4>规则</h4>
              </div>
						</template>
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
        name: 'game_play',
        data(){
            return {
              play:'',
            	show: 1,
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
        this.getMsg(62);
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
  		    goShow1:function () {
            this.getMsg(62);
            this.show=1;
          },
        goShow2:function () {
          this.getMsg(63);
          this.show=2;
        },
        goShow3:function () {
          this.getMsg(64);
          this.show=3;
        },
        goShow4:function () {
          this.getMsg(65);
          this.show=4;
        },
			goIndex (){
				this.$router.replace('game_index');
			},
        getMsg (id){
          this.axios.post('/index/suda_game/gameNoticeInfos',{
            id : id
          })
            .then(({data}) => {
                  console.log(data);
                  if( data.status == 200){
                    this.play = data.data.desc;
                    console.log(this.play);
                  }
          })
        },
  		}
    }
</script>

<style scoped>
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
		height: 9.5rem;
		background-image: url(http://www.suda66888.com/game/game_play_01.png);
		background-size: 100% 100%;
		position: relative;
	}
	.tab-card{
		width: 100%;
		height: 100%;
		overflow-y: scroll;
	}
	.tab-father{
		width: 5.2rem;
		height: 4.4rem;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		background-color: #c78c20;
		margin-top: 2.5rem;
	}
	.tab-child{
		width: 5.1rem;
		height: 4.3rem;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		background-color: #98b74e;
	}
	.tab{
		width: 5.24rem;
		height: auto;
		justify-content: space-around;
	}
	.tab .tab-btn{
		width: 1.22rem;
		height: 0.66rem;
		background-image: url(http://www.suda66888.com/game/game_play_03.png);
		background-size: 100% 100%;
	}
	.tab-btn h4{
		font-size: 0.26rem;
		font-weight: bolder;
		color: #fffcfb;
		margin: 0 0.1rem 0.1rem 0;
	}
	.tab .active{
		background-image: url(http://www.suda66888.com/game/game_play_04.png);
		background-size: 100% 100%;
	}
	.tab .active h4{
		margin: 0;
	}
	.tab-card p{
		font-size: 0.22rem;
		color: #4e4944;
		line-height: 1.3;
		margin: 0.1rem 0.06rem;
	}
	.close-btn{
		width: 0.84rem;
		height: 0.84rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.7rem;
	}
</style>
