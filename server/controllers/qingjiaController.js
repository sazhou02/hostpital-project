const db = require('../db.js')
// 获取请假列表信息
let qingjiaList = async (req, res) => {
	const page_num = parseInt(req.query.page_num); // 当前的num
	const page_size = parseInt(req.query.page_size); // 当前页的数量

	try {
			// 列表模块
			let sql = "SELECT * FROM qingjiaMsg LIMIT ?, ?";
			let params = [(page_num - 1) * page_size, page_size];
			const { results: data } = await db.exec(sql, params);

			// 获取总数
			let sqlTotal = 'SELECT COUNT(*) AS total FROM qingjiaMsg';
			const { results: dataTotal } = await db.exec(sqlTotal);

			let total = dataTotal[0].total; // 查询表中的数量
			res.json({
					status: 200,
					message: "success",
					data: data,
					paging: {
							page_num,
							page_size,
							total
					}
			});
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};

// 更新请假信息
let updata_qingjiaMsg = async (req, res) => {
	let stau = req.body.form.status;
	let id = req.body.form.id;

	try {
			let sql = "UPDATE qingjiaMsg SET status=? WHERE id=?";
			let params = [stau, id];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows == 0) {
					res.json({
							status: 404,
							msg: '更新失败'
					});
			} else {
					res.json({
							status: 200,
							msg: '更新成功'
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

// 提交请假申请
let tijiao = async (req, res) => {
	let username = req.body.username;
	let time = req.body.time;
	let howlong = req.body.howlong;
	let li_you = req.body.li_you;
	let status = "申请中";

	try {
			let sql = "INSERT INTO qingjiaMsg (name, time, howlong, li_you, status) VALUES (?, ?, ?, ?, ?)";
			let params = [username, time, howlong, li_you, status];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows == 0) {
					res.json({
							status: 404,
							msg: '提交失败'
					});
			} else {
					res.json({
							status: 200,
							msg: '提交成功'
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

// 获取个人请假信息
let self_qingjiaMsg = async (req, res) => {
	let username = req.query.username;

	try {
			let sql = 'SELECT * FROM qingjiaMsg WHERE name=?';
			let params = [username];
			const { results: data } = await db.exec(sql, params);

			res.json({
					status: 200,
					message: "success",
					data: data
			});
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};

module.exports = {
	qingjiaList,
	updata_qingjiaMsg,
	tijiao,
	self_qingjiaMsg
}