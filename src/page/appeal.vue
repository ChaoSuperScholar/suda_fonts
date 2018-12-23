<template>
	<div class="appeal">
		<div class="orderMsg">
			<div class="left">订单信息</div>
			<div class="right">订单时间：{{orderInfo.created_at}}</div>
		</div>

		<div class="whichCoin">
			<div class="left">{{orderInfo.title}}</div>
			<div class="right">订单编号：123121213</div>
		</div>

		<div class="orderDetai">
			<div class="top">
				<div class="left">
					<img src="../../static/images/userCenter_01.png" alt="">
					<span>{{orderInfo.bank.name}}</span>
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
			<textarea placeholder="输入申诉内容"></textarea>
		</div>

		<div class="loadPic">
			<div class="savePic">
				<img src="../../static/images/addpics.png" alt="" @click="_changePic">
				<!-- <img src="../../static/images/addpics.png" alt="" @click="_changePic">
				<img src="../../static/images/addpics.png" alt="" @click="_changePic"> -->
			</div>
			<input type="file" @change="_loadPics" style="display: none;" ref="loadAppealPic">
		</div>

		<div class="sureBtn">
			<button type="button">确认发布</button>
		</div>
	</div>
</template>

<script>
	export default{
        name: 'appeal',
        data(){
			return {
				//订单数据
				orderInfo: {
					bank: {

					},
					alipay: {

					}
				},
				//上传的图片(最多三张)
				picList: [

				]
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
			_getorderMsg () {
				let that = this;
				let orderId = that.$route.query.orderId;
				that.axios.post('/index/suda_order_buy/order_info', { 
					id: orderId 
				}).then(({data}) => {
					if(data.status == 200) {
						that.orderInfo = data.data;
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
			_changePic () {
				let that = this;
				that.$refs.loadAppealPic.click();
			},
			//上传多张图片(一次性上传还是一张张上传,和后台讨论)
			_loadPics: function(e) {
				let that = this;
				let targetFile = e.target.files[0];
				let reader = new FileReader();
				reader.addEventListener('load', () => {
					
				}, false);
				if (that.file) {
					reader.readAsDataURL(that.file);
				};
			}
  		}
    }
</script>

<style scoped>
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
