// 数据库的操作
const db = require('../db.js')
const qs=require('qs')
let dangAnMsg = async (req, res) => {
	const page_num = parseInt(req.query.page_num); // 当前的num
	const page_size = parseInt(req.query.page_size); // 当前页的数量
	const query_data = req.query.query_data;

	try {
			let sql, params, total;
			if (query_data) {
					// 查询模式
					sql = "SELECT * FROM dangAnMsg WHERE petname=?";
					params = [query_data];
					const { results: data } = await db.exec(sql, params);

					if (data.length > 0) {
							let sqlTotal = "SELECT COUNT(*) AS total FROM dangAnMsg WHERE petname=?";
							const { results: dataTotal } = await db.exec(sqlTotal, params);
							total = dataTotal[0].total; // 查询表中的数量

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
					} else {
							res.json({
									status: 404,
									data: null,
									msg: '查询失败，资源不存在',
							});
					}
			} else {
					// 列表模式
					sql = "SELECT * FROM dangAnMsg LIMIT ?, ?";
					params = [(page_num - 1) * page_size, page_size];
					const { results: data } = await db.exec(sql, params);

					let sqlTotal = "SELECT COUNT(*) AS total FROM dangAnMsg";
					const { results: dataTotal } = await db.exec(sqlTotal);
					total = dataTotal[0].total; // 查询表中的数量

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
			}
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};

let daleteDangAnMsg = async (req, res) => {
	let Id = req.body.id;

	try {
			let sql = "DELETE FROM dangAnMsg WHERE id=?";
			let params = [Id];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows > 0) {
					res.json({
							status: 200,
							msg: '删除成功'
					});
			} else {
					res.json({
							status: 404,
							msg: '删除失败'
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

let getPetMsg = async (req, res) => {
	let petusername = req.query.petusername;

	try {
			let sql = "SELECT * FROM dangAnMsg WHERE petusername=?";
			let params = [petusername];
			const { results: data } = await db.exec(sql, params);

			res.json({
					status: 200,
					data: data,
					msg: '基本信息'
			});
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};
let postPetMsg = async (req, res) => {
	console.log(req.body);
	let petname = req.body.form[0].value;
	let petusername = req.body.form[1].value;
	let phone = req.body.form[2].value;
	let history = req.body.form[3].value;

	try {
			let sql = "UPDATE dangAnMsg SET petname=?, phone=?, history=? WHERE petusername=?";
			let params = [petname, phone, history, petusername];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows == 0) {
					// res.json({
					// 		status: 404,
					// 		msg: '更新失败，宠物信息不存在'
					// });
					const insertSql = "INSERT INTO dangAnMsg(petname, petusername, phone, history) VALUES(?,?,?,?)";
					const insertParams = [petname, petusername, phone, history];
					const { results: data } = await db.exec(insertSql, insertParams);
					
					if (data.affectedRows > 0) {
							res.json({
									status: 200,
									msg: '添加成功'
							});
					}
			} else {
					res.json({
							status: 200,
							msg: '更新成功'
					});
			}
	} catch (error) {
			console.error(error);
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
};
let updatePet = async (req, res) => {
	let { petusername, petname, history, phone, photoUrl } = req.body;

	try {
			let sql = "UPDATE dangAnMsg SET petname=?, phone=?, history=?, photoUrl=? WHERE petusername=?";
			let params = [petname, phone, history, photoUrl, petusername];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows > 0) {
					res.json({
							status: 200,
							msg: '更新成功'
					});
			} else {
					res.json({
							status: 404,
							msg: '更新失败'
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
	dangAnMsg,
	daleteDangAnMsg,
	getPetMsg,
	postPetMsg,
	updatePet
}
