<template>
	<div class="game_pay">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
          <div class="pay_top">
            <h2>充值</h2>
            <img @click="goIndex" src="../../../static/images/game/shadown.png" alt="">
          </div>
          <!--input box    充值转换-->
          <div class="Transformation">
            <div class="input_box">
              <span>充值&nbsp;</span>
              <input type="number" v-model="SDT" >
              <span>&nbsp;SDT &nbsp;=&nbsp;</span>
              <input type="number" v-model="sdts" >
              <span>&nbsp;金币</span>
            </div>
            <div class="input_box">
              <span>充值&nbsp;</span>
              <input type="number" v-model="ETH">
              <span>&nbsp;ETH &nbsp;=&nbsp;</span>
              <input type="number" v-model="eths">
              <span>&nbsp;金币</span>
            </div>
          </div>
          <!--按钮-->
          <div class="btns">
            <button>确认充值</button>
          </div>
          <!--说明-->
          <div class="Explain">
            <p>说明：1ETH=1000金币，可充值0.01-119个ETH</p>
          </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'game_pay',
        data(){
            return {
              SDT:'',
              sdts:'',
              ETH:'',
              eths:''

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
  		},
      watch:{
        SDT:function () {
          this.sdts=this.SDT*10
        },
        sdts:function () {
          this.SDT=this.sdts/10;
        },
        ETH:function () {
          this.eths=this.ETH*1000
        },
        eths:function () {
          this.ETH=this.eths/1000
        }
      }
    }
</script>

<style scoped>
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
		width: 5.8rem;
		height: 3.95rem;
    background: #f9cc73;
    border-radius: .1rem;
		background-size: 100% 100%;
    position: relative;
	}
  .pay_top{
    width: 5.8rem;
    height: .6rem;
    background: #98b74e;
    position: absolute;
    top: .1rem;
  }
  .pay_top h2{
    text-align: center;
    font-size: .38rem;
    color: #f7b52c;
    font-weight: 900;
  }
  .pay_top img{
    position: absolute;
    width: .44rem;
    height: .44rem;
    right: .2rem;
    top: .1rem;
  }
  .Transformation{
    width: 4.75rem;
    position: absolute;
    top: .9rem;
  }
  .Transformation .input_box{
    display: flex;
    flex-flow: row;
    margin-top: .2rem;

  }
  .Transformation .input_box span{
    font-size: .18rem;
    color: #463317;
    font-weight: 900;
  }
  .Transformation .input_box input{
    width: 1.25rem;
    padding-left: .08rem;
    height: .45rem;
    border-radius: .1rem;
    border: .01rem solid #463317;
    background: #9a7025;
    font-size: .18rem;
    color: #f9cc73;
    font-weight: 900;
  }
  .btns{
    width: 2.88rem;
    height: .6rem;
    background: #d28326;
    border-radius: .1rem;
    border: 0.02rem solid #463317;
    position: absolute;
    top: 2.6rem;
  }
  .btns button{
    width: 2.78rem;
    height: .5rem;
    background: #f9cc73;
    border-radius: .1rem;
    border: 0.01rem solid #ffffff;
    color: #ffffff;
    font-size: .24rem;
    font-weight: 900;
  }
  .Explain{
    position: absolute;
    top: 3.38rem;
    font-size: .16rem;
    color: #d28326;
    font-weight: 800;
  }
</style>
