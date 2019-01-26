<template>
	<div class="popularize">
    <div style="height: auto;width: 100%">
		<headerBar :title="indexTitle"></headerBar>
		<div class="background-color"></div>
		<div class="bg-color flex-col">
			<img class="bg-img" src="../../static/images/popularize_01.png" alt="">
			<div class="center-list flex-col">
				<img class="img-title" src="../../static/images/popularize_02.png" alt="">
				<div class="link-father flex-row">
					<h5>邀请链接: {{link}}</h5>
					<div class="btn-red flex-col" id="copy-btn" @click="linkCopyBtn()">
						<img src="../../static/images/popularize_03.png" alt="">
					</div>
				</div>
				<div class="qr-code" id="qrcode" ref="qrcode">

				</div>
				<h4>邀请码 {{code}}</h4>
				<!--<div class="btn-red btn-de flex-col" id="copy-btn2" @click="codeCopyBtn()">-->
					<!--<img src="../../static/images/popularize_04.png" alt="">-->
				<!--</div>-->
			</div>
		</div>
    </div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	import Clipboard from 'clipboard'
	import QRCode from 'qrcodejs2'
	export default {
		name: 'popularize',
		data() {
			return {
				indexTitle: "推广好友",
				link: "",
				code: ""
			}
		},
		// 创建之前
		beforeCreate: function() {

		},
		//创建之后
		created: function() {
			this.getMsg();
		},
		//挂载之前
		beforeMount: function() {

		},
		// 挂载之后
		mounted: function() {
			this.$nextTick(function() {

			})
		},
		// 注册组件
		components: {
			headerBar
		},
		watch: {
			link() {
				this.linkCopyBtn();
			},
//			code() {
//				this.codeCopyBtn();
//			}
		},
		//实例方法
		methods: {
			getMsg() {
				this.axios.get('/index/suda_user/user_extension')
					.then(({
						data
					}) => {
						if (data.status === 200) {
							console.log(data);
							let res = data.data;
							this.link = res.link;
							this.code = res.code;
							console.log(this.link);
							var qrcode = new QRCode('qrcode', {
								text: this.link,
								width: 256,
								height: 256,
								colorDark: '#000000',
								colorLight: '#ffffff',
							});
							console.log(qrcode);
						} else {
							this.layers(data.message);
						}
					})
			},
			linkCopyBtn() {
				let that = this;
				var clipboard = new Clipboard('#copy-btn', {
					text: function() {
						return that.link;
					}
				}).on('success', e => {
					this.layers('复制成功');
					console.log('复制成功')
					// 释放内存
				}).on('error', e => {
					// 不支持复制
					this.layers('复制失败，请手动复制！');
					console.log('该浏览器不支持自动复制')
					// 释放内存
				})
			},
			codeCopyBtn() {
				let that = this;
				var clipboard = new Clipboard('#copy-btn2', {
					text: function() {
						return that.code;
					}
				}).on('success', e => {
					this.layers('复制成功');
					console.log('复制成功')
					// 释放内存
				}).on('error', e => {
					// 不支持复制
					this.layers('复制失败，请手动复制！');
					console.log('该浏览器不支持自动复制')
					// 释放内存
				})
			}
		}
	}
</script>

<style scoped>
	h4 {
		font-size: 0.4rem;
		font-weight: bolder;
		color: #ffffff;
		margin: 0.3rem 0;
	}

	h5 {
		font-size: 0.28rem;
		color: #ffffff;
		max-width: 4.4rem;
		word-break: break-all;
	}
	.background-color {
		width: 100vw;
		height: 100vh;
		position: fixed;
		left: 0;
		top: 0;
		background-color: #282a39;
		z-index: -999;
	}
	.bg-color {
		width: 100%;
		height: auto;
		justify-content: flex-start;
	}
	.bg-img{
		width: 100%;
		height: 5.04rem;
		margin: 0.4rem 0 0.6rem 0;
	}
	.center-list {
		width: 6.9rem;
		height: auto;
		min-height: 6rem;
		/*padding: 0.6rem 0;*/
		background-color: #848b9c;
		justify-content: flex-start;
		border: 0.02rem solid #222531;
		border-radius: 0.4rem;
		position: relative;
	}

	.img-title {
		width: 4.2rem!important;
		height: 0.7rem!important;
		margin: 0!important;
		position: absolute;
		top: -0.5rem;
	}

	.link-father {
		width: 6.5rem;
		height: auto;
    margin-top: .3rem;
		justify-content: space-between;
		/* margin: 0.3rem 0; */
	}
  .link-father h5{
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }


	.btn-red {
		width: 1.88rem;
		height: 0.72rem;
		border-radius: 0.1rem;
	}

	.qr-code {
		width: 3.4rem;
		height: 3.4rem;
		background-color: #FFFFFF;
    margin-top: .3rem;
	}

	.btn-de {
		width: 2.4rem;
		height: 0.8rem;
	}
</style>
