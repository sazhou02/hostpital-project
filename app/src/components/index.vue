<template>
	<div>
		<div class="header">
			<van-notice-bar scrollable left-icon="volume">
				1.请提前通过小程序预约挂号，并按预约时间准时来院就诊，避免现场等待。
				2.进入医院时，请主动出示健康码、行程码，并配合测量体温和流行病学调查。
				3.为减少交叉感染风险，建议就诊期间全程佩戴口罩，保持社交距离。
				4.如有发热或呼吸道症状，请先至发热门诊就诊。
				5.我院已开通在线咨询服务，如有疑问可随时进行线上咨询。
			</van-notice-bar>
			<h2 style="margin: 8px 0 8px 20px ; color: #fff;">天津医院</h2>
			<van-image width="90%" height="200px" :src="url" style="margin: 0 20px; z-index: 99; border-radius: 10px;" />
		</div>
		<div class="baiban">
			<br>
			<div class="body_box">

				<van-grid :gutter="10" :column-num="3" >
					<van-grid-item v-for="value in list" name="" @click="btn(value.path)" :key="value.id" :icon="value.photo" :text="value.text" />
				</van-grid>

			</div>
			
			<!-- <van-notice-bar
			  left-icon="volume-o"
			  text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
			/> -->
			<div class="content">
				<van-grid :gutter="10" :column-num="3">
					<van-grid-item v-for="value in list2" @click="btn(value.path)" :key="value.id" :icon="value.photo" :text="value.text" />
				</van-grid>
			</div>
			<hr>
		
			<van-swipe type="card" :height="200" :autoplay="2000" :loop="true">
				<van-swipe-item v-for="(item,index) in swiperList" :key="index">
					<img class="swiper-img" :src="item" />
				</van-swipe-item>
			</van-swipe>
			<!-- <div class="content">
				<van-grid :gutter="10" :column-num="3">
					<van-grid-item v-for="value in list3" :key="value.id" :icon="value.photo" :text="value.text" />
				</van-grid>
			</div> -->


		</div>
	</div>
</template>

<script>
import swiper1 from "@/assets/13.jpg";
import swiper2 from "@/assets/14.jpg";
import swiper3 from "@/assets/15.jpg";

	export default {
		data() {
			return {
				url: require("../assets/1.jpg"),
				swiperList: [
					swiper1,
					swiper2,
					swiper3
				],
				list: [
					{   id:'1',
						text: '预约',
						photo: 'record',
						path:'/yuyue'
					},
					{
						 id:'2',
						text: '挂号',
						photo: 'calendar',
						path:'/guahao'
					},
					{
						id:'3',
						text: '常见疾病治疗',
						photo: 'vaccination',
						path:'/yi_liao'
					},

				],
				list2:[
					{	id:'4',
						text: '医院公告',
						photo: 'menu',
						path:'/gongGao'
					},
					{	
						id:'5',
						text: '环境设备',
						photo: 'surgery-inquiry',
						path:'/environment'
					},
					{	
						id:'6',
						text: '医生介绍',
						photo: 'doctor-introduce',
						path:'/doctorIntroduce'
					},
				],
				// list3:[
				// 	{
				// 		text: '在线请假',
				// 		photo: 'comment-o'
				// 	},
				// 	{
				// 		text: '在线打卡',
				// 		photo: 'comment-o'
				// 	},
				// 	{
				// 		text: '环境设备',
				// 		photo: 'comment-o'
				// 	},
				// ]
			}
		},
		methods:{
			btn(path){
				console.log(path)
				this.$router.push(path)
			}
		}
	}
</script>

<style scoped="scoped">
	.header {
		background-color: #b4d8ec;
	}

	.van-image /deep/ .van-image__img {
		border-radius: 20px;
	}

	.baiban {
		background-color: #F7F7F7;
		height: 460px;
		border-radius: 25px 25px 0px 0px;
		position: relative;
		top: -25px;
	}

	.body_box {
		/* border: 1px solid red; */
		margin: 10px;
		padding: 5px;
		/* height: 120px; */
	}
	.body_box /deep/ .van-grid-item__text {
		font-size: 14px;
	}

	.content {
		font-size: 18px;
		margin: 10px;
	}
	.content /deep/ .van-grid-item__text {
		font-size: 14px;
	}
	.swiper-img {
		width: 100%;
		height: 100%;
	}
</style>
