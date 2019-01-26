<template>
	<div class="game_pay">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
          <div class="pay_top flex-col">
            <h2>充值</h2>
            <img @click="goIndex" src="../../../static/images/game/shadown.png" alt="">
          </div>
					<div class="tab flex-row">
						<div class="tba-left flex-row" @click="clickLeft()">
							<h4>选择:</h4>
							<div class="choose flex-col">
								<img src="../../../static/images/game/game_pay_03.png" alt="" v-if="activeLeft">
							</div>
							<h4>SDT充值</h4>
						</div>
						<div class="tab-right flex-row" @click="clickRight()">
							<div class="choose flex-col">
								<img src="../../../static/images/game/game_pay_03.png" alt="" v-if="activeRight">
							</div>
							<h4>ETH充值</h4>
						</div>
					</div>
          <!--input box    充值转换-->
          <div class="Transformation">
						<div class="flex-col" v-show="showLeft">
							<div class="input_box flex-row" >
								<span>充值&nbsp;</span>
								<input type="number" v-model="SDT" >
								<span>&nbsp;SDT &nbsp;=&nbsp;</span>
								<input type="number" v-model="sdts" >
								<span>&nbsp;金币</span>
							</div>
							<!--按钮-->
							<div class="btns flex-col" @click="btnLeft()"></div>
						</div>
						<div class="flex-col" v-show="showRight">
							<div class="input_box flex-row">
								<span>充值&nbsp;</span>
								<input type="number" v-model="ETH">
								<span>&nbsp;ETH &nbsp;=&nbsp;</span>
								<input type="number" v-model="eths">
								<span>&nbsp;金币</span>
							</div>
							<!--按钮-->
							<div class="btns flex-col" @click="btnRight()"></div>
						</div>
          </div>
          <!--说明-->

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
              eths:'',
              sdt_sdt_rate:'',
              eth_rate:'',
							activeLeft : true,
							activeRight : false,
							showLeft : true,
							showRight : false
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
            this.getMsg()
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

        getMsg (){
          this.axios.get('/index/suda_game/index')
            .then(({data}) => {
              if (data.status == 200) {
                console.log(data.message);
                let res = data.data;
                this.eth_rate=res.eth_rate;
                this.sdt_rate=res.sdt_rate;
                console.log( this.sdt_rate);
              } else {
                this.layers(data.message);
              }
            })
        },
        goIndex (){
          this.$router.replace('game_index');
        },
				clickLeft (){
					this.activeLeft = true;
					this.activeRight = false;
					this.showLeft = true;
					this.showRight = false;
				},
				clickRight (){
					this.activeLeft = false;
					this.activeRight = true;
					this.showLeft = false;
					this.showRight = true;
				},
				btnLeft (){
					this.axios.post('/index/suda_game/rechangeGold',{
						num : this.SDT,
						type : "SDT"
					})
					.then(({data}) => {
						if (data.status == 200) {
							this.layers(data.message);
							this.SDT = ""
						} else{
							this.layers(data.message);
						}
					})
				},
				btnRight (){
					this.axios.post('/index/suda_game/rechangeGold',{
						num : this.ETH,
						type : "ETH"
					})
					.then(({data}) => {
						if (data.status == 200) {
							this.layers(data.message);
							this.ETH = ""
						} else{
							this.layers(data.message);
						}
					})
				}
  		},

      watch:{
        SDT:function () {
          this.sdts=this.SDT *  Number(this.sdt_rate)
        },
        sdts:function () {
          this.SDT=this.sdts /  Number(this.sdt_rate)
        },
        ETH:function () {
          this.eths=this.ETH * Number(this.eth_rate)
        },
        eths:function () {
          this.ETH=this.eths / Number(this.eth_rate)
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
		width: 5.8rem;
		height: auto;
		padding-bottom: 0.2rem;
    background: #f9cc73;
    border-radius: .1rem;
		position: relative;
		background-size: 100% 100%;
		justify-content: flex-start;
	}
  .pay_top{
    width: 5.8rem;
    height: .6rem;
    background: #98b74e;
    margin-top: 0.1rem;
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
    top: .2rem;
  }
  .Transformation{
    width: 5.2rem;
    height: auto;
		margin-top: 0.2rem;
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
    width: 1rem;
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
    height: .64rem;
		background-image: url(http://www.suda66888.com/game/game_pay_01.png);
		background-size: 100% 100%;
		margin-top: 0.2rem;
  }
  .Explain{
		width: 5.2rem;
		height: auto;
    font-size: .16rem;
    color: #d28326;
    font-weight: bolder;
		line-height: 1.2;
		margin-top: 0.2rem;
  }
	.tab{
		width: 4.8rem;
		height: auto;
		justify-content: space-between;
	}
	.tab h4{
		font-size: .18rem;
		color: #463317;
		font-weight: bolder;
	}
	.choose{
		width: 0.32rem;
		height: 0.32rem;
		background-image: url(http://www.suda66888.com/game/game_pay_02.png);
		background-size: 100% 100%;
		margin: 0 0.1rem;
	}
	.choose img{
		width: 0.25rem;
		height: 0.25rem;
	}
</style>
