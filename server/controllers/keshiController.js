const db = require('../db.js')
let keshiMsg = async (req, res) => {
	let sql = "SELECT * FROM keshimsg";
	let params = [];

	try {
			const { results: data } = await db.exec(sql, params);
			console.log(data);

			if (data.length === 0) {
					res.json({
							status: 500,
							msg: '获取科室信息介绍失败'
					});
			} else {
					res.json({
							status: 200,
							data: data,
							msg: '科室信息介绍'
					});
			}
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};
module.exports = {
	keshiMsg
}
