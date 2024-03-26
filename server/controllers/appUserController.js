// 数据库的操作
const db = require('../db.js')
const qs=require('qs')
// 获取用户列表信息和查询用户信息
let getUserslist = async (req, res) => {
	const pageNum = parseInt(req.query.page_num, 10);
	const pageSize = parseInt(req.query.page_size, 10);
	const queryData = req.query.query_data;

	try {
			let sql, params, totalSql, totalParams;
			if (queryData) {
					sql = "SELECT * FROM app_users WHERE username=?";
					params = [queryData];
					totalSql = 'SELECT COUNT(*) AS total FROM app_users WHERE username=?';
					totalParams = [queryData];
			} else {
					sql = "SELECT * FROM app_users LIMIT ?, ?";
					params = [(pageNum - 1) * pageSize, pageSize];
					totalSql = 'SELECT COUNT(*) AS total FROM app_users';
					totalParams = [];
			}

			// 执行查询
			const { results: data } = await db.exec(sql, params);
			const { results: dataTotal } = await db.exec(totalSql, totalParams);
			let total = dataTotal[0].total;

			res.json({
					status: 200,
					message: "success",
					data: data,
					paging: {
							page_num: pageNum,
							page_size: pageSize,
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

// 更新app用户信息
let update_appUsers = async (req, res) => {
	let { id, nickname, pasd, sex, email, address, phone } = req.body.newData;

	let sql = "UPDATE app_users SET nickname=?, sex=?, password=?, email=?, address=?, phone=? WHERE id=?";
	let params = [nickname, sex, pasd, email, address, phone, id];

	try {
			const { results } = await db.exec(sql, params);
			if (results.affectedRows === 0) {
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

// 删除app用户信息
let delete_appUsers = async (req, res) => {
	let userId = req.body.id;
	let sql = "DELETE FROM app_users WHERE id=?";
	let params = [userId];

	try {
			const { results } = await db.exec(sql, params);
			if (results.affectedRows === 0) {
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

// 添加app用户信息
let add_app = async (req, res) => {
	let { nickname, username, password, sex, email, address, phone, role } = req.body.add_form_data;
	let sql = "INSERT INTO app_users (nickname, password, username, sex, email, address, phone, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
	let params = [nickname, password, username, sex, email, address, phone, role];

	try {
			const { results } = await db.exec(sql, params);
			if (results.affectedRows === 0) {
					res.json({
							status: 404,
							msg: '添加用户失败'
					});
			} else {
					res.json({
							status: 200,
							msg: '添加用户成功'
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


// 用户登录查询
let appuser = async (req, res) => {
	let username = req.query.username;
	let password = req.query.password;
	let sql = "SELECT * FROM app_users WHERE username=? AND password=?";
	let params = [username, password];

	try {
			const { results: data } = await db.exec(sql, params);
			if (data.length == 0) {
					res.json({
							status: 404,
							msg: '失败'
					});
			} else {
					res.json({
							status: 200,
							data: data,
							msg: '成功'
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

// 移动端的普通用户注册
let adds = async (req, res) => {
	let { username, password, phone, email, sex } = req.body;

	let sql = "INSERT INTO app_users (username, password, phone, email, sex) VALUES (?, ?, ?, ?, ?)";
	let params = [username, password, phone, email, sex];

	try {
			const { results } = await db.exec(sql, params);
			if (results.affectedRows === 0) {
					res.json({
							status: 404,
							msg: '注册失败'
					});
			} else {
					res.json({
							status: 200,
							msg: '注册成功'
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

// 修改用户密码
let update_pasd = async (req, res) => {
	let { username, password } = req.body;

	let sql = "UPDATE app_users SET password=? WHERE username=?";
	let params = [password, username];

	try {
			const { results } = await db.exec(sql, params);
			if (results.affectedRows === 0) {
					res.json({
							status: 404,
							msg: '修改密码失败'
					});
			} else {
					res.json({
							status: 200,
							msg: '修改密码成功'
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

// 设置用户信息
let insert_msg = async (req, res) => {
	let { username, form } = req.body;
	let [nickname, address, petname, email, phone, sex] = form.map(item => item.value);
	let role = "普通用户";

	let sql = "UPDATE app_users SET nickname=?, address=?, role=?, petname=?, email=?, phone=?, sex=? WHERE username=?";
	let params = [nickname, address, role, petname, email, phone, sex, username];

	try {
			const { results } = await db.exec(sql, params);
			if (results.affectedRows === 0) {
					res.json({
							status: 404,
							msg: '设置失败'
					});
			} else {
					res.json({
							status: 200,
							msg: '设置成功'
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

// 获取自己的信息
let mySelfMsg = async (req, res) => {
	let username = req.query.username;
	let sql = "SELECT * FROM app_users WHERE username=?";
	let params = [username];

	try {
			const { results: data } = await db.exec(sql, params);
			if (data.length == 0) {
					res.json({
							status: 500,
							msg: '获取基本信息失败'
					});
			} else {
					res.json({
							status: 200,
							data: data[0],
							msg: '基本信息'
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
	getUserslist,
	update_appUsers,
	delete_appUsers,
	add_app,
	appuser,
	adds,
	update_pasd,
	insert_msg,
	mySelfMsg
}


/*

* 分页查询

* mysql 提供的分页方法: limit m,n ==>m代表从第几号位开始，n: 代表选取的个数

** eg(前10条数据):select * from websites limit 0,10 ==>从第一号位开始，取10条数据 (当前page_num=1) ;m=(1-1)*10

** eg(11-20条数据)：select * from websites limit 10,10 ==>(当前page_num=2) ; m=(2-1)*10

* 由两个例子可见sql分页语句应为：

select * from table limit (page_num-1)*page_size,page_size;

其中page_num是页码，page_szie是每页显示的条数

*/
