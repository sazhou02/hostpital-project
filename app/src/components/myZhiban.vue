<template>
	<div class="duty-info">
		<van-nav-bar left-text="返回" left-arrow @click-left="onClickLeft" />
		<div class="content">
			<h2>我的值班信息</h2>
			<table>
				<tr>
					<th>星期</th>
					<th>星期一</th>
					<th>星期二</th>
					<th>星期三</th>
					<th>星期四</th>
					<th>星期五</th>
					<th>星期六</th>
					<th>星期日</th>
				</tr>
				<tr :data="list">
					<td>状态</td>
					<td :class="{today: todayWeekDay === 1}">{{list.mondayStatus}}</td>
					<td :class="{today: todayWeekDay === 2}">{{list.tuesdayStatus}}</td>
					<td :class="{today: todayWeekDay === 3}">{{list.wednesdayStatus}}</td>
					<td :class="{today: todayWeekDay === 4}">{{list.thursdayStatus}}</td>
					<td :class="{today: todayWeekDay === 5}">{{list.fridayStatus}}</td>
					<td :class="{today: todayWeekDay === 6}">{{list.saturdayStatus}}</td>
					<td :class="{today: todayWeekDay === 7}">{{list.sundayStatus}}</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				username:'',
				list:[],
				month:'',
				day:'',
				todayWeekDay: null
			}
		},
		created(){
			this.username=window.sessionStorage.getItem("username")
			// console.log(this.username)
			this.getzhibanMsg()
			this.gettime()
		},
		methods:{
			onClickLeft() {
				history.back()
			},
			async getzhibanMsg(){
				
				let {data:res}=await this.$http.get('/zhiban/selfzhibanMsg?username='+this.username)
				console.log(res)
				if(res.status==200){
					this.list=res.data[0]
					console.log(this.list)
				
				}
				
			},
			gettime(){
				let time=new Date()
				// let year=time.getFullYear()//年
				let month=time.getMonth()+1 //月
				let day=time.getDate() //日
				
				let str=time.getDay()  //数字对应的星期
				
				this.month=month
				this.day=day

				let weekDay = time.getDay(); // 获取今天是星期几，0（星期日）到6（星期六）
        this.todayWeekDay = weekDay === 0 ? 7 : weekDay; // 将星期日转换为7，以匹配我们表格中的星期日
			},
		
			
			
		}
	}
</script>

<style scoped>
.duty-info {
	font-family: 'Arial', sans-serif;
	color: #333;
}

.content {
	text-align: center;
	padding: 10px;
}

h2 {
	color: #4A90E2;
	margin-bottom: 20px;
}

table {
	margin: 0 auto;
	border-collapse: collapse;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

table th, table td {
	border: 1px solid #ddd;
	padding: 20px 12px;
	text-align: center;
}

table th {
	background-color: #f7f7f7;
	color: #333;
}

/* 使用奇偶行颜色提升表格可读性 */
table tr:nth-child(odd) {
	background-color: #f9f9f9;
}

/* 标记今天 */
table td.today {
	background-color: #4A90E2;
	color: #fff;
}
</style>
