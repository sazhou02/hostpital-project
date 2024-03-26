<template>
	<div>
		<br>
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
		<br>
		
		<div class="box">
			<div class="head">
				<h1>设置个人基本信息</h1>
				<van-image v-if="url" round width="7rem" height="7rem" :src="url" />
				<div>
					<van-uploader v-model="fileList" multiple :max-count="1" :after-read="uploadImg"
              :before-read="beforeRead" upload-text="更换头像">
							<van-button type="primary" size="small">更换头像</van-button>
						</van-uploader>
				</div>
			</div>
			<div>
				<van-cell-group inset v-for="(item,index) in formMsg" :key="item.label">
				  <van-field v-model="item.value" :label="item.label" placeholder="请输入" />
				</van-cell-group>
			</div>
			<br>
			<van-button type="primary" @click="complete()">完成设置</van-button>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Toast
	} from 'vant';
	
	Vue.use(Toast);
	
	export default{
		data(){
			return{
				fileList:[],//图片
				imgurl: "", //图片路径
				oneurl: "", //传给后台的图片类型
				imgs: "", //截图
				formMsg:[
					{
						label:'昵称',
						value:''
					},
					{
						label:'年龄',
						value:''
					},
					{
						label:'职位',
						value:''
					},
					{
						label:'科室',
						value:''
					},
					{
						label:'地址',
						value:''
					},
					
				],
				username:'',
				url: ""
			}
		},
		created() {
			this.username=window.sessionStorage.getItem("username")
			this.getMsg()
		},
		methods:{
			onClickLeft() {
				history.back()
			},
			async complete(){
				console.log(this.formMsg)
				
				let formdata=this.formMsg
				let username=this.username
				
				let dada={
					username:username,
					form:formdata
				}
				let da_ta=this.$qs.stringify(dada)
				console.log(dada)
				let {data:res}=await this.$http.post('/doctor/insert_msg',da_ta)
				console.log(res)
				if(res.status==200){
					window.sessionStorage.setItem("nickname",formdata[0].value)
					Toast('设置成功');
					
					
				}
			},
			async getMsg(){
				let {data:res}=await this.$http.get('/doctor/doctor_userMsg?username='+this.username)
				console.log(res)
				if(res.status==200){
					this.formMsg[0].value=res.data.nickname
					this.formMsg[1].value=res.data.age
					this.formMsg[2].value=res.data.zhi_wei
					this.formMsg[3].value=res.data.ke_shi
					this.formMsg[4].value=res.data.address
					this.url=res.data.headphoto
				}
				
			},
			// 图片上传
			async uploadImg(filephoto) {
			  console.log(filephoto);  //控制台可以看见图片信息
			  const param = new FormData();
			  param.append("doctot_headphoto", filephoto.file); 
			  param.append("username",this.username); 
			  let {data:res}=await this.$http.post("/doctorHeadphoto/photo", param, {
			    headers: { "Content-Type": "multipart/form-data" }
			  })
					
			 console.log(res)
			},
			beforeRead(file) {
			
			  return true;
			},
			beforeDelete(file) {
			
			  return false;
			},
			 
		}
	}
</script>

<style scoped="scoped">
	.head{
		text-align: center;
	}
	.box{
		text-align: center;
	}
</style>

