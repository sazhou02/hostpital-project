<template>
	<div>
		<br>
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
		<div style="text-align: center;"><h1>	我的病人</h1></div>
		<div v-for="(item,index) in List">
			<van-cell is-link :title="'病人'+(index+1)+' '+' '+'点击查看详情'" @click="handleDetail(item)" />
			<van-action-sheet v-model:show="show" title="病人详情" >
				<van-cell center title="病人姓名" :value="obj.petname" />
				<van-cell center title="预约人" :value="obj.petuser" />
				<van-cell center title="电话" :value="obj.petuser_tel" />
				<van-cell center title="病史" :value="obj.history" />
				<van-cell center title="科室" :value="obj.guahao_keshi" />
				<van-cell center title="挂号时间" :value="obj.guahaoTime" />
				<van-cell center title="时间段" :value="obj.time_duan" />
			</van-action-sheet>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				List: [],
        obj: {
          petname: '',
          petuser: '',
          petuser_tel: '',
          history: '',
          guahao_keshi: '',
          guahaoTime: '',
          time_duan: ''
        },
				show:false,
			}
		},
		created() {
			let username = window.sessionStorage.getItem("username")
			const userId = window.sessionStorage.getItem("userId")
			this.getmsg(username, userId)
		},
		methods:{
			onClickLeft() {
				history.back()
			},
			async getmsg(username, userId) {
				// console.log("id",id)
				let {
					data: res
				} = await this.$http.get("/doctor/getDoctorPatient?id=" + userId)
				console.log(res)
				if (res.status == 200) {
					this.List = res.data
					console.log(this.List)
			
				}else{
					Toast('未有打卡记录。');
				}
			},
      handleDetail(item) {
        this.show = true
        this.obj = item
      }
		}
		
	}
</script>

<style>
</style>
