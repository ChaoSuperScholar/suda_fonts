<template>
	<div class="game_data">
		<div class="bg-father">
			<div class="bg flex-col">
				<div class="layer-module flex-col">
					<!-- <div class="num_box" v-show="num_data" >
              <div class="num_box_title">
                <p>日期</p>
                <p>车厂收益</p>
                <p>邀请收益</p>
              </div>
              <div class="num_list">
                <ul>
                  <li v-for="item in num_data">
                    <p>{{item[0]}}</p>
                    <p>{{item[1]}}</p>
                    <p>{{item[2]}}</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="summary">
              <p>累计车厂收益：{{list[0]}}</p>
              <p>累计邀请收益：{{list[1]}}</p>
              <p>今日收益：{{list[2]}}</p>
            </div> -->
						<div class="tab-left flex-col" v-if="showLeft">
							<div class="content flex-col">
								<div class="content-top flex-col">
									<div class="content-top-top flex-row">
										<h2>日期</h2>
										<h2>邀请收益</h2>
										<h2>车厂收益</h2>
									</div>
									<div class="content-top-bottom flex-row">
										<h2>(DATE)</h2>
										<h2>(GOLD)</h2>
										<h2>(SDT)</h2>
									</div>
								</div>
								<div class="content-center">
									<div class="list flex-row" v-for="item in num_data">
										<h4>{{item[0]}}</h4>
										<h4>{{item[1]}}</h4>
										<h4>{{item[2]|numFilter}}</h4>
									</div>
								</div>
								<div class="text flex-row">
									<h4>累计车厂收益: {{list[0]|numFilter}}</h4>
									<h4>累计邀请收益: {{list[1]|numFilter}}</h4>
								</div>
							</div>
							<div class="next" @click="goNext()">
								<img src="../../../static/images/game/game_data_01.png" alt="">
							</div>
						</div>
						<div class="tab-right flex-col" v-if="showRight">
							<div class="content flex-col">
								<div class="content-top flex-col">
									<div class="content-top-top flex-row">
										<h2>日期</h2>
										<h2>分享收益</h2>
										<h2>分红收益</h2>
									</div>
									<div class="content-top-bottom flex-row">
										<h2>(DATE)</h2>
										<h2>(SDT)</h2>
										<h2>(SDT)</h2>
									</div>
								</div>
								<div class="content-center">
									<div class="list flex-row" v-for="list in lists">
										<h4>{{list[0]}}</h4>
										<h4>{{list[1]|numFilter}}</h4>
										<h4>{{list[2]|numFilter}}</h4>
									</div>
								</div>
								<div class="text flex-row">
									<h4>累计车厂收益: {{list[0]|numFilter}}</h4>
									<h4>累计邀请收益: {{list[1]|numFilter}}</h4>
								</div>
							</div>
							<div class="next" @click="goUp()">
								<img src="../../../static/images/game/game_data_02.png" alt="">
							</div>
						</div>
					<div class="shadown">
						<img @click="goIndex()" src="../../../static/images/game/game_play_02.png" alt="">
					</div>
					<div v-show="num_data==''" class="nones">
						<p>暂无提币记录</p>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		name: 'game_data',
		data() {
			return {
				num_data: [],
				list: [],
				showLeft : true,
				showRight : false,
				lists : []
			}
		},
		// 创建之前
		beforeCreate: function() {

		},
		//创建之后
		created: function() {
			this.getMsg();
			this.getData();
		},
		//挂载之前
		beforeMount: function() {

		},
		// 挂载之后
		mounted: function() {
			this.$nextTick(function() {

			})
		},
		filters: {
			/*小数点后面保留2位*/
		  	numFilter(num, len){
				var len = len || 4;
				var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
				return Number.isInteger(result) ? result.toFixed(len) : result;
			}
		},
		//实例方法
		methods: {
			goIndex() {
				this.$router.replace('game_index');
			},
			getMsg() {
				this.axios.post('/index/suda_game/profitList', {
						page: '1',
						type : '1'
					})
					.then(({
						data
					}) => {
						if (data.status == 200) {
							console.log(data);
							this.num_data = data.data;
						} else {
							this.layers(data.message);
						}
					})
			},
			getData() {
				this.axios.post('/index/suda_game/getProfit')
					.then(({
						data
					}) => {
						if (data.status == 200) {
							console.log(data);
							this.list = data.data;
						} else {
							this.layers(data.message);
						}
					})
			},
			goNext (){
				this.showLeft = false;
				this.showRight = true;
				this.axios.post('/index/suda_game/profitList', {
						page: '1',
						type : '2'
					})
					.then(({
						data
					}) => {
						if (data.status == 200) {
							console.log(data);
							this.lists = data.data;
						} else {
							this.layers(data.message);
						}
					})
			},
			goUp (){
				this.showLeft = true;
				this.showRight = false;
			}
		}
	}
