// 数据库的操作
const db = require('../db.js')
let zhibanMsg = async (req, res) => {
  try {
    const page_num = req.query.page_num; // 当前的num
    const page_size = req.query.page_size; // 当前页的数量

    let sql = "select * from zhibanmsg  limit ?,?";
    let params = [(parseInt(page_num) - 1) * parseInt(page_size), parseInt(page_size)];

    const { results: data } = await db.exec(sql, params);
    if (data) {
      let sqlTotal = 'select count(*) as total from zhibanmsg';
      let params = [];
      const { results: dataTotal } = await db.exec(sqlTotal, params);
      if (dataTotal) {
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
      }
    } else {
      res.json({
        status: 404,
        data: null,
        msg: '查询失败，资源不存在',
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}

let update_zhibanMsg = async (req, res) => {
  try {
    let userid = req.body.id;
    let monday = req.body.mondayStatus;
    let tuesday = req.body.tuesdayStatus;
    let wednesday = req.body.wednesdayStatus;
    let thursday = req.body.thursdayStatus;
    let friday = req.body.fridayStatus;
    let saturday = req.body.saturdayStatus;
    let sunday = req.body.sundayStatus;

    let sql = "update zhibanmsg set mondayStatus=?,tuesdayStatus=?,wednesdayStatus=?,thursdayStatus=?,fridayStatus=?,saturdayStatus=?,sundayStatus=? where id=?";
    let params = [monday, tuesday, wednesday, thursday, friday, saturday, sunday, userid];

    const { results: data } = await db.exec(sql, params);

    res.json({
      status: 200,
      msg: '更新成功'
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}

let selfzhibanMsg = async (req, res) => {
  try {
    let username = req.query.username;

    let sql = "select * from zhibanmsg where username=?";
    let params = [username];

    const { results: data } = await db.exec(sql, params);

    res.json({
      status: 200,
      msg: '成功',
      data: data
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}

let insert_zhibanMsg = async (req, res) => {
  try {
    let username = req.body.username;
    let monday = req.body.mondayStatus;
    let tuesday = req.body.tuesdayStatus;
    let wednesday = req.body.wednesdayStatus;
    let thursday = req.body.thursdayStatus;
    let friday = req.body.fridayStatus;
    let saturday = req.body.saturdayStatus;
    let sunday = req.body.sundayStatus;

    let sql = "insert into zhibanmsg (username,mondayStatus,tuesdayStatus,wednesdayStatus,thursdayStatus,fridayStatus,saturdayStatus,sundayStatus) values(?,?,?,?,?,?,?,?)";
    let params = [username, monday, tuesday, wednesday, thursday, friday, saturday, sunday];

    const { results: data } = await db.exec(sql, params);

    res.json({
      status: 200,
      msg: '成功',
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}

let delete_zhibanMsg = async (req, res) => {
  try {
    let userId = req.body.id;

    let sql = "delete from zhibanmsg where id=?";
    let params = [userId];

    const { results: data } = await db.exec(sql, params);

    if (data.length == 0) {
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
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}
module.exports = {
	zhibanMsg,
	update_zhibanMsg,
	selfzhibanMsg,
	insert_zhibanMsg,
	delete_zhibanMsg
}