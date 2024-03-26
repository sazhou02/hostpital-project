<template>
	<div>
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item></el-breadcrumb-item>
		</el-breadcrumb>
		<el-card>
			<div style="text-align: center;">
				<h1>欢迎使用医院系统</h1>
				<br>
				<!-- <img src="../assets/5.jpg" alt="" style="width: 100%;height: 550px;"> -->
				<el-row :gutter="12">
					<el-col :span="12">
						<el-card shadow="always">
							<div id="hh" style="width: 550px;height:450px;"></div>
							<p>使用APP的用户数据</p>
						</el-card>
					</el-col>
					<el-col :span="12">
						<el-card shadow="always">
							<div id="hh2" style="width: 550px;height:450px;"></div>

							<p>病人数据</p>
						</el-card>
					</el-col>


				</el-row>


			</div>

		</el-card>

	</div>
</template>

<script>
export default {

	data() {
		return {
			apptotal: '',
			doctortotal: '',
			option2: []



		}
	},
	created() {
		this.guahaoMsg().then(() => {
			this.myEcharts2();

		})
		let appUser_total = window.sessionStorage.getItem("appUser_total")
		let doctorUser_total = window.sessionStorage.getItem("doctorUser_total")


		if (appUser_total == null && doctorUser_total == null) {
			this.apptotal = 25
			this.doctortotal = 10
		}
		else {
			this.apptotal = appUser_total
			this.doctortotal = doctorUser_total
		}

		console.log(appUser_total)
		console.log(doctorUser_total)


	},
	methods: {
		async guahaoMsg() {

			let {
				data: res
			} = await this.$http.get('/guahaoMsg/guahaoMsg', {
				params: {
					page_num: 1,
					page_size: 999
				}
			})
			let keshiCounts = res.data.reduce((acc, item) => {
				if (acc[item.guahao_keshi]) {
					acc[item.guahao_keshi]++;
				} else {
					acc[item.guahao_keshi] = 1;
				}
				return acc;
			}, {});

			// 准备ECharts图表的数据
			let chartData = {
				xAxisData: [],
				seriesData: []
			};

			for (let keshi in keshiCounts) {
				chartData.xAxisData.push(keshi);
				chartData.seriesData.push(keshiCounts[keshi]);
			}

			// 生成ECharts图表的option
			let option = {
				title: {
					text: '不同科室的挂号人数',
					subtext: '基于数据统计',
					left: 'center'
				},
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow'
					}
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true
				},
				xAxis: {
					type: 'category',
					data: chartData.xAxisData,
					axisTick: {
						alignWithLabel: true
					}
				},
				yAxis: {
					type: 'value'
				},
				series: [
					{
						name: '人数',
						type: 'bar',
						barWidth: '60%',
						data: chartData.seriesData
					}
				]
			};

			this.option2 = option;

		},

		myEcharts() {


			// 基于准备好的dom，初始化echarts实例
			var myChart = this.$echarts.init(document.getElementById('hh'));


			// 绘制图表

			var option = {
				series: [{
					type: 'pie',
					data: [{
						value: this.apptotal,
						name: '普通用户'
					},
					{
						value: this.doctortotal,
						name: '医生用户'
					},

					]
				}],
				radius: '45%'
			};
			myChart.setOption(option)

		},
		myEcharts2() {

			// 基于准备好的dom，初始化echarts实例
			var myChart = this.$echarts.init(document.getElementById('hh2'));
			// 绘制图表
			myChart.setOption(this.option2)

		},



	},
	mounted() {
		this.myEcharts();

	}
}
</script>

<style>
/* .el-main{
		background-color:#74DFE2;
	} */
</style>
