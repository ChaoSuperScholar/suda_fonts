<template>
	<div class="information">
		<pageHead>资讯</pageHead>
		<!-- <div class="top-title flex-row">资讯</div> -->
		<div class="tab-father flex-row">
			<template v-for="(tab,index) in tabsName">
				<div class="tab-btn flex-col" @click="tabsSwitch(index)" v-bind:class="{active:tab.isActive}">
					{{tab.name}}
				</div>
			</template>
		</div>
		<div class="tab-card" style="display: block;">
			<div class="list-left flex-col" v-for="list in lists">
				<h4>{{list.title}}</h4>
				<p>{{list.desc}}</p>
				<p>{{list.publisher}} · {{list.created_at}}</p>
			</div>
			<!--没有数据-->
			<div class="no-data flex-row" v-if="!lists.length">
				暂无数据
			</div>
		</div>
	<!--	<div class="tab-card">
			<div class="list-left flex-col" v-for="item in items">
				<h4>{{item.title}}</h4>
				<p>{{item.desc}}</p>
				<p>{{item.publisher}} · {{item.created_at}}</p>
			</div>
			&lt;!&ndash;没有数据&ndash;&gt;
			<div class="no-data flex-row" v-if="!items.length">
				暂无数据
			</div>
		</div>-->
		<div class="tab-card">
			<div class="list-left flex-col" v-for="cycle in cycles">
				<h4>{{cycle.title}}</h4>
				<p>{{cycle.desc}}</p>
				<p>{{cycle.publisher}} · {{cycle.created_at}}</p>
			</div>
			<!--没有数据-->
			<div class="no-data flex-row" v-if="!cycles.length">
				暂无数据
			</div>
		</div>
		<footerBar></footerBar>
	</div>
</template>

<script>
	import pageHead from '../components/pageHead'
	import footerBar from '../components/footerBar'
	export default{
        name: 'information',
        data(){
            return {
            	img1 : require('../../static/images/indexNew_01.png'),
            	img2 : require('../../static/images/indexNew_02.png'),
            	img3 : require('../../static/images/indexNew_03.png'),
            	img4 : require('../../static/images/indexNew_04_de.png'),
            	img5 : require('../../static/images/indexNew_05.png'),
				tabsName: [{
						name: "快讯",
						isActive: true
					},
					{
						name: "攻略",
						isActive: false
					}],
				active: false,
				lists : [],
				items : [],
				cycles : []
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
  			this.getMsg ();
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
  		},
		//注册组件
		components : {
			footerBar,
			pageHead
		},
  		//实例方法
  		methods: {
  			tabsSwitch: function(tabIndex) {
  					var tabCardCollection = document.querySelectorAll(".tab-card"),
						len = tabCardCollection.length;
								for(var i = 0; i < len; i++) {
									tabCardCollection[i].style.display = "none";
								this.tabsName[i].isActive = false;
						}
  					this.tabsName[tabIndex].isActive = true;
  					tabCardCollection[tabIndex].style.display = "block";
  			},
			getMsg (){
				let that = this;
				this.axios.post('/index/suda_password/article_list')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.lists = res[0];
						this.items = res[1];
						this.cycles = res[2];
					} else if(data.status === 10001){
            this.$router.replace('indexNew');
          }else{
						console.log(data);
					}
				})
				if (window.console) {
					var cons = console;
					if (cons) {
						cons.log("");
						cons.log("");
						cons.log("");
						cons.log("%c\n       ", "font-size:41px;background:url('http://pic.962.net/up/2018-10/20181019134893861.jpg')no-repeat;padding:100px 105px;");
						cons.log("");
						cons.log('这个项目\n代码写的很简单\n很好维护!');
						cons.log("%c准备跑路了,看到这段代码的兄弟保重!", "color:red;font-weight:bold;");
						cons.log("%c另外补充一下,前端的薪资很有趣\(^o^)/~~!","color:green;font-weight:bold")
					}
				}
			}
  		}
    }
</script>

<style scoped>
	.tab-card{
		display: none;
		margin-bottom: 1.4rem;
		margin-top: 1.8rem;
	}
	.tab-father{
		width: 100%;
		height: 0.8rem;
		background-color: #393f4c;
		position: fixed;
		left: 0;
		top: 1rem;
	}
	.tab-btn{
		width: 1.8rem;
		height: 0.8rem;
		color: #9aa5b3;
		font-size: 0.32rem;
	}
	.active{
		color: #ffffff;
	}
	.list-left{
		width: 6.9rem;
		height: auto;
		padding: 0.3rem 0;
		align-items: flex-start;
		border-bottom: 0.01rem solid #c9d0de;
	}
	h4{
		font-size: 0.32rem;
		color: #000;
	}
	p{
		font-size: 0.28rem;
		color: #575a61;
	}
	.no-data {
		font-size: 0.32rem;
		color: #585858;
		margin-top: 0.4rem;
	}
</style>
