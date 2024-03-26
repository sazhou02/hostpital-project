<template>
	<div>
		<br>
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
		<!-- <br> -->
		<!-- 医生介绍 -->
		<!-- <van-tree-select height="550px" :items="doctorList" :active-id.sync="activeId" :main-active-index.sync="activeIndex"
			@click-nav="clicknav" @click-item="clickitem" /> -->

			<van-doctor-card
				v-for="(item, index) in doctorList"
				:key="index"
				:avatar-offset-top="4"
				:avatar-figure="7"
				:avatar-size="68"
				:name="item.text"
				:title="item.zhi_wei"
				:skill="item.shan_chang"
				:department="item.ke_shi"
				@clickCard="clickitem(item)"
			>
				<van-tag
					slot="corner"
					:type="item.status === '可约' ? 'success' : ''"
					round
					:color="item.status === '约满' ? '#999999' : ''"
				>
					{{ item.status }}
				</van-tag>
			</van-doctor-card>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				doctorList: [],
				activeId: '',
				activeIndex: 0,
			}
		},
		created(){
			this.getMsg()
		},
		methods:{
			onClickLeft() {
				history.back()
			},
			clickitem(data) {
			
				// let index = this.activeIndex
				// let active_text = this.doctorList[index].text
				// let active_item = data.text
			
				console.log(data)
				window.sessionStorage.setItem('keshi', data.ke_shi);
				window.sessionStorage.setItem('doctor', data.text);
				this.$router.push('/doctorDeail')
			},
			clicknav(index) {
				this.activeIndex = index

			},
			async getMsg(){
				let {data:res}=await this.$http.get('keshi_doctorMsg/keshi_doctorMsg')
				console.log(res)
				if(res.status==200){
					const doctorList = res.data.map(item=>{
					  return item.children
					})
					this.doctorList = doctorList.flat(2);
				}
			}
		}
	}
</script>

<style>
</style>
