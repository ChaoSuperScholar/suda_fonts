<template>
	<div class="aboutUs">
		<headerBar :title="indexTitle"></headerBar>
		<div class="top-text flex-col">
			<img src="../../static/images/aboutUs_01.png" alt="">
			<p>S-TOKEN集合了数字钱包系统、OTC场外交易 游戏、商城、竞猜、理财6大功能板块，并基于全球通用 标准ERC20发行S-TOKEN通证SDT.</p>
		</div>
		<div class="updata flex-row">
			<div class="updata-child flex-row" @click="download">
				<h4>版本更新</h4>
				<div class="updata-child-right flex-row">
					<div class="new-prompt flex-col" v-show="show">
						NEW
					</div>
					<h5>v{{version}}</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import headerBar from '../components/headerBar'
	export default{
        name: 'aboutUs',
        data(){
            return {
            	indexTitle : "关于我们",
              show:false,
              version:'',
              url:'',
              num:1
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
        this.who();
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
		components:{
			headerBar
		},
  		//实例方法
  		methods: {
        getMsg() {
          this.axios.post('/index/suda_user/version', {
            type : this.num
          })
            .then(({data}) => {
            this.url=data.data.downloadurl;
            if (data.status == 200) {
                this.show=true;
            console.log(data);
            this.version=data.data.version;
          } else {
            this.show=false;
            this.layers(data.message);
          }
        })
        },
        download:function () {
         let _download= confirm('是否前去下载');
          if(_download){
              this.axios.post('/index/suda_user/sure', {
                type : this.num
              })
                .then(({data}) => {
              if (data.status == 200) {
                console.log(data);
                window.location.href=this.url
              } else {
                this.layers(data.message);
              }
            })
          }
        },
        who:function () {
          let u = navigator.userAgent;
          let app = navigator.appVersion;
          let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
          let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
          if (isAndroid) {
           this.num=1
          }
          if (isIOS) {
            this.num=2
          }
        }
  		}
    }
</script>

<style scoped>
	h4{
		font-size: 0.32rem;
		color: #3f4450;
	}
	p,h5{
		font-size: 0.28rem;
		color: #515662;
	}
	.top-text{
		width: 6.9rem;
		height: auto;
		padding: 0.5rem 0;
	}
	.top-text img{
		width: 1.82rem;
		height: 1.82rem;
		margin-bottom: 0.6rem;
	}
	.updata{
		width: 100%;
		height: auto;
		border-top: 0.06rem solid #ebeef3;
		border-bottom: 0.02rem solid #c8cfde;
		padding: 0.3rem 0;
	}
	.updata-child{
		width: 6.9rem;
		height: auto;
		justify-content: space-between;
	}
	.new-prompt{
		width: 1rem;
		height: 0.4rem;
		border: 0.02rem solid #da4545;
		font-size: 0.24rem;
		color: #da4545;
		border-radius: 0.2rem;
		margin-right: 0.2rem;
	}
</style>
