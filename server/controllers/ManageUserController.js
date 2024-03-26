// 其他导入...
const db = require('../db.js');
const Token = require('../module/token.js');

// 登录,获取用户信息
let getUsers = async (req, res) => {
  let user = req.query.username;
  let psd = req.query.password;
  
  let sql = "SELECT * FROM manage_users WHERE username=? AND password=?";
  let params = [user, psd];

  try {
    const { results } = await db.exec(sql, params);
    
    if (results.length === 0) {
      res.json({
        status: 404,
        msg: '账号或密码错误',
      });
    } else {
      let id="JHGDFGY"; // 数据库返回的id
      let tokenKey = Token.en(id); // 假设Token.en同步执行
      res.json({
        status: 200,
        msg: '登录成功',
        data: results[0],
        tokenKey
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

// 添加用户
let addUsers = async (req, res) => {
  let user = req.body.username;
  let psd = req.body.password;
  let role = req.body.role;

  let sql = "INSERT INTO manage_users (username, password, role) VALUES (?, ?, ?)";
  let params = [user, psd, role];

  try {
    const { results } = await db.exec(sql, params);
    res.json({
      status: 200,
      data: results,
      msg: '添加成功'
    });
  } catch (error) {
    res.json({
      status: 500,
      msg: '服务器错误',
      error: error.message
    });
  }
};

// 删除用户
let DelUsers = async (req, res) => {
  let userid = req.body.id;

  let sql = "DELETE FROM manage_users WHERE id=?";
  let params = [userid];

  try {
    const { results } = await db.exec(sql, params);
    if (results.affectedRows === 0) {
      // 没有删除任何行，可能因为用户不存在
      res.json({
        status: 404,
        msg: '删除失败，用户不存在'
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

// 更新用户
let UpdateUsers = async (req, res) => {
  let userid = req.body.id;
  let username = req.body.username;
  let password = req.body.password;

  let sql = "UPDATE manage_users SET username=?, password=? WHERE id=?";
  let params = [username, password, userid];

  try {
    const { results } = await db.exec(sql, params);
    if (results.changedRows === 0) {
      // 没有更新任何行，可能因为用户不存在
      res.json({
        status: 404,
        msg: '更新失败，用户不存在'
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

// 列表用户
let Lists = async (req, res) => {
  const pageNum = parseInt(req.query.page_num, 10);
  const pageSize = parseInt(req.query.page_size, 10);

  let sql = "SELECT * FROM manage_users LIMIT ?, ?";
  let params = [(pageNum - 1) * pageSize, pageSize];

  try {
    const { results: userList } = await db.exec(sql, params);
    const { results: totalList } = await db.exec("SELECT COUNT(*) AS total FROM manage_users");

    let total = totalList[0].total;
    res.json({
      status: 200,
      message: "success",
      data: userList,
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

let delete_manage_users = async (req, res) => {
  let userid = req.body.id;

  let sql = "DELETE FROM manage_users WHERE id=?";
  let params = [userid];

  try {
    const { results } = await db.exec(sql, params);

    if (results.affectedRows === 0) {
      res.json({
        status: 404,
        msg: '删除失败，用户不存在'
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

module.exports = {
  getUsers,
  addUsers,
  DelUsers,
  UpdateUsers,
  Lists,
  delete_manage_users
};