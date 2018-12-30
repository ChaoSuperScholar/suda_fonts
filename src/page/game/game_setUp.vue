<template>
	<div class="game_setUp">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
            <!--个人资料-->
          <!-- <div class="setUp_box">
            <div class="name">
              <img src="../../../static/images/game/header.png" alt="">
              <p>账号：{{list.phone}}</p>
              <h2>默认账号</h2>
            </div>
            <div class="address">
              <p>钱包地址：{{list.address}}</p>
            </div>
          </div> -->
          <!--按钮开关-->
          <!-- <div class="choose">
            <div class="effects">
              <p>游戏音效</p>
              <div class="true_li" v-if="list.game_sound == 2" @click="closeSound()">
                <div class="big_box">
                  <span @click="effects=!effects">on</span>
                </div>
              </div>
              <div class="false_li" v-else @click="openSound()">
                <div class="big_box">
                  <span @click="effects=!effects">off</span>
                </div>
              </div>
            </div>
            <div class="music">
                <p>游戏音乐</p>
                <div class="true_li" v-if="list.game_music == 2" @click="closeMusic()()">
                  <div class="big_box">
                    <span @click="music=!music">on</span>
                  </div>
                </div>
                <div class="false_li" v-else @click="openMusic()">
                  <div class="big_box">
                    <span @click="music=!music">off</span>
                  </div>
                </div>
              </div>
          </div> -->
					<div class="layer-child flex-col">
						<div class="list-father flex-col">
							<div class="list flex-row">
								<div class="head-img-father flex-col">
									<div class="head-img">
										<div>
											<div>
												<img :src="msg.avatar" />
											</div>
										</div>
									</div>
								</div>
								<h5>账号:{{list.phone}}</h5>
								<h2>默认账号</h2>
							</div>
							<div class="list flex-row">
								<h5>钱包地址:{{list.address}}</h5>
							</div>
						</div>
						<div class="choose flex-row">
							<div class="choose-left flex-row">
								<h4>游戏音效</h4>
								<img src="../../../static/images/game/game_setup_01.png" alt="" v-if="list.game_sound == 2" @click="closeSound()">
								<img src="../../../static/images/game/game_setup_02.png" alt="" v-else @click="openSound()">
							</div>
							<div class="choose-right flex-row">
								<h4>游戏音乐</h4>
								<img src="../../../static/images/game/game_setup_01.png" alt="" v-if="list.game_music == 2" @click="closeMusic()">
								<img src="../../../static/images/game/game_setup_02.png" alt="" v-else @click="openMusic()">
							</div>
						</div>
					</div>
					<div class="sure" @click="goIndex()"></div>
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
        name: 'game_setUp',
        data(){
            return {
							list : [],
							msg : "",
							effects : true,
							music : true
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
				this.getMsg();
				this.getUserInfo();
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
					this.axios.get('/index/suda_game/myAccount')
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.list = data.data;
						} else{
							this.layers(data.message);
						}
					})
				},
				closeMusic (){
					this.axios.post('/index/suda_game/editSet',{
						keys : "game_music",
						status : 1
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
							this.getMsg();
						} else{
							this.layers(data.message);
						}
					})
				},
				openMusic (){
					this.axios.post('/index/suda_game/editSet',{
						keys : "game_music",
						status : 2
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
							this.getMsg();
						} else{
							this.layers(data.message);
						}
					})
				},
				closeSound (){
					this.axios.post('/index/suda_game/editSet',{
						keys : "game_sound",
						status : 1
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
							this.getMsg();
						} else{
							this.layers(data.message);
						}
					})
				},
				openSound (){
					this.axios.post('/index/suda_game/editSet',{
						keys : "game_sound",
						status : 2
					})
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data);
							this.layers(data.message);
							this.getMsg();
						} else{
							this.layers(data.message);
						}
					})
				},
				getUserInfo (){
					this.axios.get('/index/suda_user/user_info')
					.then(({data}) => {
						if (data.status == 200) {
							console.log(data.message);
							this.msg = data.data;
						} else{
							this.layers(data.message);
						}
					})
				}
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
		background-image: url(http://www.suda66888.com/game/setUp.png);
		background-size: 100% 100%;
		position: relative;
		justify-content: flex-start;
	}
	.choose{
		width: 4.9rem;
		height: auto;
		justify-content: space-between;
		margin: 0.5rem 0;
	}
	.choose h4{
		font-size: 0.26rem;
		font-weight: bolder;
		color: #f2dfac;
		text-shadow: 0 0 0.06rem ##463317;
		width: 0.6rem;
		line-height: 1.4;
		word-break: break-all;
	}
	.choose img{
		width: 1.4rem;
		height: 0.6rem;
		margin-left: 0.2rem;
	}
	.sure{
		width: 2.34rem;
		height: 0.87rem;
		background-image: url(http://www.suda66888.com/game/game_setup_03.png);
		background-size: 100% 100%;
		margin-top: 0.2rem;
	}
	.close-btn{
		width: 0.84rem;
		height: 0.84rem;
		position: absolute;
		left: 0.1rem;
		bottom: 0.7rem;
	}
	.layer-child{
		width: 5.5rem;
		height: auto;
		background-color: #c78c20;
		border-radius: 0.1rem;
		border: 0.02rem solid #463317;
		margin-top: 3.2rem;
	}
	.list-father{
		width: 5.2rem;
		height: auto;
		border-radius: 0.1rem;
		border: 0.02rem solid #463317;
		background-color: #f9cd76;
		margin-top: 0.1rem;
		padding-top: 0.04rem;
	}
	.list{
		width: 100%;
		height: auto;
		background-color: #98b74e;
		margin-bottom: 0.04rem;
		justify-content: space-between;
		padding: 0.1rem 0;
	}
	.list h5{
		font-size: 0.24rem;
		color: #4f4a44;
		word-break: break-all;
		line-height: 1.4;
		margin: 0 0.2rem;
	}
	.list h2{
		font-size: 0.32rem;
		font-weight: bolder;
		color: #fdb52d;
		text-shadow: 0 0 0.06rem #463317;
		margin-right: 0.2rem;
	}
	.head-img-father{
		width: 0.9rem;
		height: 1.04rem;
		background-image: url(http://www.suda66888.com/game/game_index_01.png);
		background-size: 100% 100%;
		margin-left: 0.2rem;
	}
	.head-img {
		width: 0.7rem;
		height: 0.6rem;
		transform: rotate(30deg);
		overflow: hidden;
		margin-bottom: 0.1rem;
	}
	.head-img div,.head-img img {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.head-img> div {
		transform: rotate(60deg);
	}
	.head-img> div> div {
		transform: rotate(-120deg);
	}
	
	
	
  .setUp_box{
    width: 5.2rem;
    height: 2.45rem;
    background: #f9cd76;
    border: .02rem solid #000000;
    border-radius: .1rem;
    /* position: absolute; */
    /* top: 3.3rem;; */
		margin-top: 3.3rem;
  }
  .setUp_box .name{
    width: 100%;
    height: 1rem;
    display: flex;
    flex-flow: row;
    line-height: 1rem;
    background: #98b74e;
    margin: .05rem 0;
    position: relative;
  }
  .setUp_box .name img{
    width: .75rem;
    height: .9rem;
    margin: 0.08rem .2rem;
  }
  .setUp_box .name p{
    font-size: .24rem;
    color: #4f4a44;
    font-weight: 800;
  }
  .setUp_box .name h2{
    font-size: .24rem;
    color: #fdb52d;
    font-weight: 900;
    padding-left: .1rem;
  }
  .setUp_box .address{
    font-size: .24rem;
    color: #4f4a44;
    font-weight: 800;
    width: 4.8rem;
    padding: .15rem .2rem;
    line-height: .35rem;
    background: #98b74e;
  }
  /* .choose{
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    width: 5rem;
    position: absolute;
    top: 6rem;
  }
  .choose .effects{
    width: 2rem;
    display: flex;
    flex-flow: row;
    margin-top: .6rem;
  }
  .choose .music{
    width: 2rem;
    display: flex;
    flex-flow: row;
    margin-top: .6rem;
  }
  .choose .effects p{
    width: .5rem;
    height: .5rem;
    font-size: .2rem;
    font-weight: 900;
    color: #f2dfac;
    line-height: .25rem;
  }
  .choose .music p{
    width: .5rem;
    height: .5rem;
    font-size: .2rem;
    font-weight: 900;
    color: #f2dfac;
    line-height: .25rem;
  }
.true_li{
  width: 1.4rem;
  height: .45rem;
  background: #9a7025;
  -moz-box-shadow:0px -5px 11px #333333; -webkit-box-shadow:0px -5px 11px #333333; box-shadow:0px -5px 11px #333333;
  border-radius: .1rem;
  border: .02rem solid #000000;
  position: relative;
}
  .true_li .big_box{
    width: .48rem;
    height: .48rem;
    position: absolute;
    top: -.05rem;
    background: #b87421;
    padding: 0 .08rem  .08rem 0;
    border-radius: .1rem;
  }
  .false_li{
    width: 1.4rem;
    height: .45rem;
    background: #ffde3b ;
    -moz-box-shadow:0px -5px 11px #333333; -webkit-box-shadow:0px -5px 11px #333333; box-shadow:0px -5px 11px #333333;
    border-radius: .1rem;
    border: .02rem solid #000000;
    position: relative;
  }
  .false_li .big_box{
    width: .48rem;
    height: .48rem;
    position: absolute;
    top: -.05rem;
    right: 0;
    background: #b87421;
    padding: 0 .08rem  .08rem 0;
    border-radius: .1rem;

  }
  .false_li span{
    width: .48rem;
    height: .48rem;
    text-align: center;
    line-height: .48rem;
    color: #463317;
    background: #fee485;
    font-size: .16rem;
    display: block;
    border-bottom: 0.02rem solid #ffffff;
    border-right: 0.02rem solid #ffffff;
    border-radius: .1rem;
    position: absolute;
  }
  .true_li span{
    width: .48rem;
    height: .48rem;
    text-align: center;
    line-height: .48rem;
    color: #463317;
    background: #fee485;
    font-size: .16rem;
    display: block;
    border-bottom: 0.02rem solid #ffffff;
    border-right: 0.02rem solid #ffffff;
    border-radius: .1rem;
    position: absolute;
  }


  .shadown{
    width: .84rem;
    height: .84rem;
    margin-top: 7rem;
    margin-left: -6.25rem;
  }
  .btns{
    position: absolute;
    z-index: 99999;
    top: 8rem;
    background: url("../../../static/images/game/btns.png");
    width: 2.2rem;
    height: .76rem;
    background-size: 100% 100%;

  }
  .btns p{
    text-align: center;
    font-size: .24rem;
    font-weight: 900;
    color: #fef3cd;
    line-height: .5rem;
  } */
</style>
