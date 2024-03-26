<template>
	<div>
		<br>
		<van-nav-bar  left-text="返回" left-arrow @click-left="onClickLeft" />
	
		<div v-for="(item,index) in guahaoList">
			<van-cell is-link :title="'挂号'+index+' '+item.guahao_keshi+' '+'点击查看详情'" @click="handleDetail(item)" />
			<van-action-sheet v-model:show="show" title="挂号详情" >
			
				<van-cell center title="病人姓名" :value="obj.petname" />
				<van-cell center title="预约人" :value="obj.petuser" />
				<van-cell center title="电话" :value="obj.petuser_tel" />
				<van-cell center title="预约的科室" :value="obj.guahao_keshi" />
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
	export default{
		data(){
			return{
				guahaoList:[],
				show:false,
				obj: {
					petname: '',
					petuser: '',
					petuser_tel: '',
					guahao_keshi: '',
					day: '',
					doctor: '',
					daytime: '',
					time_duan: ''
				}
			}
		},
		created(){
			let username=window.sessionStorage.getItem("username")
			console.log(username)
			this.getmsg(username)
		},
		methods:{
			onClickLeft(){
				history.back()
			},
			async getmsg(username){
				
				let {data:res} = await this.$http.get("/guahaoMsg/SelfGuahaoMsg?username="+username)
				console.log(res)
				if(res.status==200){
					this.guahaoList = res.data
				}else{
					Toast('未有挂号记录。');
				}
			},
			handleDetail(item) {
				this.obj = item
				this.show = true
			}
		},
		
		
		
	}
</script>

<style>
</style>
