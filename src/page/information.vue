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
			<div class="list-left flex-col">
				<h4>速达公司举行“中国梦·劳动美·速达情”纪念改革开放40周年歌唱比赛</h4>
				<p>为进一步展现改革开放40周年成就，弘扬时代精神，激发全 体员工工作热情，全力打造具有凝聚力、向心力的一流团队 近日，速达公司工会举行了"中国梦·劳动美·速达情"比赛</p>
				<p>速达公司 · 2018-12-01 17:00</p>
			</div>
			<div class="list-left flex-col">
				<h4>速达公司举行“中国梦·劳动美·速达情”纪念改革开放40周年歌唱比赛</h4>
				<p>为进一步展现改革开放40周年成就，弘扬时代精神，激发全 体员工工作热情，全力打造具有凝聚力、向心力的一流团队 近日，速达公司工会举行了"中国梦·劳动美·速达情"比赛</p>
				<p>速达公司 · 2018-12-01 17:00</p>
			</div>
			<div class="list-left flex-col">
				<h4>速达公司举行“中国梦·劳动美·速达情”纪念改革开放40周年歌唱比赛</h4>
				<p>为进一步展现改革开放40周年成就，弘扬时代精神，激发全 体员工工作热情，全力打造具有凝聚力、向心力的一流团队 近日，速达公司工会举行了"中国梦·劳动美·速达情"比赛</p>
				<p>速达公司 · 2018-12-01 17:00</p>
			</div>
		</div>
		<div class="tab-card">
			<div class="list-left flex-col">
				<h4>速达公司举行“中国梦·劳动美·速达情”纪念改革开放40周年歌唱比赛</h4>
				<p>为进一步展现改革开放40周年成就，弘扬时代精神，激发全 体员工工作热情，全力打造具有凝聚力、向心力的一流团队 近日，速达公司工会举行了"中国梦·劳动美·速达情"比赛</p>
				<p>速达公司 · 2018-12-01 17:00</p>
			</div>
			<div class="list-left flex-col">
				<h4>速达公司举行“中国梦·劳动美·速达情”纪念改革开放40周年歌唱比赛</h4>
				<p>为进一步展现改革开放40周年成就，弘扬时代精神，激发全 体员工工作热情，全力打造具有凝聚力、向心力的一流团队 近日，速达公司工会举行了"中国梦·劳动美·速达情"比赛</p>
				<p>速达公司 · 2018-12-01 17:00</p>
			</div>
		</div>
		<div class="tab-card">
			<div class="list-left flex-col">
				<h4>速达公司举行“中国梦·劳动美·速达情”纪念改革开放40周年歌唱比赛</h4>
				<p>为进一步展现改革开放40周年成就，弘扬时代精神，激发全 体员工工作热情，全力打造具有凝聚力、向心力的一流团队 近日，速达公司工会举行了"中国梦·劳动美·速达情"比赛</p>
				<p>速达公司 · 2018-12-01 17:00</p>
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
						name: "速达信息",  
						isActive: true  
					},
					{  
						name: "行业动态",  
						isActive: false
					},
					{  
						name: "活动公告",  
						isActive: false
					}
				],  
				active: false
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
  			} 
  		}
    }
</script>

<style scoped>
	.tab-card{
		display: none;
		margin-bottom: 1rem;
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
</style>
