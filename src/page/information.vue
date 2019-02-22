<template>
	<div class="information">
    <div style="width: 100%;height: auto">
		<pageHead>资讯</pageHead>
		<!-- <div class="top-title flex-row">资讯</div> -->
		<div class="tab-father flex-row">
			<template>
				<div class="tab-btn flex-col" :class="{ active: show == 1}" @click="show=1">
					快讯
				</div>
        <div class="tab-btn flex-col" :class="{ active: show == 2}"  @click="show=2" >
          攻略
        </div>
			</template>
		</div>
		<div class="tab-card" v-show="show==1">
			<div class="list-left flex-col" v-for="(list,index) in lists" @click="listsFun(index)">
				<h4>{{list.title}}</h4>
				<!--<p>{{list.desc}}</p>-->
				<p>{{list.publisher}} · {{list.created_at}}</p>
			</div>
			<!--没有数据-->
			<div class="no-data flex-row" v-if="!lists.length">
				暂无数据
			</div>
		</div>
		<div class="tab-card"  v-show="show==2">
			<div class="list-left flex-col" v-for="(cycle,index) in items" @click="itemsFun(index)">
				<h4>{{cycle.title}}</h4>
				<!--<p>{{cycle.desc}}</p>-->
				<p>{{cycle.publisher}} · {{cycle.created_at}}</p>
			</div>
			<!--没有数据-->
			<div class="no-data flex-row" v-if="!items.length" >
				暂无数据
			</div>
		</div>
		<footerBar></footerBar>
    </div>
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
              show:1,
              lists : [],
              items : [],
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
		  	getMsg (){
				let that = this;
				this.axios.post('/index/suda_password/article_list')
				.then(({data}) => {
					if (data.status == 200) {
						console.log(data);
						let res = data.data;
						this.lists = res[0];
						this.items = res[1];
						console.log(this.lists);
            console.log(this.items);
					} else if(data.status === 10001){
            this.$router.replace('indexNew');
          }else if(data.status === 10002){
            this.$router.push({
              path:'/aboutUs'
            })
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
			},
        listsFun:function (a) {
        console.log(a)
          this.$router.push({
              path:"/ConsultationDetails",
              query:{
                  id:a,
                  num:1
              }
          })
        },
        itemsFun:function (a) {
          console.log(a)
          this.$router.push({
            path:"/ConsultationDetails",
            query:{
              id:a,
              num:2
            }
          })
        },
  		}
    }
</script>

<style scoped>
	.tab-card{
		margin-bottom: 1.4rem;
		margin-top: 1.8rem;
    height: 13rem;overflow: auto;
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
    margin: 0 auto;
	}
  .list-left h4{font-weight: 600;}
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
