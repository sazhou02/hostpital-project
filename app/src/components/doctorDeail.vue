<template>
	<div class="detail-container">
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

		<div class="doctor-detail">
			<van-cell-group>
				<van-cell title="姓名" :value="doctor" />
				<van-cell title="科室" :value="keshi" />
				<van-cell title="职位" :value="zhi_wei" />
			</van-cell-group>
			<div class="doctor-info">
				<div class="info-title">擅长</div>
				<div class="info-content">{{ shanchang }}</div>
			</div>
			<div class="doctor-info">
				<div class="info-title">详细介绍</div>
				<div class="info-content">{{ detail }}</div>
			</div>
		</div>

	</div>
</template>

<script>
import Vue from 'vue';
import {
	Toast
} from 'vant';

Vue.use(Toast);
export default {
	data() {
		return {


			keshi: '',
			doctor: '',
			zhi_wei: '',
			shanchang: '',
			detail: ''
		}
	},
	created() {
		this.keshi = window.sessionStorage.getItem('keshi')
		this.doctor = window.sessionStorage.getItem('doctor')
		this.getdoctorMsg()

	},
	methods: {
		onClickLeft() {
			history.back()
		},
		async getdoctorMsg() {
			let { data: res } = await this.$http.get('/doctor/doctorIntroduceMsg?username=' + this.doctor)
			console.log(res)
			if (res.status == 200) {
				this.shanchang = res.data[0].shan_chang
				this.zhi_wei = res.data[0].zhi_wei
				this.detail = res.data[0].detail
			}
		}

	}
}
</script>

<style scoped>
.detail-container {
	height: 100vh;
  background-color: #f9f9f9; /* 背景色 */
}

.doctor-detail {
  display: flex;
  flex-direction: column;
  padding: 20px;
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
