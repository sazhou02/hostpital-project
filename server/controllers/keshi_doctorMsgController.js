const db = require('../db.js')
let keshi_doctorMsg = async (req, res) => {
	// 通过外键把科室和医生表联系起来
	let sql = "SELECT doctorlistmsg.id, doctorlistmsg.username, doctorlistmsg.zhi_wei, doctorlistmsg.shan_chang, doctorlistmsg.ke_shi, keshimsg.keshi FROM doctorlistmsg, keshimsg WHERE doctorlistmsg.keshi_id=keshimsg.id";
	let params = [];

	try {
			const { results: data } = await db.exec(sql, params);
			const resObject = {};

			// 把查询的结果放到一个对象
			data.forEach((item) => {
				if (!resObject[item.keshi]) {
						resObject[item.keshi] = [{
								username: item.username,
								id: item.id, // 医生的ID
								zhi_wei: item.zhi_wei, // 医生的职位
								shan_chang: item.shan_chang, // 医生的擅长
								ke_shi: item.ke_shi // 医生的科室
						}];
				} else {
						resObject[item.keshi].push({
								username: item.username,
								id: item.id,
								zhi_wei: item.zhi_wei,
								shan_chang: item.shan_chang,
								ke_shi: item.ke_shi
						});
				}
		});

			// 返回前端界面的数组
			const resd = [];

			// 遍历上面的对象值，一一放到children数组里，使得结果为树形结构
			// 也就是每个科室里有多少医生
			Object.keys(resObject).forEach((keshi) => {
				const children = resObject[keshi].map((doc) => ({
						id: doc.id, // 医生的ID
						text: doc.username, // 医生的姓名
						zhi_wei: doc.zhi_wei, // 医生的职位
						shan_chang: doc.shan_chang, // 医生的擅长
						ke_shi: doc.ke_shi // 医生的科室
				}));

				resd.push({
						text: keshi, // 科室名称
						children,    // 医生的集合
				});
		});

			// 把最后的结果数据返回给前端
			res.json({
					msg: "success",
					status: 200,
					data: resd
			});
	} catch (error) {
			res.json({
					msg: '服务器错误',
					status: 500,
					error: error.message
			});
	}
};

module.exports = {
	keshi_doctorMsg
}
