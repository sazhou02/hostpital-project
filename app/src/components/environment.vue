<template>
	<div>
		<br>
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

		<div class="box">
			<h1 style="">医院环境设备</h1>
		</div>
		<div class="cont1">
			<br>
			<div style="color: #404040;text-align: center;">
				<h3>hospital environment</h3>
				<h4>医院环境</h4>
			</div>
			<div style="padding: 10px;margin-top: 10px;">
				<p style="text-indent: 2em; padding: 8px 0;">医院凭借雄厚的医学力量和先进的医疗设备，下设30多个临床科室，涵盖内科、外科、妇产科、儿科、眼科、耳鼻喉科、口腔科、皮肤科、中医科、神经内科、心血管内科、肿瘤科等专业领域，并设有独立的急救中心、体检中心及康复中心，全方位满足广大患者的多元化医疗服务需求。
我院注重引进国内外先进技术与管理理念，拥有一支由知名专家教授领衔、中青年骨干医生为主体的高素质医疗团队。</p>
				<van-swipe :autoplay="3000" lazy-render>
					<van-swipe-item v-for="image in images" :key="image.id">
						<img :src="image.url" width="100%" height="200px" />
						<span>{{image.text}}</span>
					</van-swipe-item>
				</van-swipe>
			</div>

		</div>
		<div class="cont2">
			<br>
			<div style="color: #404040;text-align: center;">
				<h3>equipment introduction</h3>
				<h4>设备环境</h4>
			</div>
			<div style="padding: 10px;margin-top: 10px;">
				<p style="text-indent: 2em; padding: 8px 0;">拥有世界一流的医疗设备设施，引进了包括PET-CT、3.0T磁共振、直线加速器等尖端影像诊断系统以及各类微创手术器械。手术室严格按照国际标准建设，配置层流净化系统，确保无菌环境。同时，医院还配备了智能化的中央监护系统和患者信息系统，实现了诊疗数据的精准化管理与高效流转。就医环境宽敞明亮，装修温馨舒适，充分考虑人性化设计，设有独立诊室、VIP病房及康复花园等区域，力求为患者提供安全、先进、舒适的全方位医疗服务体验。</p>
				<van-swipe :autoplay="3000" lazy-render>
					<van-swipe-item v-for="image in equipment" :key="image">
						<img :src="image" width="100%" height="200px" />
						<span></span>
					</van-swipe-item>
				</van-swipe>
			</div>
		
		</div>
		


		<br>
		<van-grid :gutter="5" :column-num="3">
		   <van-grid-item  >
		      <img src="../assets/7.jpg" width="100px" height="100px"/>
			  <br>
			  <span>手术室环境</span>
		   </van-grid-item>
		   <van-grid-item  >
		      <img src="../assets/4.jpg" width="100px" height="100px"/>
		   			  <br>
		   			  <span>显微镜</span>
		   </van-grid-item>
		   <van-grid-item  >
		      <img src="../assets/9.jpg" width="100px" height="100px"/>
		   			  <br>
		   			  <span>B超</span>
		   </van-grid-item>
		</van-grid>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				images: [
					{	
						id:1,
						url:'http://www.ananpet.com/Public/Uploads/Environment/2018-07-20/5b5194dc263bf.jpg',
						text:'安静整洁的诊疗室'
					
					},
					{
						id:2,
						url:'http://www.ananpet.com/Public/Uploads/Environment/2018-07-20/5b518b75bbb52.jpg',
						text:'舒适的诊疗环境'
					
					},
					{
						id:3,
						url:'http://www.ananpet.com/Public/Uploads/Environment/2018-07-20/5b518b3b6aeeb.jpg',
						text:'先进的设备'
					
					}
					
				],
				equipment:[
					'http://www.ananpet.com/Public/Uploads/Equipment/2018-07-18/5b4f02cdf2344.jpg',
					'http://www.ananpet.com/Public/Uploads/Equipment/2018-07-18/5b4f02892fab2.jpg',
					'http://www.ananpet.com/Public/Uploads/Equipment/2018-07-18/5b4f024a558d2.jpg',
					'http://www.ananpet.com/Public/Uploads/Equipment/2018-07-18/5b4f01999b7e1.jpg',
					'http://www.ananpet.com/Public/Uploads/Equipment/2018-07-18/5b4f01669fac0.jpg',
					'http://www.ananpet.com/Public/Uploads/Equipment/2018-07-18/5b4f006370b8e.jpg',
					'http://www.ananpet.com/Public/Uploads/Equipment/2018-07-18/5b4effc3aca31.jpg'
				],

				list: [{
						id: 1,
						photo: '../assets/1.jpg',
						text: '挂钩法怒放'
					},
					{
						id: 2,
						photo: 'photo-o',
						text: '螯合钙就覅发'
					},
					{
						id: 3,
						photo: 'photo-o',
						text: '爱发飙安监部覅阿奶'
					},
				]
			}
		},
		methods: {
			onClickLeft() {
				history.back()
			},
		}
	}
</script>

<style scoped="scoped">
	.box {
		height: 200px;
		width: 100%;
		background: url(../assets/1.jpg) no-repeat;
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	h1 {
		margin: auto;
		color: #FFFFFF;
	}

	.cont1 {
		background-color: #ECEEEB;
		height:auto;
		border-radius: 20px 20px 0 0;
	}

	.cont2 {
		padding: 30px 0 0;
		background-color: #ECEEEB;
		height:auto;
		border-radius: 0 0 20px 20px;
	}

	.my-swipe .van-swipe-item {
		color: #fff;
		font-size: 20px;
		line-height: 150px;
		text-align: center;
		background-color: #39a9ed;
	}
</style>
