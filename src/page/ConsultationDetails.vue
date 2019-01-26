<template>
    <div class="ConsultationDetails">
      <div style="width: 100%;height: auto">
        <div class="header">
          <img @click="back" src="../../static/images/return.png" alt="">
          <h2>详情</h2>
        </div>
        <div class="detail" v-if="num==1">
          <h2>{{lists[id].title}}</h2>
          <b>{{lists[id].publisher}} · {{lists[id].created_at}}</b>
          <p>{{lists[id].desc}}</p>
        </div>
        <div class="detail" v-if="num==2">
          <h2>{{items[0].title}}</h2>
          <b>{{items[0].publisher}} · {{items[0].created_at}}</b>
          <p>{{items[0].desc}}</p>
        </div>
      </div>
    </div>

</template>

<script>

    export default {
        name: "ConsultationDetails",
        data(){
            return {
              lists:[],
              items:[],
              num:'1',
              id:''
            }
        },
      // 创建之前
      beforeCreate: function () {

      },
      //创建之后
      created: function (){

        this.getMsg ();

      },
        component: {

        },
      methods:{
        getMsg (){
          this.id = this.$route.query.id;
          this.num = this.$route.query.num;
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
              }else{
                console.log(data);
              }
            })

        },
        back:function () {
          window.history.go(-1);
        }
      }
    }
</script>

<style scoped>
  .ConsultationDetails{background: #f2f2f2!important;}
  .header{width: 7.5rem;height: .9rem;background: #393f4c;position: relative}
  .header img{position: absolute;left: .3rem;top: .29rem;width: .18rem;height: .32rem}
  .header h2{font-size: .34rem;color: #ffffff;text-align: center;line-height: .9rem}

  .detail{width: 6.9rem;padding: 0 .3rem;margin-top: .2rem;height: auto;background: #ffffff}
  .detail h2{font-size: .38rem;line-height: .6rem;font-weight: 600;padding-top: .1rem}
  .detail p{font-size: .28rem;color: #575a61; padding-top: .2rem}
  .detail b{ font-size: .24rem;color: #999999}
</style>
