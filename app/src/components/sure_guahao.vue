<template>
	<div>
		<br>
		<van-nav-bar left-text="医生主页" left-arrow @click-left="onClickLeft" />
		<br>
		<div class="doctor-detail">
			<van-cell-group>
				<van-cell title="姓名" :value="doctor" />
				<van-cell title="科室" :value="keshi" />
			</van-cell-group>
			<div class="doctor-info">
				<div class="info-title">擅长</div>
				<div class="info-content">{{ shanchang }}</div>
			</div>
		</div>
		<br>
		<div id="">
			<div style="margin: 10px;">
				<van-button @click="show = true" size="middle" type=primary>点击选择挂号日期</van-button>&nbsp;&nbsp;
				<van-button style="width: 180px;">日期：{{date}}</van-button>
				<van-calendar v-model="show" @confirm="onConfirm" />
			</div>
			<div>
				<van-picker show-toolbar title="选择挂号时间段" :columns="columns" @change="onChange" @confirm="onfirm"/>
			</div>

		</div>

	</div>
</template>

<script>
	import Vue from 'vue';
	import {
		Toast,
		Dialog
	} from 'vant';
	
	Vue.use(Toast);
	export default {
		data() {
			return {
				username:'',
				petname:'',
				phone:'',
				keshi: '',
				doctor: '',
				date: '',
				doctorId: '',
				show: false,
				columns: [
				        // 第一列
				        {
				          values: ['上午', '下午'],
				          defaultIndex: 0,
				        },
				        // 第二列
				        {
				          values: ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00"],
				          defaultIndex: 0,
				        },
				      ],
				form:{},
				shanchang:''
			}
		},
		created() {
			this.keshi = window.sessionStorage.getItem('keshi')
			this.doctor = window.sessionStorage.getItem('doctor')
			this.username=window.sessionStorage.getItem("username")
			this.petname=window.sessionStorage.getItem("petname")
			this.phone=window.sessionStorage.getItem("phone")
			this.history=window.sessionStorage.getItem('history')
			this.doctorId=window.sessionStorage.getItem('doctorId')
			this.getdoctorMsg()
			
		},
		methods: {
			onChange(picker, values) {
				const times = {
					"上午": ["8:00-9:00", "9:00-10:00", "10:00-11:00", "11:00-12:00"],
					"下午": ["14:00-15:00", "15:00-16:00", "16:00-17:00", "17:00-18:00"]
				}
				picker.setColumnValues(1, times[values[0]]);
			},
			onClickLeft() {
				history.back()
			},
			onfirm(value, index) {
				if (!this.date) {
					Toast('请选择日期');
					return;
				} else {
					this.form={
						keshi:this.keshi,
						doctor:this.doctor,
						day:this.date,
						time:value,
						username:this.username,
						petname:this.petname,
						phone:this.phone,
						doctorId:this.doctorId,
					}
				}
				// console.log(this.form)
				//  Toast(`挂号成功`);
				// // 成功预约返回首页
				// this.$router.push('/mycenter')
				this.guahao(this.form)
				
			},
		
			formatDate(date) {
			   
				return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
			},
			onConfirm(date) {	
				
				this.show = false;
				this.date = this.formatDate(date);
			},
			
			// 提交预约的数据到数据库
			
			async guahao(form){
				// 判断是否设置宠物信息
				let {data:res1}=await this.$http.get('/dangAn/getPetMsg?petusername='+this.username)
				console.log(res1,".....")
				if(res1.status==200){
					if(res1.data[0].petname==null){
						alert("请先去个人中心添加病人信息")
					}
					else{
						let da=this.$qs.stringify(form)
						
						let {data:res}= await this.$http.post('guahaoMsg/insertGuahaoMsg',da)
						console.log(res)
						
						if (res.status === 200 && res.msg === "挂号成功") {
							Toast(`挂号成功`);
							// 成功预约返回首页
							this.$router.push('/mycenter')
						} else {
							Dialog.alert({
								message: res.msg
							}).then(() => {
								// on close
							});
						}
					}
				}else{
					
				}
				
				
				// let da=this.$qs.stringify(form)
				
				// let {data:res}= await this.$http.post('guahaoMsg/insertGuahaoMsg',da)
				// console.log(res)
				
				// if(res.status==200){
				// 	Toast(`挂号成功`);
				// 	// 成功预约返回首页
				// 	this.$router.push('/mycenter')
				// }
			},
			async getdoctorMsg(){
				let {data:res}=await this.$http.get('/doctor/doctorIntroduceMsg?username='+this.doctor)
				console.log(res)
				if(res.status==200){
					this.shanchang=res.data[0].shan_chang
				}
			}
			
		}
	}
</script>

<style scoped>
.doctor-detail {
  display: flex;
  flex-direction: column;
  padding: 20px;
	background-color: #f9f9f9;
}

.van-cell-group {
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 添加阴影 */
  border-radius: 10px; /* 圆角 */
}

.van-cell {
  background-color: white;
}

.doctor-info {
  margin-top: 20px;
  padding: 15px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); /* 添加阴影 */
  border-radius: 10px; /* 圆角 */
}

.info-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333; /* 字体颜色 */
}

.info-content {
  font-size: 16px;
  line-height: 1.6;
  color: #666; /* 字体颜色 */
}
</style>
