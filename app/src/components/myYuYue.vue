<template>
	<div>
		<br>
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />

		<div v-for="(item,index) in yuyueList">
			<van-cell is-link :title="'预约'+index+' '+item.keshi+' '+'点击查看详情'" @click="handleDetail(item)" />
			<van-action-sheet v-model:show="show" title="预约详情" >
				<van-cell center title="预约人" :value="obj.petuser" />
				<van-cell center title="电话" :value="obj.phone" />
				<van-cell center title="预约的科室" :value="obj.keshi" />
				<van-cell center title="预约的日期" :value="obj.day|dataformat" />
				<van-cell center title="预约的医生" :value="obj.doctor" />
				<van-cell center title="预约的时间" :value="obj.daytime" />
				<van-cell center title="预约的详细时间段" :value="obj.time_duan" />
			</van-action-sheet>
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
				yuyueList: [],
				show:false,
				obj: {
					petuser: '',
					phone: '',
					keshi: '',
					day: '',
					doctor: '',
					daytime: '',
					time_duan: ''
				}
			}
		},
		created() {
			let username = window.sessionStorage.getItem("username")
			// console.log(id)
			this.getmsg(username)
		},

		methods: {
			onClickLeft() {
				history.back()
			},
			async getmsg(username) {
				// console.log("id",id)
				let {
					data: res
				} = await this.$http.get("/yuYue/SelfyuYueMsg?username=" + username)
				console.log(res)
				if (res.status == 200) {
					this.yuyueList = res.data
					console.log(this.yuyueList)

				}else{
					Toast('未有预约记录。');
				}
			},
			handleDetail(item) {
				this.obj = item
				this.show = true
			}
		
		}



	}
</script>

<style scoped="scoped">
	.content {
	    padding: 16px 16px 160px;
	}
	.van-cell{
		padding: 10px;
	}
</style>
