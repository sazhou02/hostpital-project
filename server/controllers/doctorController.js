// 数据库的操作
const db = require('../db.js')

// 获取医生用户信息列表
let doctorUsers = async (req, res) => {
    const page_num = parseInt(req.query.page_num, 10);
    const page_size = parseInt(req.query.page_size, 10);
    const query_data = req.query.query_data;

    try {
        if (query_data) {
            const sql = "SELECT * FROM doctor_users WHERE username=?";
            const params = [query_data];
            const { results: data } = await db.exec(sql, params);

            if (data.length > 0) {
                const sqlTotal = 'SELECT COUNT(*) AS total FROM doctor_users WHERE username=?';
                const { results: dataTotal } = await db.exec(sqlTotal, params);
                const total = dataTotal[0].total;

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
            } else {
                res.json({
                    status: 404,
                    msg: '查询失败，资源不存在'
                });
            }
        } else {
            const sql = "SELECT * FROM doctor_users LIMIT ?, ?";
            const params = [(page_num - 1) * page_size, page_size];
            const { results: data } = await db.exec(sql, params);

            if (data.length > 0) {
                const sqlTotal = 'SELECT COUNT(*) AS total FROM doctor_users';
                const { results: dataTotal } = await db.exec(sqlTotal, []);
                const total = dataTotal[0].total;

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
            } else {
                res.json({
                    status: 404,
                    msg: '查询失败，资源不存在'
                });
            }
        }
    } catch (error) {
        res.json({
            status: 500,
            msg: '服务器错误',
            error: error.message
        });
    }
};

