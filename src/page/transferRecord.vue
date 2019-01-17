<template>
	<div class="transferRecord">
		<div class="top-module flex-row">
			<img src="../../static/images/transactionRelease_01.png" alt="" @click="return_page()">
			<h3>记录</h3>
			<div class="top-right flex-row" @click="selectList()">
				<h4>{{chooseTitle}}</h4>
				<img src="../../static/images/transactionRelease_02.png" alt="">
			</div>
		</div>
		<div class="select-father flex-col">
			<div v-show="isShowSelect" v-for="list in lists" class="select-options flex-row" @click="choose(list)">
				<h4>{{list.title}}</h4>
			</div>
		</div>
		<div class="top-pic flex-col">
			<img :src="img" alt="">
			<h2>{{chooseTitle}}</h2>
		</div>
		<div class="top-tab flex-row">
			<div class="top-tab-list flex-col" :class="{activeTab:isTabLeft}" @click="clickTabLeft()">
				<h3>转账记录</h3>
			</div>
			<div class="top-tab-list flex-col" :class="{activeTab:isTabRight}" @click="clickTabRight()">
				<h3>交易记录</h3>
			</div>
		</div>
		<div class="list-left flex-col" v-show="showLeft">
			<div class="list flex-col" v-for="transfer in transfers">
				<h5>{{transfer.created_at}}</h5>
				<div class="list-bottom flex-row">
					<h4>{{transfer.addr}}</h4>
					<h4 class="h4-red" v-if="transfer.num < 0">{{transfer.num|numFilter}}</h4>
					<h4 class="h4-green" v-else>+{{transfer.num|numFilter}}</h4>
				</div>
			</div>
			<!--没有数据-->
			<div class="no-data flex-row" v-if="!transfers.length">
				暂无数据
			</div>
		</div>
		<div class="list-right flex-col" v-show="showRight">
			<div class="list flex-col" v-for="transfer in transfers">
				<h5>{{transfer.created_at}}</h5>
				<div class="list-bottom flex-row">
					<h4>{{transfer.nickname}}</h4>
					<h4 class="h4-red" v-if="transfer.num < 0">{{transfer.num|numFilter}}</h4>
					<h4 class="h4-green" v-else>+{{transfer.num|numFilter}}</h4>
				</div>
			</div>
			<!--没有数据-->
			<div class="no-data flex-row" v-if="!transfers.length">
				暂无数据
			</div>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'transferRecord',
        data(){
            return {
				isShowSelect : false,
            	lists : [
            		{
            			title : "ETH"
            		},
            		{
            			title : "SDT"
            		},
            		{
            			title : "USDT"
            		}
            	],
				chooseTitle : "ETH",
				isTabLeft : true,
				isTabRight : false,
				showLeft : true,
				showRight : false,
				img : '',
				transfers : []
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
		filters: {
		/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 2;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
  		//实例方法
  		methods: {
  			return_page (){
  				this.$router.go(-1);
  			},
			clickTabLeft (){
				this.isTabLeft = true;
				this.isTabRight = false;
				this.showLeft = true;
				this.showRight = false;
				this.axios.post('/index/suda_user/transfer_log',{
					page : '1',
					type : this.chooseTitle
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.transfers = res.log;
					} else{
						this.layers(data.message);
					}
				})
			},
			clickTabRight (){
				this.isTabLeft = false;
				this.isTabRight = true;
				this.showLeft = false;
				this.showRight = true;
				this.axios.post('/index/suda_user/transaction_log',{
					page : '1',
					type : this.chooseTitle
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.transfers = res.log;
					} else{
						this.layers(data.message);
					}
				})
			},
			selectList (){
				this.isShowSelect = !this.isShowSelect;
			},
			choose (list){
				console.log(list.title);
				this.chooseTitle = list.title;
				this.isShowSelect = false;
				if(this.showLeft){
          this.axios.post('/index/suda_user/transfer_log',{
            page : '1',
            type : this.chooseTitle
          })
            .then(({data}) => {
              if (data.status == 200) {
                console.log(data);
                let res = data.data;
                this.img = res.img;
                this.transfers = res.log;
              } else{
                this.layers(data.message);
              }
            })
        }else {
          this.axios.post('/index/suda_user/transaction_log',{
            page : '1',
            type : this.chooseTitle
          })
            .then(({data}) => {
              if (data.status == 200) {
                console.log(data);
                let res = data.data;
                this.transfers = res.log;
              } else{
                this.layers(data.message);
              }
            })
        }


			},
			getMsg (){
				this.axios.post('/index/suda_user/transfer_log',{
					page : '1',
					type : 'ETH'
				})
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.img = res.img;
						this.transfers = res.log;
					} else{
						this.layers(data.message);
					}
				})
			}
  		}
    }
</script>

<style scoped>
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
	.top-module{
		width: 100%;
		height: 1rem;
		background-color: #393f4c;
		justify-content: space-between;
	}
	.top-module h3{
		font-size: 0.32rem;
		color: #FFFFFF;
		margin-left: 1.2rem;
	}
	.top-module img{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.top-right{
		width: 1.4rem;
		margin-right: 0.3rem;
	}
	.top-right h4{
		color: #FFFFFF;
	}
	.top-right img{
		width: 0.25rem;
		height: 0.14rem;
		margin-left: 0.14rem;
	}
	.select-father{
		width: auto;
		height: auto;
		position: absolute;
		right: 0;
		top: 1.2rem;
		background-color: #FFFFFF;
		box-shadow: 0 0 0.15rem #d6d6d6;
	}
	.select-options{
		width: 1.6rem;
		height: 0.8rem;
	}
	.select-father .select-options:not(:first-child){
		border-top: 0.01rem solid #d1d4da;
	}
	.top-pic{
		width: 100%;
		height: auto;
		padding: 0.5rem 0;
		background-color: #393f4c;
	}
	.top-pic img{
		width: 1.14rem;
		height: 1.14rem;
	}
	.top-pic h2{
		font-size: 0.38rem;
		font-weight: bolder;
		color: #f1f6ff;
		margin-top: 0.3rem;
	}
	.top-tab{
		width: 100%;
		height: 1rem;
		background-color: #f5f6f8;
		border-bottom: 0.02rem solid #d3d6dc;
		justify-content: flex-start;
	}
	.top-tab-list{
		width: auto;
		height: 100%;
		margin-left: 0.7rem;
	}
	.top-tab-list h3{
		font-size: 0.32rem;
		color: #9198aa;
	}
	.activeTab{
		border-bottom: 0.04rem solid #386eea;
	}
	.activeTab h3{
		color: #386eea;
	}
	.list{
		width: 7rem;
		height: auto;
		padding: 0.3rem 0;
		border-bottom: 0.02rem solid #c4c8d2;
		align-items: flex-start;
	}
	.list-bottom{
		width: 100%;
		height: auto;
		justify-content: space-between;
	}
	.list-bottom h4:first-child{
		max-width: 4.7rem;
		word-break: break-all;
	}
	.list h5{
		font-size: 0.28rem;
		color: #5f5f5f;
	}
	.list h4{
		font-size: 0.3rem;
		color: #404040;
	}
	.list .h4-red{
		color: #ea4242;
		font-weight: bolder;
	}
	.list .h4-green{
		color: #21bb4c;
		font-weight: bolder;
	}
</style>
