<template>
	<div class="identity">
    <div style="width: 100%;height: auto">
		<div class="top-module flex-row">
			<router-link to="userCenter">
				<img class="img-left" src="../../static/images/return.png"/>
			</router-link>
			<h3>身份认证</h3>
			<h4></h4>
		</div>
		<div class="top-banner">
			<img src="../../static/images/identity_01.png" alt="">
		</div>

       <h4 class="fail" v-if="status==204">驳回原因：{{fail}}</h4>
		<div class="list flex-row">
			<h3>真实姓名</h3>
			<input type="text" placeholder="请输入真实姓名" v-model="inputName">
		</div>
		<div class="list flex-row">
			<h3>身份证号</h3>
			<input type="text" placeholder="请输入15位或18位身份证号码" v-model="inputNum">
		</div>
		<div class="upload-father flex-col">
			<div class="upload upload-1 flex-col">
				<label class="user">
					<img :src="userImg ? userImg : require('../../static/images/identity_02.png')" alt="">
					<input type="file" class="img_input" ref="" @change="selectImg">
				</label>
			</div>
			<div class="upload upload-2 flex-col">
				<label class="user">
					<img :src="userImg2 ? userImg2 : require('../../static/images/identity_03.png')" alt="">
					<input type="file" class="img_input" ref="" @change="selectImg2">
				</label>
			</div>
		</div>
		<div class="btn btn-blue flex-col" @click="submit()">
			提交认证消息
		</div>
    </div>
	</div>
</template>

<script>
	export default{
        name: 'identity',
        data(){
            return {
				inputName : '',
				inputNum : '',
				userImg: '',
				userImg2: '',
				hasImg: true,
              fail:"",
              status:''
            }
        },
        // 创建之前
  		beforeCreate: function () {

  		},
  		//创建之后
  		created: function (){
        let that = this ;
        that.goIdentity();
  		},
  		//挂载之前
  		beforeMount: function (){

  		},
  		// 挂载之后
  		mounted: function(){
  			this.$nextTick(function(){

  			})
  		},
  		//实例方法
  		methods: {
        goIdentity (){
          this.axios.get('/index/suda_user/auth')
            .then(({data}) => {
              if (data.status == 204) {
                this.status=data.status;
                this.fail = data.message;
              }
              console.log(data);
            })
        },


			// 图片选择，赋值给file
			selectImg: function (e) {
				this.hasImg = false;
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
				fm.append('avatar', this.file);
				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				this.$http.post('http://admin.suda66888.com/index/uploadfile/uploadPic',fm,config)
				.then(({data}) => {
					if (data.status === 200) {
						console.log(data.data);
						this.hasImg = true;
						this.upImg1 = data.data;
						this.layers(data.message);
					} else {
						this.layers(data.message);
					}
				})
			},
			selectImg2 : function(e) {
				this.hasImg = false;
				this.file = e.target.files[0];
				let reader = new FileReader();
				reader.addEventListener('load', () => {
					this.userImg2 = reader.result;
				}, false);
				if (this.file) {
					reader.readAsDataURL(this.file);
				}
				console.log(this.file);
				let fm = new window.FormData();
				fm.append('avatar', this.file);
				let config = {
					headers: {
						'Content-Type': 'multipart/form-data'
					}
				};
				this.$http.post('http://admin.suda66888.com/index/uploadfile/uploadPic',fm,config)
				.then(({data}) => {
					if (data.status === 200) {
						console.log(data.data);
						this.hasImg = true;
						this.upImg2 = data.data;
						this.layers(data.message);
					} else {
						this.layers(data.message);
					}
				})
			},
			submit (){
				if (!this.inputName) {
					this.layers("请输入姓名");
				} else if(!this.inputNum){
					this.layers("请输入身份证号")
				} else{
					this.axios.post('/index/suda_user/add_auth', {
						name : this.inputName,
						card_id : this.inputNum,
						positive : this.upImg1,
						other_side : this.upImg2
					})
					.then(({data}) => {
						if (data.status === 200) {
							console.log(data)
							this.layers(data.message);
						} else {
							this.layers(data.message);
						}
					})
				}
			},
  			/* initPlUploader() {
			this.plUploader = new plupload.Uploader({
			  runtimes: 'html5,flash,silverlight,html4',
			  url: 'http://oss.aliyuncs.com',
			  browse_button: 'browse',
			  filters: {
				mime_types: [
				  { title: 'Image files', extensions: 'jpg,gif,png,bmp' }
				],
				max_file_size: '10mb',
				prevent_duplicates: true
			  },
			  init: {
				FilesAdded: function(up, files) {
				  console.log('有新文件添加至队列')
				  up.start()
				},
				BeforeUpload: this.beforeUpload,
				UploadProgress: this.uploadProgress,
				FileUploaded: this.fileUploaded,
				Error: this.error
			  }
			})
			this.plUploader.init()
		  } */
  		}
    }
</script>

<style scoped>
	.top-module{
		width: 100%;
		height: 1rem;
		justify-content: space-between;
		background-color: #393f4c;
	}
	.top-module h3{
		font-weight: 500;
		color: #FFFFFF;
	}
	.img-left{
		width: 0.18rem;
		height: 0.32rem;
		margin-left: 0.3rem;
	}
	.top-banner{
		width: 100%;
		height: 2.4rem;
	}
	.list{
		width: 100%;
		height: auto;
		padding: 0.34rem 0;
		border-bottom: 0.01rem solid #f4f4f4;
	}
	.list h3{
		font-size: 0.34rem;
		color: #333333;
	}
	.list input{
		width: 5rem;
		height: 0.5rem;
		font-size: 0.32rem;
		color: #999999;
		margin-left: 0.3rem;
		border: none;
	}
	.upload-father{
		width: 100%;
		height: auto;
		padding: 0.5rem 0;
		border-top: 0.26rem solid #f4f4f4;
		border-bottom: 0.26rem solid #f4f4f4;
	}
	.upload{
		width: 3.34rem;
		height: 2rem;
		border-radius: 0.1rem;
		border: 0.03rem dashed #e8e8e8;
	}
	.upload:nth-child(1){
		background-image: url(../../static/images/identity_02.png);
		background-size: 100%;
		background-repeat: no-repeat;
		margin-bottom: 0.3rem;
	}
	.upload:nth-child(2){
		background-image: url(../../static/images/identity_03.png);
		background-size: 100%;
	}
	.btn-blue{
		width: 6.9rem;
		height: 0.94rem;
		border-radius: 0.1rem;
		background-color: #4a7cee;
		font-size: 0.34rem;
		color: #FFFFFF;
		margin: 0.4rem auto;
	}
	.user{
		position: relative;
		overflow: hidden;
	}
	.user img{
		width: 3.34rem;
		height: 2rem;
	}
	.img_input{
		position: absolute;
		left: -20rem;
		top: 0.6rem;
	}

  .fail{ font-size: .3rem;width: 6.7rem;margin: .2rem auto ;line-height: .7rem;background: #cccccc;padding:  0 .4rem;color: #cb1a15;}
</style>
