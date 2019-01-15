<template>
    <div id="news">
      <div class="headers">
        <img src="../../static/images/transactionRelease_01.png" alt="" @click="return_page()">
        <h3>{{name}}</h3>
      </div>
      <div style="height:7vh"></div>
      <div class="chat" id="show-chat-content">
        <ul v-for="item in list">
          <li class="left" v-if="item.type == 'left'">
            <div class="top">
              <img :src="item.avatar">
              <h3>{{item.nickname}}</h3>
              <p>{{item.created_at}}</p>
            </div>
            <img v-if="item.msg_type== 'img' " class="imgss" :src="item.content"  alt="">
            <div class="cont" v-else>
              <p>{{item.content}}</p>
            </div>
          </li>
          <li class="right" v-else>
              <div class="top">
                <p>{{item.created_at}}</p>
                <h3>{{item.nickname}}</h3>
                <img :src="item.avatar">
              </div>
              <img v-if="item.msg_type== 'img' " class="imgss" :src="item.content"  alt="">
              <div class="cont " v-else>
                <p>{{item.content}}</p>
              </div>
          </li>
        </ul>
      </div>
      <div style="height: 9vh"></div>
      <div class="footer">
        <input type="text" placeholder="请输入聊天文字" v-model="msg">
        <div class="imgs">
          <img src="../../static/images/imgs.png" alt="">
          <input type="file" class="img_input" ref="" @change="selectImg">
        </div>
        <p @click="btnClick">发送</p>
      </div>
    </div>

</template>

<script>

    export default {
        name: "news",
        data(){
            return {
              id:"",
              list:[],
              msg:'',
              left:'',
              name:'',
              userImg:''
            }
        },
        component: {

        },
      created: function (){
        this.getMsy();
      },
      updated:function(){
        let  that= this;
        this.$nextTick(function(){
              var div = document.getElementById('show-chat-content');
              div.scrollTop = div.scrollHeight;
              setTimeout(function () {
                that.getMsy();
              },5000)
        })
      },
      methods:{
        return_page (){
          this.$router.go(-1);
        },
        getMsy () {
          this.axios.post('/index/suda_order_sell/order_chat',{
            order_id : this.$route.query.id,
          })
            .then(({data}) => {
              if (data.status == 200) {
                console.log(data);
                this.list=data.data.chat;
                this.name=data.data.user.left_user;
                this.left=data.data.user.left;
              } else{
                this.layers(data.message);
              }
            })
        },
        btnClick () {
          this.axios.post('/index/suda_order_sell/add_chat',{
            order_id : this.$route.query.id,
            msg:this.msg,
            msg_type:'text',
            user_id:this.left
          })
            .then(({data}) => {
              if (data.status == 200) {
                this.msg='';
                console.log(data);
                this.layers(data.message);
              } else{
                this.layers(data.message);
              }
            })
        },
        selectImg(e){
            console.log(e);
          this.file = e.target.files[0];
          let reader = new FileReader();
          reader.addEventListener('load', () => {
            this.userImg = reader.result;
          }, false);
          if (this.file) {
            reader.readAsDataURL(this.file);
          }
          console.log(this.file);
          let fm = new window.FormData();
          fm.append('chat', this.file);
          let config = {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          };
          this.$http.post('http://admin.suda66888.com/index/uploadfile/uploadChat',fm,config)
            .then(({data}) => {
              if (data.status === 200) {
                this.axios.post('/index/suda_order_sell/add_chat',{
                  order_id : this.$route.query.id,
                  msg:data.data,
                  msg_type:'img',
                  user_id:this.left
                })
                  .then(({res}) => {
                    if (res.status == 200) {
                      console.log(res);
                      this.layers(res.message);
                    } else{
                      this.layers(res.message);
                    }
                  })
                this.layers(data.message);
              } else {
                this.layers(data.message);
              }
            })

        }

      }
    }
</script>

<style scoped>
.headers{
  height: .9rem;
  background: #393f4c;
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
}
.right .imgss{
  width: 2.9rem;
  height: auto;
  margin: .3rem .8rem .3rem 3rem;
}
.left .imgss{
  width: 2.9rem;
  height: auto;
  margin: .3rem .8rem;
}
  .headers img{
    position: absolute;
    height: .32rem;
    width: .17rem;
    left: .3rem;
    top: .29rem;
  }
  .headers h3{
    text-align: center;
    font-size: .32rem;
    color: #ffffff;
    line-height: .9rem;
  }
  .chat{
    width: 6.9rem;
    height: 84vh;
    margin: 0 auto;
    overflow: auto;
  }
.chat ul{
  width: 100%;
  height: auto;
  overflow: hidden;
  display: block;
}
.chat ul li{
  padding-top: .55rem;
  height: auto;
  display: flex;
  flex-flow: column;
  overflow: hidden;

}
.chat ul li .top{
  display: flex;
  flex-flow: row;
  line-height: .57rem;
}
.chat ul li .top img{
  width: .57rem;
  height: .57rem;
}
.chat ul li .top h3{
  font-size: .28rem;
  padding-left: .2rem;
}
.chat ul li .top p{
  font-size: .26rem;
  color: #656b78;
  padding-left: .1rem;
}
.chat ul li .cont{
  width: auto;
  max-width: 4.6rem;
  margin-left: .7rem;
}
.chat ul li .cont p{
  width:auto;
  max-width: 4.2rem;
  word-wrap: break-word;
  word-break: normal;
  padding: .25rem .2rem;
  background: #e9ecf2;
  border-radius: .1rem;
  display: inline-block;
}

.chat ul li.right{
  float: right;
  text-align: right;
  position: relative;
}
.chat ul li.right .top{
  font-size: .26rem;
  color: #656b78;
  display: flex;
  justify-content: flex-end;
}
.chat ul li.right .top img{
  display: inline;
}
.chat ul li.right .top h3{
  padding-right: .2rem;
}
.chat ul li.right .cont p{
  width:auto;
  max-width: 4.2rem;
  word-wrap: break-word;
  word-break: normal;
  padding: .25rem .2rem;
  background: #e9ecf2;
  border-radius: .1rem;
  display: inline-block;
}

  .footer{
    position: fixed;
    background: #ffffff;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.1rem;
    border-top: .02rem solid #cbcfd9;
    display: flex;
    flex-flow: row;
  }
.footer input{
  border: none;
  background: none;
  padding-left: .3rem;
  width: 4.4rem;
}
.footer img{
  width: .49rem;
  height: .45rem;
  margin: .3rem;
}
.imgs{position: relative}
.imgs input{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.footer p{
  width: 1.4rem;
  height: .66rem;
  background: #4a7cee;
  text-align: center;
  line-height: .66rem;
  color: #ffffff;
  font-size: .26rem;
  margin-top: .22rem;
  border-radius: .1rem;
}

</style>
