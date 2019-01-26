<template>
	<div class="aboutUs">
    <div style="width: 100%;height: auto">

      <div class="tan"  v-if="tanShow" @click="tanShow=!tanShow">
        <div class="box">
            <p>{{url}}</p>
            <h3 id="copy-btn" @click="linkCopyBtn()">复制</h3>
        </div>
      </div>

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
	</div>
</template>

<script>
  import Clipboard from 'clipboard'
	import headerBar from '../components/headerBar'
	export default{
        name: 'aboutUs',
        data(){
            return {
            	indexTitle : "关于我们",
              show:false,
              version:'',
              url:'',
              num:1,
              tanShow:false
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
              this.version=data.data.version;
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
        linkCopyBtn() {
          let that = this;
          var clipboard = new Clipboard('#copy-btn', {
            text: function() {
              return that.url;
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
        download:function () {
         let _download= confirm('是否前去下载?');
          if(_download){
              this.axios.post('/index/suda_user/sure', {
                type : this.num
              })
                .then(({data}) => {
              if (data.status == 200) {
                console.log(data);
                this.JX_download(this.url)
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
        },
        JX_download(url){
            if (this.num==1){
              plus.nativeUI.showWaiting( "下载中..." );
              //创建下载管理对象
              var SX_down= plus.downloader.createDownload(url,{}, function ( d, status ) {
                // 下载完成
                if ( status == 200 ) {
                  plus.nativeUI.closeWaiting();
                  //下载成功后的回调函数
                  plus.nativeUI.toast( "下载成功，准备安装" + d.filename );
                  plus.runtime.install(
                    d.filename,
                    {},
                    function(){
                      plus.nativeUI.toast('安装成功');
                      plus.runtime.restart();
                    },
                    function(e){
                      plus.nativeUI.toast(d.filename+'安装失败');

                      alert(JSON.stringify(e))

                    }
                  );
                } else {
                  alert( "下载失败 " + status );
                }
              });

              //开始下载任务

              SX_down.start();
            }else {
                this.tanShow=true;
            }

        },
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
    margin:0 auto;
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
  .tan{
    position: fixed;
    width: 7.5rem;
    height: 13.34rem;
    background: rgba(0,0,0,0.7);
    top: 0;
    left: 0;
  }
  .tan .box{
    width: 5rem;
    height: 4rem;
    background: #ffffff;
    border-radius: .2rem;
    margin: 3rem auto;
  }
  .tan .box p{
    font-size: .26rem;
    width: 4rem;
    text-align: center;
    padding-top: 1rem;
  }
  .tan .box h3{

    width: 4rem;
    height: .7rem;
    text-align: center;
    line-height: .7rem;
    background: #3c6cda;
    border-radius: .3rem;
    margin: 0.5rem auto 0;
    color: #ffffff;
    font-size: .32rem;
  }
</style>