</script>

<style scoped>
	h2 {
		font-size: 0.3rem;
		font-weight: bolder;
		color: #f2dfac;
		text-shadow: 0 0 0.06rem #463317;
		line-height: 1.4;
	}
	h4{
		font-size: 0.24rem;
    color: #5a4d41;
	}
	body {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	.bg-father {
		width: 100vw;
		height: 100vh;
		background-image: url(http://www.suda66888.com/game/bg.png);
		background-size: 100% 100%;

	}

	.bg {
		width: 100vw;
		height: 100vh;
		background-color: rgba(0, 0, 0, 0.6);

	}

	.layer-module {
		width: 7.2rem;
		height: 11.67rem;
		background-image: url(http://www.suda66888.com/game/num_li_2.png);
		background-size: 100% 100%;
		position: relative;
		top: .6rem;
	}

	.content {
		width: 5.46rem;
		height: auto;
		min-height: 4rem;
    max-height: 6.6rem;
		background-color: #c78c20;
		border: 0.02rem solid #463317;
		border-radius: 0.1rem;
		margin-top: 2.4rem;
	}

	.content-top {
		padding: 0.14rem 0;
	}

	.content-top-top {
		width: 5.16rem;
		height: auto;
		justify-content: space-between;
	}

	.content-top-top h2 {
		flex: 1;
		text-align: center;
	}

	.content-top-top h2:nth-child(2) {
		border-left: 0.03rem solid #463317;
		border-right: 0.03rem solid #463317;
	}

	.content-top-bottom {
		width: 5.16rem;
		height: auto;
		justify-content: space-between;
	}

	.content-top-bottom h2 {
		font-size: 0.24rem;
		font-weight: 500;
		flex: 1;
		text-align: center;
	}

	.content-center {
		width: 5.16rem;
		height: 5.5rem;
		background-color: #f9cc73;
		border-radius: 0.1rem;
		border: 0.02rem solid #463317;
		overflow-y: scroll;
		padding: 0.06rem 0;
		justify-content: flex-start;
	}

	.shadown {
		position: absolute;
		z-index: 999;
		bottom: .8rem;
		width: .84rem;
		height: .84rem;
		left: .05rem;
	}

	.nones {
		font-size: .24rem;
		color: #5a4d41;
		font-weight: 800;
	}
	.list{
		width: 100%;
    height: 0.64rem;
    background-color: #98b74e;
    margin-bottom: 0.06rem;
		justify-content: space-between;
	}
	.list h4{
		flex: 1;
		text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
	}
	.list h4:nth-child(2){
		border-left: 0.03rem solid #768e33;
		border-right: 0.03rem solid #768e33;
	}
	.text{
		width: 5.16rem;
		height: auto;
		justify-content: space-between;
		margin: 0.1rem 0;
	}
	.text h4{
		flex: 1;
		line-height: 1.4;
		text-align: center;
	}
	.next{
		width: 2.34rem;
		height: 0.87rem;
		margin-top: 0.4rem;
	}
</style>
