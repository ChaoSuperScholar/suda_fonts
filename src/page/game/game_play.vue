<template>
	<div class="game_play">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<div class="tab-father flex-col">
						<div class="tab-child flex-col">
							<div class="tab-card" style="display: block;">
								<p>注册赠送：已注册S-TOKEN的用户首次登陆即可获得一个价值500金币的建筑和520金币;</p>
								<p>邀请注册： 汽车大亨的推荐关系与S-TOKEN的推荐关系是一致的;</p>
								<p>免费玩法：不充值的情况下，可以花500金币任意升级，剩余20金币留下来，电力值不足时可以用来购买电力；</p>
								<p>电力消耗：持续生产会消耗电力，满电力情况最多可维持24小时的生产，持续维持电力，确保产出全额收益;</p>
								<p>电力上限：电力上限为24，每小时消耗1点电力，充电一次消耗5金币，自动补满， 建议在电力值不足的时候进行充电；</p>
								<p>生产力赠送：购不同的建筑初始赠送的生产力不同，每栋建筑升级达标后还有相应的赠送，具体参照《生产力规则》；</p>
								<p>预计收益： 生产力越高， 收益越多。根据前一日SDT价格预估全年收益；</p>
								<p>收益上限：收益最多累积24小时的产量，达到上限后将停止生产，同时停止消耗电力，停止生产期间推荐人也无法获得奖励，建议及时领取；</p>
								<p>钱包绑定规则：自动绑定S-TOKEN当前钱包地址，若无地址则需创建钱包；
充值须知：充值自动扣除当前账户钱包地址的ETH或SDT；</p>
								<p>密码须知：游戏的登录密码和交易密码和钱包的登录密码和交易密码一致；</p>
								<p>单满奖励：外观、装修、运营三项任意一项满级，额外赠送该项基础生产力的5%；</p>
								<p>三满奖励：任意建筑的外观、装修、运营三项都满级，额外赠送该建筑基础生产力的5%；</p>
								<p>全满奖励：所有建筑的外观、装修、运营三项都满级，额外赠送所有建筑基础生产力的5%；</p>
								<p>建筑开发：只有一个建筑满级时才可以发开下一个建筑，越往后的建筑赠送生产力越多；</p>
							</div>
							<div class="tab-card">
								<p>1.玩家通过S-TOKEN钱包地址向游戏转账即可完成充值</p>
								<p>2.最少充值0.01个ETH；</p>
								<p>3.1ETH=1000金币</p>
							</div>
							<div class="tab-card">
								<p>邀请好友注册APP，绑定伙伴关系。被邀请好友实际充值大于0.1ETH后玩家可获得相应的奖励与收益；若被邀请好友充值未满0.1ETH，则无法享受任何邀请奖励。得到邀请奖励需要满足：1、当自身生产力不小于受邀请好友生产力的50%2、成为汽车协会成员。</p>
								<p>充值收益：玩家充值ETH兑换金币后，投入游戏体验，将获得SDT收益；</p>
								<p>邀请奖励：成功分享好友注册并激活后（首次升级），赠送20个金币；每日得到受邀请好友生产收益的10%（一代）+10%（二代）。</p>
								<p>邀请有效玩家10人（充值大于1ETH），则额外再奖励500金币；</p>
								<p>全球分红：成为协会成员将享受平台每周的SDT分红；</p>
							</div>
							<div class="tab-card">
								<p>汽车协会成员头衔分为理事长、秘书长、会长三个头衔。</p>
								<p>玩家将游戏直接邀请给好友后，当一位好友以及该好友再度邀请给更多的人，累 积充值达到500ETH，这样的好友有三个之后，即500ETH*3，玩家即成协会理事；</p>
								<p>当理事所直接邀请的其中三位好友也成为理事后，该理事晋升为秘书长；</p>
								<p>当该秘书长所直接邀请的其中三位好友也成为秘书长（500ETH* 3* 3* 3),该秘书长晋升为会长.</p>
							</div>
						</div>
					</div>
					<div class="tab flex-row">
						<template v-for="(tab,index) in tabsName">
							<div class="tab-btn flex-col"  @click="tabsSwitch(tab,index)" v-bind:class="{active:tab.isActive}">
								<h4>{{tab.name}}</h4>
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
            	tabsName: [
            		{  
            			name: "介绍",  
            			isActive: true,
            			coin: "1"
            		},
            		{  
            			name: "充值",  
            			isActive: false,
            			coin: "2"
            		},
            		{  
            			name: "奖励",  
            			isActive: false,
            			coin: "3"
            		},
            		{  
            			name: "规则",  
            			isActive: false,
            			coin: "4"
            		}
            	],  
            	active: false,
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
  			tabsSwitch: function(tab,tabIndex) {
  					let tabCardCollection = document.querySelectorAll(".tab-card"),  
  						len = tabCardCollection.length;  
  							for(var i = 0; i < len; i++) {  
  								tabCardCollection[i].style.display = "none";  
  							this.tabsName[i].isActive = false;  
  						}  
  					this.tabsName[tabIndex].isActive = true;  
  					tabCardCollection[tabIndex].style.display = "block";
  			},
			goIndex (){
				this.$router.replace('game_index');
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
		background-image: url(http://www.suda66888.com/game/game_play_01.png);
		background-size: 100% 100%;
		position: relative;
	}
	.tab-card{
		width: 100%;
		height: 100%;
		display: none;
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
