<template>
	<div>
		<br>
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
		<div style="text-align: center;"><h1>	我的打卡</h1></div>
		<div v-for="(item,index) in List">
			<van-cell is-link :title="'打卡'+index+' '+' '+'点击查看详情'" @click="handleDetail(item)" />
			<van-action-sheet v-model:show="show" title="打卡详情" >
				<van-cell center title="名字" :value="item.name" />
				<van-cell center title="科室" :value="item.keshi" />
				<van-cell center title="日期" :value="item.day|dataformat" />
				<van-cell center title="职位" :value="item.zhiwei" />
				<van-cell center title="状态" :value="item.status" />
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
					name: '',
					keshi: '',
					day: '',
					zhiwei: '',
					status: '',
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
				} = await this.$http.get("/daka/self_dakaMsg?doctorId=" + userId)
				console.log(res)
				if (res.status == 200) {
					this.List = res.data
					console.log(this.List)
			
				}else{
					Toast('未有打卡记录。');
				}
			},
			handleDetail(item){
				this.obj = item
				this.show = true
			}
		}
		
	}
</script>

<style>
</style>
