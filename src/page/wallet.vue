<template>
  <div class="heig">
    <div class="wallet" style="height: auto;width: 100%">
      <div class="top-bg flex-col">
        <div class="top-btn flex-row">
          <router-link to="receivables">
            <img src="../../static/images/indexNew_06.png" alt="">
          </router-link>
          <router-link to="addAssets">
            <img src="../../static/images/indexNew_07.png" alt="">
          </router-link>
        </div>
        <h4>{{myname}}</h4>
        <h5><span>{{totalAssets|numFilter}}</span>总资产(￥)</h5>
      </div>
      <div class="list flex-row" v-for="list in lists" @click="goDetails(list)">
        <div class="list-left flex-col">
          <img :src="list.img" alt="">
        </div>
        <div class="list-right flex-col">
          <div class="list-text top flex-row">
            <h4>{{list.title}} <span>({{list.num|numFilter4}})</span></h4>
            <h5>￥{{list.price|numFilter}}</h5>
          </div>
          <div class="list-text bottom flex-row">
            <h5>≈￥{{list.money|numFilter4}}</h5>
            <h5 class="h5-green" v-if="list.up_down > 0 & list.title != 'SDT'">+{{list.up_down}}% ↑</h5>
            <h5 class="h5-red" v-if="list.up_down < 0 & list.title != 'SDT'">{{list.up_down}}% ↓</h5>
          </div>
        </div>
      </div>
      <!--没有数据-->
      <div class="no-data flex-row" v-if="!lists.length">
        暂无数据
      </div>
      <footerBar></footerBar>
    </div>
  </div>

</template>

<script>
	import footerBar from '../components/footerBar'
	export default{
        name: 'wallet',
        data(){
            return {
				myname : "名字的默认显示",
            	totalAssets : "0",
				lists : [],
				imgUrl : [],
				img1 : require('../../static/images/indexNew_01_de.png'),
				img2 : require('../../static/images/indexNew_02.png'),
				img3 : require('../../static/images/indexNew_03.png'),
				img4 : require('../../static/images/indexNew_04.png'),
				img5 : require('../../static/images/indexNew_05.png')
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
		components : {
			footerBar
		},
		// 过滤器
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			},
			/*小数点后面保留4位*/
		  	numFilter4(num, len){
				var len = len || 4;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			getMsg (){
				let that = this;
				this.axios.get('/index/suda_wallet/total_coin')
					.then(({data}) => {
						if (data.status === 200) {
							console.log(data);
							let res = data.data;
							this.lists = res.list;
							if (res.total.nickname == '') {
								return this.myname;
							} else{
								this.myname = res.total.nickname;
							}
							this.totalAssets = res.total.money;
							/* this.imgUrl = res.lists.imgUrl; */
						} else if(data.status === 10001){
              this.$router.replace('indexNew');
            } else if(data.status === 10002){
						    this.$router.push({
						        path:'/aboutUs'
                })
            }else{
							this.layers("請求失敗");
						}
					})
					.catch(function (error) {
						setTimeout(() => {
								console.log(error.message);
								/* that.layers(error.message); */
							},4000)
					});
			},
			goDetails (list){
				this.$router.push({
					path : '/walletDetails',
					query : {
						type : list.type,
						title : list.title
					}
				})
			}
  		}
    }
</script>

<style scoped>
 .wallet{width: 100%;}

	span{
		font-size: 0.36rem;
		color: #FFFFFF;
		font-weight: 700;
		margin-right: 0.2rem;
	}
	h4{
		font-size: 0.32rem;
		font-weight: 600;
	}
	h5{
		font-size: 0.28rem;
	}
	.top-bg{
		width: 100%;
		height: 3.8rem;
		background-image: url(../../static/images/indexNew_08.png);
		background-size: 100% 100%;
		position: relative;
	}
	.top-btn{
		width: 6.9rem;
		height: auto;
		justify-content: space-between;
		position: absolute;
    left: .3rem;
		top: 0.2rem;
	}
	.top-btn img:first-child{
		width: 0.4rem;
		height: 0.4rem;
	}
	.top-btn img:last-child{
		width: 0.42rem;
		height: 0.42rem;
	}
	.top-bg h4{
		color: #FFFFFF;
		width: 5rem;
		text-align: center;
	}
	.top-bg h5{
		color: #FFFFFF;
		width: 5rem;
		text-align: center;
		margin-top: 0.4rem;
	}
	.list{
		width: 100%;
		height: auto;
		border-bottom: 0.01rem solid #dddddd;
		justify-content: space-between;
		align-items: flex-start;
		padding: 0.3rem 0 0.3rem 0;
	}
	.list-left{
		width: auto;
		height: 0.5rem;
	}
	.list-left img{
		width: 0.42rem;
		height: 0.42rem;
		margin: 0 0.2rem 0 0.3rem;
	}
	.list .list-right{
		width: 6.3rem;
		height: auto;
		margin-right: 0.3rem;
	}
	.list-text{
		width: 100%;
		height: 0.5rem;
	justify-content: space-between;
	}
	.list-right .top h4{
		color: #454545;
	}
	.list-text span{
		font-size: 0.26rem;
		color: #767676;
	}
	.list-right .center h5{
		color: #343434;
	}
	.list-right .bottom h5:first-child{
		color: #767676;
	}
	.list-right .h5-red{
		color: #ea4242;
	}
	.list-right .h5-green{
		color: #21bb4c;
	}
	/* .list-right .bottom h5:last-child{
		color: #3cc355;
	}
  .list-right .bottom .red:last-child{
    color: #e93e3e;
  } */
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>
