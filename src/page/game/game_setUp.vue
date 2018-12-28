<template>
	<div class="game_setUp">
    <div class="shadown">
      <img @click="goIndex()" src="../../../static/images/game/game_play_02.png" alt="">
    </div>
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
            <!--个人资料-->
          <div class="setUp_box">
            <div class="name">
              <img src="../../../static/images/game/header.png" alt="">
              <p>账号：{{name}}</p>
              <h2>默认账号</h2>
            </div>
            <div class="address">
              <p>钱包地址：{{address}}</p>
            </div>
          </div>
          <!--按钮开关-->
          <div class="choose">
            <div class="effects">
              <p>游戏音效</p>
              <div class="true_li" v-if="effects">
                <div class="big_box">
                  <span @click="effects=!effects">on</span>
                </div>
              </div>
              <div class="false_li" v-else>
                <div class="big_box">
                  <span @click="effects=!effects">off</span>
                </div>
              </div>
            </div>
            <div class="music">
                <p>游戏音乐</p>
                <div class="true_li" v-if="music">
                  <div class="big_box">
                    <span @click="music=!music">on</span>
                  </div>
                </div>
                <div class="false_li" v-else>
                  <div class="big_box">
                    <span @click="music=!music">off</span>
                  </div>
                </div>
              </div>
          </div>
          <div class="btns">
            <p>确认</p>
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
              name:'454564564564',
              address:'15135%5313513%%123%123 %123%123%123%123%123%123%123% %123%',
              effects:true,//音效
              music:true
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
        goIndex (){
          this.$router.replace('game_index');
        },
  		}
    }
</script>

<style scoped>
  body{
    position: relative;
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
		height: 9.5rem;
		background-image: url(../../../static/images/game/setUp.png);
		background-size: 100% 100%;
		position: relative;
	}
  .setUp_box{
    width: 5.2rem;
    height: 2.45rem;
    background: #f9cd76;
    border: .02rem solid #000000;
    border-radius: .1rem;
    position: absolute;
    top: 3.3rem;;
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
   position: absolute;
    right: .3rem;
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
  .choose{
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
    position: absolute;
    z-index: 999;
    width: .84rem;
    height: .84rem;
    bottom: 2.7rem;
    left: .23rem;
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
  }
</style>
