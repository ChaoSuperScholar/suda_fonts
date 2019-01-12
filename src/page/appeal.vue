<template>
	<div class="appeal">
    <div class="top-module flex-row">
      <img src="../../static/images/transactionRelease_01.png" alt="" @click="return_page()">
      <h3>申诉</h3>
    </div>
    <div style="height: 1.2rem"></div>
		<div class="orderMsg">
			<div class="left">订单信息</div>
			<div class="right">订单时间：{{orderInfo.created_at}}</div>
		</div>

		<div class="whichCoin">
			<div class="left">{{orderInfo.title}}</div>
			<div class="right">订单编号：{{orderInfo.sn}}</div>
		</div>

		<div class="orderDetai">
			<div class="top">
				<div class="left">
					<img src="../../static/images/userCenter_01.png" alt="">
					<span>{{orderInfo.nickname}}</span>
				</div>

				<div class="right">
					金额：{{buyTotal}}CNY
				</div>
			</div>

			<div class="bottom">
				<div class="left">
					购买数量：{{orderInfo.num}}
				</div>

				<div class="right">
					购买单价：{{price}}
				</div>
			</div>
		</div>

		<div class="line"></div>

		<div class="appeals">
			<textarea v-model="content" placeholder="输入申诉内容"></textarea>
		</div>

		<div class="loadPic">
			<div class="savePic">
				<img src="../../static/images/addpics.png" alt="" @click="_changePic($event)"  accept="image/gif,image/jpeg,image/jpg,image/png">
			<!--  <img src="../../static/images/addpics.png" alt="" @click="_changePic()"  accept="image/gif,image/jpeg,image/jpg,image/png">
        <img src="../../static/images/addpics.png" alt="" @click="_changePic()"  accept="image/gif,image/jpeg,image/jpg,image/png">-->
			</div>
			<input type="file" @change="_loadPics" style="display: none;" ref="loadAppealPic">
		</div>
		<div class="sureBtn">
			<button type="button" @click="nums()">确认发布</button>
		</div>


	</div>
</template>

<script>
	export default{
        name: 'appeal',
        data(){
			return {
				//订单数据
				orderInfo: {},
				//上传的图片(最多三张)
				picList: [],
        content:'',
        imgUrl:'',
//        time:5
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
			let that = this;
			//初始化获取订单信息
			this._getorderMsg();
//        this.nums();
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
		},
		computed: {
			buyTotal () {
				let that = this;
				return Number(that.orderInfo.total).toFixed(2);
			},
			price () {
				let that = this;
				return Number(that.orderInfo.price).toFixed(2);
			}
		},
  		//实例方法
  		methods: {
			//初始化获取订单信息
        return_page (){
          this.$router.go(-1);
        },
			_getorderMsg () {
				let that = this;
				let orderId = that.$route.query.orderId;
				that.axios.post('/index/suda_order_buy/complain', {
					id: orderId
				}).then(({data}) => {
					if(data.status == 200) {
						that.orderInfo = data.data;
						console.log(that.orderInfo);
					} else {
						that.layers(data.message);
					};
				}).catch(function(error) {
					setTimeout(() => {
						console.log(error.message);
					},4000);
				});
			},
			//点击图片
			_changePic (e) {
				let that = this;
				that.$refs.loadAppealPic.click();
				console.log(e)
			},
			//上传多张图片(一次性上传还是一张张上传,和后台讨论)
			_loadPics: function(e) {
				let that = this;
				let targetFile = e.target.files[0];
        console.log(targetFile);
				let reader = new FileReader();
        console.log(reader);

				reader.addEventListener('load', () => {
          console.log(reader.addEventListener);
				}, false);
				if (that.file) {
					reader.readAsDataURL(that.file);
          console.log(that.file);
				};
			},
      }
    }
</script>

<style scoped>
  .top-module{
    width: 100%;
    height: 1.2rem;
    background-color: #393f4c;
    position: fixed;
  }
  .top-module img{
    width: 0.18rem;
    height: 0.32rem;
    position: absolute;
    left: .3rem;
  }
  .top-module h3{
    text-align: center;
    color: #ffffff;
  }

	.child_view {
		align-items: inherit;
	}

	.orderMsg,
	.whichCoin {
		overflow: hidden;
		background-color: #E8EAEE;
		padding: 10px 10px;
	}

	.whichCoin {
		background-color: #fff;
		border-bottom: 1px solid #E9EBEF;
	}

	.orderMsg .left,
	.whichCoin .left {
		float: left;
		font-size: 18px;
		color: #2F333C;
		font-weight: 600;
	}

	.orderMsg .right,
	.whichCoin .right {
		float: right;
		color: #363A43;
	}

	.orderDetai {
		padding: 10px;
	}

	.orderDetai .top {
		overflow: hidden;
	}

	.orderDetai .top .left {
		float: left;
    width: 3.6rem;
    display: flex;;flex-flow: row;
	}

	.orderDetai .top .left img {
		width: .5rem;
		vertical-align: middle;
		margin-right: 10px;
	}

	.orderDetai .top .right {
		float: right;
	}

	.orderDetai .bottom {
		overflow: hidden;
		color: #6C717E;
		padding-top: 10px;
	}

	.orderDetai .bottom .left {
		float: left;
	}

	.orderDetai .bottom .right {
		float: right;
	}

	.line {
		height: 4px;
		background-color: #E8EAEE;
	}

	.appeals {
		margin: 0 10px;
		border-bottom: 1px solid #D1D7E3;
	}

	.appeals textarea {
		width: 100%;
		border-radius: 0;
		border: none;
		font-size: 16px;
		padding: 1% 0;
		height: 2.6rem;
	}

	.loadPic {
		padding: 10px;
	}

	.loadPic img {
		width: 30%;
	}

	.sureBtn {
		text-align: center;
		margin: 0 10px;
		margin-top: 1rem;
	}

	.sureBtn button {
		width: 100%;
		font-size: 16px;
		background-color: #4A7CEE;
		color: #fff;
		border-radius: 4px;
		padding: 10px 0;
	}

	.savePic {
		text-align: center;
		overflow: hidden;
	}

	.savePic img {
		float: left;
	}

	.savePic img:nth-child(1),
	.savePic img:nth-child(2) {
		margin-right: 5%;
	}
</style>