// 添加医生用户
let add_doctorUsers = async (req, res) => {
    let { nickname, username, password, sex, email, address, phone, role } = req.body.add_form_data;

    try {
        let sql1 = "INSERT INTO zhibanmsg (username) VALUES (?)";
        let params1 = [username];
        await db.exec(sql1, params1);

        let sql = "INSERT INTO doctor_users (nickname, username, password, sex, email, address, phone, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        let params = [nickname, username, password, sex, email, address, phone, role];
        const { results } = await db.exec(sql, params);

        if (results.affectedRows > 0) {
            res.json({
                status: 200,
                msg: '添加用户成功'
            });
        } else {
            res.json({
                status: 404,
                msg: '添加用户失败'
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

// 删除医生用户信息
let delete_doctorUsers = async (req, res) => {
    let userid = req.body.id;

    try {
        let sql = "DELETE FROM doctor_users WHERE id=?";
        let params = [userid];
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

// 更新医生用户的信息
let update_doctorUsers = async (req, res) => {
    let { id, nickname, pasd, sex, email, address, phone } = req.body.newData;

    try {
        let sql = "UPDATE doctor_users SET nickname=?, password=?, sex=?, email=?, address=?, phone=? WHERE id=?";
        let params = [nickname, pasd, sex, email, address, phone, id];
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

// 获取医院医生的信息列表
let doctorIntroduceMsg = async (req, res) => {
    let username = req.query.username;

    try {
        let sql = "SELECT * FROM doctorlistmsg WHERE username=?";
        let params = [username];
        const { results: data } = await db.exec(sql, params);

        if (data.length > 0) {
            res.json({
                status: 200,
                data: data,
                msg: '医生信息'
            });
        } else {
            res.json({
                status: 500,
                msg: '获取医生信息失败'
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

// 医院人员管理中，医生信息列表
let doctormsg = async (req, res) => {
    const page_num = parseInt(req.query.page_num, 10);
    const page_size = parseInt(req.query.page_size, 10);
    const query_data = req.query.query_data;

    try {
        if (query_data) {
            let sql = "SELECT * FROM doctorlistmsg WHERE username=?";
            let params = [query_data];
            const { results: data } = await db.exec(sql, params);

            if (data.length > 0) {
                let sqlTotal = 'SELECT COUNT(*) AS total FROM doctorlistmsg WHERE username=?';
                const { results: dataTotal } = await db.exec(sqlTotal, params);
                let total = dataTotal[0].total;

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
            } else {
                res.json({
                    status: 404,
                    msg: '查询失败，资源不存在'
                });
            }
        } else {
            let sql = "SELECT * FROM doctorlistmsg LIMIT ?, ?";
            let params = [(page_num - 1) * page_size, page_size];
            const { results: data } = await db.exec(sql, params);

            if (data.length > 0) {
                let sqlTotal = 'SELECT COUNT(*) AS total FROM doctorlistmsg';
                const { results: dataTotal } = await db.exec(sqlTotal, []);
                let total = dataTotal[0].total;

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
            } else {
                res.json({
                    status: 404,
                    msg: '查询失败，资源不存在'
                });
            }
        }
    } catch (error) {
        res.json({
            status: 500,
            msg: '服务器错误',
            error: error.message
        });
    }
};

// app医生用户登录，获取数据库信息进行验证
let loginMsg = async (req, res) => {
	let username = req.query.username;
	let password = req.query.password;

	try {
			let sql = "SELECT * FROM doctor_users WHERE username=? AND password=?";
			let params = [username, password];
			const { results: data } = await db.exec(sql, params);

			if (data.length === 0) {
					res.json({
							status: 500,
							msg: '登录失败'
					});
			} else {
					res.json({
							status: 200,
							data: data[0], // 通常只返回单个用户信息
							msg: '登录成功'
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

// app医生用户修改密码
let update_pasd = async (req, res) => {
	let username = req.body.username;
	let password = req.body.password;

	try {
			let sql = "UPDATE doctor_users SET password=? WHERE username=?";
			let params = [password, username];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows > 0) {
					res.json({
							status: 200,
							msg: '修改密码成功'
					});
			} else {
					res.json({
							status: 404,
							msg: '修改密码失败'
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

// app医生用户注册
let addsdoctor = async (req, res) => {
	let { username, password, phone, email, sex } = req.body;
    const sql1 = "SELECT * FROM doctorlistmsg WHERE username = ?";
    const params1 = [username];
    const { results: listRes } = await db.exec(sql1, params1);
    if (listRes.length === 0) {
        res.json({
                status: 400,
                msg: '未找到医生用户，请重新输入姓名！'
        });
    }
	let role = "医师";
    const doctorId = listRes[0].id;

	try {
			let sql = "INSERT INTO doctor_users (username, password, phone, email, sex, role, doctor_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
			let params = [username, password, phone, email, sex, role, doctorId];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows > 0) {
					res.json({
							status: 200,
							msg: '注册成功'
					});
			} else {
					res.json({
							status: 404,
							msg: '注册失败'
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

// app医生用户,设置
let insert_msg = async (req, res) => {
	let { username, form } = req.body;
	let [nickname, age, zhiwei, keshi, address] = form.map(item => item.value);

	try {
			let sql = "UPDATE doctor_users SET nickname=?, age=?, zhi_wei=?, ke_shi=?, address=? WHERE username=?";
			let params = [nickname, age, zhiwei, keshi, address, username];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows > 0) {
					res.json({
							status: 200,
							msg: '设置成功'
					});
			} else {
					res.json({
							status: 404,
							msg: '设置失败'
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

// 查询APP医生用户的基本信息
let doctor_userMsg = async (req, res) => {
	let username = req.query.username;

	try {
			let sql = "SELECT * FROM doctor_users WHERE username=?";
			let params = [username];
			const { results: data } = await db.exec(sql, params);

			if (data.length > 0) {
					res.json({
							status: 200,
							data: data[0], // 通常只返回单个用户信息
							msg: '基本信息'
					});
			} else {
					res.json({
							status: 500,
							msg: '获取基本信息失败'
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

// 医院人员管理，添加医生人员
let add_doctotlistMsg = async (req, res) => {
	let { username, sex, age, phone, zhi_wei, ke_shi, shan_chang } = req.body.add_form_data;

	try {
			let sql = "INSERT INTO doctorlistmsg (username, age, sex, phone, zhi_wei, ke_shi, shan_chang) VALUES (?, ?, ?, ?, ?, ?, ?)";
			let params = [username, age, sex, phone, zhi_wei, ke_shi, shan_chang];
			const { results } = await db.exec(sql, params);

			if (results.affectedRows > 0) {
					res.json({
							status: 200,
							msg: '添加用户成功'
					});
			} else {
					res.json({
							status: 404,
							msg: '添加用户失败'
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

let delete_doctorlistMsg = async (req, res) => {
	let userid = req.body.id;

	try {
			let sql = "DELETE FROM doctorlistmsg WHERE id=?";
			let params = [userid];
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

let UpdatedoctorlistMsg = async (req, res) => {
	let { id, username, age, sex, keshi, phone, zhiwei, shan_chang } = req.body.newData;

	try {
			let sql = "UPDATE doctorlistmsg SET username=?, age=?, sex=?, ke_shi=?, phone=?, zhi_wei=?, shan_chang=? WHERE id=?";
			let params = [username, age, sex, keshi, phone, zhiwei, shan_chang, id];
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

getDoctorPatient = async (req, res) => {
	try {
		let sql = "SELECT * FROM doctor_users WHERE id=?";
		let id = [req.query.id];
		const { results } = await db.exec(sql, id);
		const doctorId = results[0].doctor_id;
		const sql2 = "SELECT * FROM guahaomsg WHERE doctor_id=?";
		const params = [doctorId];
		const { results: results2 } = await db.exec(sql2, params);
		if (results2.length > 0) {
			res.json({
					status: 200,
					msg: 'ok',
					data: results2
			});
		}
	}catch (error) {
		res.json({
			status: 500,
			msg: '服务器错误',
			error: error.message
		});
	}
}

module.exports = {
	doctorUsers,
	add_doctorUsers,
	delete_doctorUsers,
	update_doctorUsers,
	doctorIntroduceMsg,
	doctormsg,
	loginMsg,
	update_pasd,
	addsdoctor,
	insert_msg,
	doctor_userMsg,
	add_doctotlistMsg,
	delete_doctorlistMsg,
	UpdatedoctorlistMsg,
	getDoctorPatient
}
