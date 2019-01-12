<template>
  <div id="scan">
    <div id="bcid">
      <div style="height:40%"></div>
      <p class="tip">...载入中...</p>
    </div>
    <footer>
      <div class="fbt" @click="cancelScan()">取　 消</div>
      <div class="fbt" @click="scanPicture()">从相册选择二维码</div>
    </footer>
  </div>
</template>
<script>
  // 扫码demo 地址:http://hello.wap2app.dcloud.io/examples/barcode_scan.html
  export default {
    name: 'scan',
    data () {
      return {
        scan:null,
        ws:null,
        wo:null,
        domready:null,
        title:'',
        qrcode_content:"",
        qrcode_type:"",
        types:''
      };
    },
    // 创建之前
    beforeCreate: function () {
    },
    // 创建之后
    created: function () {},
    // 挂载之前
    beforeMount: function () {

    },
    // 挂载之后
    mounted: function () {

      this.init(

      );

    },
    // 销毁解绑
    beforeDestroy: function () {
    },
    computed: {
      passBoxShow () {
        return this.$store.state.payAlert;
      }
    },
    methods: {
      // 扫码成功
      onmarked(type, result, file) {
        switch (type) {
          case window.plus.barcode.QR:
            type = 'QR';
            break;
          case window.plus.barcode.EAN13:
            type = 'EAN13';
            break;
          case window.plus.barcode.EAN8:
            type = 'EAN8';
            break;
          default:
            type = '其它:' + type;
            break;
        }
        result = result.replace(/\n/g, '');
        this.qrcode_content = result;
        this.qrcode_type = type;
        this.cancelScan();
      },
      init(){
        if(window.plus){
          this.plusReady();
        }else{
          document.addEventListener( "plusready", this.plusReady, false );
        }
        this.title = this.$route.query.title;
        this.types = this.$route.query.type;

      },
      plusReady() {
        if(this.ws || !window.plus) {
          return;
        }
        var obj_s = this;
        // 获取窗口对象
        this.ws = window.plus.webview.currentWebview();
        // 开始扫描
        this.ws.addEventListener('show', function() {
          obj_s.scan = new window.plus.barcode.Barcode('bcid');
          obj_s.scan.onmarked = obj_s.onmarked;
          obj_s.scan.start({
            conserve: true,
            filename: '_doc/barcode/'
          });
        }, false);
        this.ws.show('pop-in');
      },
      // 从相册中选择二维码图片
      scanPicture() {
        var obj = this;
        window.plus.gallery.pick(function(path) {
          window.plus.barcode.scan(path, obj.onmarked, function(error) {
            window.plus.nativeUI.alert('无法识别此图片');
          });
        }, function(err) {
          alert('Failed: ' + err.message);
        });
      },
      // 关闭扫描
      cancelScan(){
        if (!window.plus) return
        this.scan.close();
//         alert("content:"+this.qrcode_content+",type:"+this.qrcode_content);
        if(typeof this.$route.query.route_name != "undefined"){
          this.$router.push({
            path:'/walletTransfer',
            query:{
                qrcode_content:this.qrcode_content,
                title: this.title,
                type: this.types
            }
          });
        }else{
          // alert('路由错误');
          this.$router.push({
              path:'/walletTransfer'
          });
        }
      },
      // 开启闪光灯
      setFlash() {
        this.scan.setFlash();
      }
    }
  };
</script>

<style scoped>
  #bcid {
    z-index: 9999;
    width: 100%;
    position: absolute;
    top: 0px;
    bottom: 44px;
    text-align: center;
  }

  .tip {
    color: #FFFFFF;
    font-weight: bold;
    text-shadow: 0px -1px #103E5C;
  }

  footer {
    width: 100%;
    height: 44px;
    position: absolute;
    bottom: 0px;
    line-height: 44px;
    text-align: center;
    color: #FFF;
  }

  .fbt {
    width: 50%;
    height: 100%;
    background-color: #FFCC33;
    float: left;
  }

  .fbt:active {
    -webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
  }

  #shareadvertisement {
    padding-top: 100px;
    background: #fff;
  }
  #shareadvertisement #pageHead {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 32px;
    text-align: center;
    color: #282828;
    background: #fff;
    z-index: 1;
  }
  #shareadvertisement #pageHead .icon-youjiantou {
    position: absolute;
    top: 0;
    left: 0;
    width: 120px;
    color: #3e4d62;
    font-size: 40px;
  }
  #shareadvertisement #pageHead .icon-saoyisao {
    position: absolute;
    top: 0;
    right: 0;
    width: 120px;
    font-size: 38px;
  }
  #shareadvertisement #pageHead.page_head_opacity {
    background: none;
  }
  #shareadvertisement .top_info {
    margin: 40px 40px;
  }
  #shareadvertisement .top_info .top_list {
    margin: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 96px;
    line-height: 96px;
    padding: 0 30px;
    background: #fff;
    box-shadow: 0 0 10px 5px #eaeef5;
  }
  #shareadvertisement .top_info .top_list .list_left {
    font-size: 26px;
    color: #3f4e62;
  }
  #shareadvertisement .top_info .top_list input {
    font-size: 28px;
    color: #3f4e62;
    margin-left: 0;
    padding-left: 0;
    width: 460px;
    line-height: 50px;
    text-align: right;
    background: transparent;
  }
  #shareadvertisement .top_info .top_list .nickname {
    width: 400px;
  }
  #shareadvertisement .top_info .top_list input::-webkit-input-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list input::-moz-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list input:-moz-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list input:-ms-input-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list.yzm input {
    font-size: 28px;
    color: #3f4e62;
    margin-left: 0;
    padding-left: 0;
    width: 300px;
    line-height: 50px;
    text-align: right;
    background: transparent;
  }
  #shareadvertisement .top_info .top_list.yzm input::-webkit-input-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list.yzm input::-moz-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list.yzm input:-moz-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list.yzm input:-ms-input-placeholder {
    font-size: 28px;
    color: #939fbb;
  }
  #shareadvertisement .top_info .top_list.yzm button {
    background: transparent;
    color: #ef542b;
    font-size: 26px;
    text-align: right;
    text-align: center;
    padding: 0 20px;
    height: 54px;
    border: 1Px solid #fcddd5;
    border-radius: 4px;
    margin-left: 10px;
  }
  #shareadvertisement .top_info .top_list.yzm button.send-sms {
    text-align: center;
  }
  #shareadvertisement .top_info .top_list.yzm button.no-send-sms {
    color: #ef542b;
  }
  #shareadvertisement .top_info .set_account {
    width: 100%;
    height: 96px;
    line-height: 96px;
    text-align: center;
    font-size: 28px;
    color: #791fd7;
    background: #fff;
    margin-top: 50px;
    border-radius: 4px;
    box-shadow: 0 0 10px 5px #eaeef5;
  }
  #shareadvertisement .top_info .set_account.blue {
    background: #791fd7;
    color: #fff;
  }
</style>

