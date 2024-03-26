const db = require('../db.js')
// 获取打卡信息列表
let dakaMsg = async (req, res) => {
	const page_num = parseInt(req.query.page_num); // 当前的num
	const page_size = parseInt(req.query.page_size); // 当前页的数量

	try {
			let sql = "SELECT * FROM dakaMsg LIMIT ?, ?";
			let params = [(page_num - 1) * page_size, page_size];
			const { results: data } = await db.exec(sql, params);

			let sqlTotal = 'SELECT COUNT(*) AS total FROM dakaMsg';
			const { results: dataTotal } = await db.exec(sqlTotal);
			let total = dataTotal[0].total; // 查询表中的数量

			res.json({
					status: 200,
					message: "success",
					data: data,
					paging: {
							page_num: page_num,
							page_size: page_size,
							total: total
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

// 打卡操作
let daka = async (req, res) => {
	let username = req.body.username;
	let status = "已打卡";

	try {
			let sql = 'UPDATE dakamsg SET status=? WHERE name=?';
			let params = [status, username];
			const { results } = await db.exec(sql, params);

			res.json({
					status: 200,
					message: "success",
					data: results
			});
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};

// 获取个人打卡信息
let self_dakaMsg = async (req, res) => {
	let doctorId = req.query.doctorId;

	try {
			let sql = 'SELECT * FROM dakamsg WHERE doctor_id=?';
			let params = [doctorId];
			const { results: data } = await db.exec(sql, params);
			console.log("打卡data: ", data);

			res.json({
					status: 200,
					message: "daka success",
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

// 插入打卡信息
let insert_dakaMsg = async (req, res) => {
	let username = req.body.username;
	let status = req.body.status;
	let time = req.body.time;
	let doctorId = req.body.doctorId;

	try {
			let sql = 'INSERT INTO dakamsg (name, status, time, doctor_id) VALUES (?, ?, ?, ?)';
			let params = [username, status, time, doctorId];
			const { results } = await db.exec(sql, params);

			res.json({
					status: 200,
					message: "insert daka success",
					data: results
			});
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};

// 删除打卡信息
let delete_dakaMsg = async (req, res) => {
	let Id = req.body.id;

	try {
			let sql = "DELETE FROM dakamsg WHERE id=?";
			let params = [Id];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows == 0) {
					res.json({
							status: 404,
							msg: '删除失败'
					});
			} else {
					res.json({
							status: 200,
							msg: '删除成功'
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

module.exports={
	dakaMsg,
	daka,
	self_dakaMsg,
	insert_dakaMsg,
	delete_dakaMsg
}