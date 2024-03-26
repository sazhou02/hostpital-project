// 引入mysql2模块
const mysql = require('mysql2');

// 创建连接池对象
const pool = mysql.createPool({
  host: "localhost", // 主机
  user: "root", // 用户名
  password: "123456", // 密码
  port: 3306, // 端口号
  database: "hospital_management", // 数据库名
  // connectionLimit: 20, // 指定数据库连接池中最大的连接数，默认是10个
  // queueLimit: 2 // 指定挂起的最大连接数，默认是0
  waitForConnections: true
}).promise();

// 封装sql语句
const exec = async (sql, params) => {
  try {
    // 从连接池获取连接
    const [results, fields] = await pool.query(sql, params);
    // 请求数据库成功，返回查询结果
    return { results, fields };
  } catch (err) {
    console.error("执行sql语句查询数据库失败,失败原因：" + err);
    throw err; // 抛出异常让调用者处理
  }
};

module.exports = {
  exec
};