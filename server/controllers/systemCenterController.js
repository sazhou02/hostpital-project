const db = require('../db.js')
let alterPassword = async (req, res) => {
	let password = req.body.password;
	let password2 = req.body.password2;
	let username = req.body.username;

	try {
			let sql = "UPDATE manage_users SET password=? WHERE username=? AND password=?";
			let params = [password2, username, password];
			const { results } = await db.exec(sql, params);
			if (results.affectedRows == 0) {
					res.json({
							status: 404,
							msg: '修改失败，原密码错误或用户不存在'
					});
			} else {
					res.json({
							status: 200,
							msg: '修改成功',
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
	alterPassword
}
