
<template>
  <div class="game_bill">
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
          <div class="content flex-col" v-show="showLeft">
            <div class="content-top flex-col">
              <div class="content-top-top flex-row">
                <h2>日期</h2>
                <h2>收益流水</h2>
                <h2>金额</h2>
              </div>
              <div class="content-top-bottom flex-row">
                <h2>(DATE)</h2>
                <h2>(BILL)</h2>
                <h2>(SDT)</h2>
              </div>
            </div>
            <div class="content-center" id="scroll">
              <div class="list flex-row" v-for="(order, index) in orderLists">
                <h4 class="text-line-1"><p>{{order[0]}}</p></h4>
                <h4 class="text-line-1">{{order[1]}}</h4>
                <h4 class="text-line-1">{{order[2]|numFilter}}</h4>
              </div>
              <!-- 没有数据 -->
              <nodata v-if="!orderLists.length"></nodata>
              <div class="pagebottom" v-if="showPagebottom">
                <span>-到底了-</span>
              </div>

              <div class="weui-loadmore" v-bind:hidden="isHideLoadMore">
                <div class="weui-loading"></div>
                <div class="weui-loadmore__tips">正在加载</div>
              </div>

            </div>
          </div>
          <div class="content flex-col" v-show="showRight">
            <div class="content-top flex-col">
              <div class="content-top-top flex-row">
                <h2>日期</h2>
                <h2>金币流水</h2>
                <h2>金额</h2>
              </div>
              <div class="content-top-bottom flex-row">
                <h2>(DATE)</h2>
                <h2>(BILL)</h2>
                <h2>(GOLD)</h2>
              </div>
            </div>
            <div class="content-center" id="onesss">
              <div class="list flex-row" v-for="item in orderItems">
                <h4 class="text-line-1"><p>{{item[0]}}</p></h4>
                <h4 class="text-line-1">{{item[1]}}</h4>
                <h4 class="text-line-1">{{item[2]|numFilter0}}</h4>
              </div>

              <!-- 没有数据 -->
              <nodata v-if="!orderItems.length"></nodata>
            </div>
          </div>
          <div class="next flex-row">
            <img src="../../../static/images/game/game_bill_02.png" alt="" @click="leftClick()">
            <img src="../../../static/images/game/game_bill_01.png" alt="" @click="rightClick()">
          </div>
          <div class="shadown">
            <img @click="goIndex()" src="../../../static/images/game/game_play_02.png" alt="">
          </div>

          <!--	<div v-show="num_data==''" class="nones">
                          <p>暂无提币记录</p>
                      </div>-->
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import infiniteScroll from 'vue-infinite-scroll'
  var count = 0;
  export default {
    name: 'game_bill',
    data() {
      return {
        showLeft : true,
        showRight : false,
        lists : [],
        items : [],
        orderLists:[], //列表
        orderItems:[],  //列表
        page: 1,        //起始页(上划加载改变)
        pageSize: 0,    //存放总页数
        isShow_noProduct:false,
        refresh:false,
        isHideLoadMore:true,
        golds:'',
        sdts:'',
        showPagebottom:false,
      }
    },
    // 创建之前
    beforeCreate: function() {

    },
    //创建之后
    created: function() {
      this.leftClick(this.page);
      this.getTotal();
//      this.onReachBottom();

    },
    //挂载之前
    beforeMount: function() {

    },
    // 挂载之后
    mounted: function() {
      var that = this;
      $("#scroll").scroll(function () {
        var $this = $(this);
        var viewH = $(this).height();//可见高度
        var contentH = $(this).get(0).scrollHeight;//内容高度
        var scrollTop = $(this).scrollTop();//滚动高度
        //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
        if (scrollTop / (contentH - viewH) >= 0.9) { //到达底部100px时,加载新内容
          that.onReachBottom();
        }
      });
      $("#onesss").scroll(function () {
        var $this = $(this);
        var viewH = $(this).height();//可见高度
        var contentH = $(this).get(0).scrollHeight;//内容高度
        var scrollTop = $(this).scrollTop();//滚动高度
        //if(contentH - viewH - scrollTop <= 100) { //到达底部100px时,加载新内容
        if (scrollTop / (contentH - viewH) >= 0.9) { //到达底部100px时,加载新内容
          that.onReachBottoms();
        }
      });
    },
    filters: {
      /*小数点后面保留4位*/
      numFilter(num, len){
        var len = len || 4;
        var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
        return Number.isInteger(result) ? result.toFixed(len) : result;
      },
      /*小数点后面保留0位*/
      numFilter0(num, len){
        var len = len || 0;
        var result = parseInt(num * Math.pow(10, len)) / Math.pow(10, len);
        return Number.isInteger(result) ? result.toFixed(len) : result;
      },
    },
    //实例方法
    methods: {
      goIndex() {
        this.$router.replace('game_index');
      },
    //获取总条数
      getTotal:function () {
        this.axios.post('/index/suda_game/gameCount', {
        })
          .then(({
              data
          })=>{
            if (data.status == 200){
                console.log(data);
                this.sdts=data.data.sdt;
                this.golds=data.data.gold;
            }
          })
        },

      leftClick : function (page) {
        this.page=1;
        this.showLeft = true;
        this.showRight = false;
        let that = this;
        let orderLists = this.orderLists;
        this.axios.post('/index/suda_game/gameList', {
          page :this.page,
          type : 2
        })
          .then(({
            data
          }) => {

            if (data.status == 200) {
              var resultData = data.data;

              var result_count = this.sdts;
              var pageSize = result_count % 10 > 0 ? parseInt(result_count / 10) + 1 : parseInt(result_count / 10);
              if (resultData.length != 0){
                that.isShow_noProduct=false;
                that.pageSize= result_count;
                that.orderLists = resultData;
              }else{
                that.isShow_noProduct= true
              }
            } else {
              that.layers(data.message);
            }
          })
      },

      /**
       * 页面上拉触底事件的处理函数
       */

      onReachBottom: function () {
        let that = this;
        let orderLists = that.orderLists;
        var pageSize = that.sdts;
        var page = that.page;
        if(page < pageSize) {
          page++;
          this.page= page;
          this.axios.post('/index/suda_game/gameList', {
            page :this.page,
            type : 2
          })
            .then(({
              data
            }) => {
              if (data.status == 200) {
                var resultData = data.data;
                for(var i = 0; i < resultData.length; i++) {
                  orderLists.push(resultData[i]);
                }
                var num = 2;
                var set = setInterval(function() {
                  if(num > 1) {
                    num--;
                  } else if(num == 1) {
                    clearInterval(set);
                    this.orderLists= orderLists
                  };
                }, 1000);

              } else {
                that.layers(data.message);
              }
            })
        }

      },
      rightClick (page){
        this.page=1;
        this.showLeft = false;
        this.showRight = true;
        let that = this;
        let orderItems = this.orderItems;
        this.axios.post('/index/suda_game/gameList', {
          page :this.page,
          type : 1
        })
          .then(({
            data
          }) => {
            if (data.status == 200) {
              var resultData = data.data;
              var result_count = this.golds;
              var pageSize = result_count % 10 > 0 ? parseInt(result_count / 10) + 1 : parseInt(result_count / 10);
              if (resultData.length != 0){
                that.isShow_noProduct=false;
                that.pageSize= result_count;
                that.orderItems = resultData;

              }else{
                that.isShow_noProduct= true
              }

            } else {
              that.layers(data.message);
            }
          })
      },
      onReachBottoms: function () {
        let that = this;
        let orderItems = that.orderItems;
        var pageSize = that.golds;
        var page = that.page;
        if(page < pageSize) {
          page++;
          this.page= page;
          this.axios.post('/index/suda_game/gameList', {
            page :this.page,
            type : 1
          })
            .then(({
              data
            }) => {
              if (data.status == 200) {
                var resultData = data.data;
                for(var i = 0; i < resultData.length; i++) {
                  orderItems.push(resultData[i]);

                }
                var num = 2;
                var set = setInterval(function() {
                  if(num > 1) {
                    num--;
                  } else if(num == 1) {
                    clearInterval(set);
                    this.orderItems= orderItems
                  };
                }, 1000);

              } else {
                that.layers(data.message);
              }
            })
        }

      },

    },
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
    background-image: url(http://www.suda66888.com/game/game_bill.png);
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
    /* text-overflow: ellipsis;
        overflow: hidden;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        line-height: inherit; */
  }
  .list h4 p{
    padding-left: 20px;
    font-size: 12px;
    text-overflow: clip!important;
    color: #000;
    white-space: nowrap;
    animation: 5s wordsLoop linear infinite normal;
  }

  @keyframes wordsLoop {
    0% {
      transform: translateX(10px);
      -webkit-transform: translateX(10px);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }
  }

  @-webkit-keyframes wordsLoop {
    0% {
      transform: translateX(10px);
      -webkit-transform: translateX(10px);
    }
    100% {
      transform: translateX(-100%);
      -webkit-transform: translateX(-100%);
    }


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
    width: 5.46rem;
    height: auto;
    margin-top: 0.4rem;
  }
  .next img{
    width: 2.34rem;
    height: 0.87rem;
  }
  .next img:first-child{
    margin-right: 0.2rem;
  }
</style>
