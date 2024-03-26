const db = require('../db.js')
let guahaoMsg = async (req, res) => {
  try {
    const page_num = req.query.page_num; //当前的num
    const page_size = req.query.page_size; //当前页的数量
    const query_data = req.query.query_data;

    // 列表模块
    let sql = "select * from guahaoMsg limit ?,?";
    let params = [(parseInt(page_num) - 1) * parseInt(page_size), parseInt(page_size)];

    const { results } = await db.exec(sql, params);
    if (results) {
      let sqlTotal = 'select count(*) as total from guahaoMsg';
      let params = [];
      const { results: dataTotal } = await db.exec(sqlTotal, params);
      if (dataTotal) {
        let total = dataTotal[0].total; //查询表中的数量
        res.json({
          status: 200,
          message: "success",
          data: results,
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

let insertGuahaoMsg = async (req, res) => {
  try {
    console.log(req.body);
    let keshi = req.body.keshi;
    let doctor = req.body.doctor;
    let day = req.body.day;
    let daytime = req.body.time[0];
    let time = req.body.time[1];
    let username = req.body.username;
    let petname = req.body.petname;
    let phone = req.body.phone;
    let doctorId = req.body.doctorId;

    let sql = "insert into guahaoMsg (petname, petuser, petuser_tel, guahao_keshi, doctor, guahaoTime, daytime, time_duan, doctor_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let params = [petname, username, phone, keshi, doctor, day, daytime, time, doctorId];

    const { results: data } = await db.exec(sql, params);
    console.log(data);

    if (data == "{}") {
      res.json({
        status: 404,
        msg: '挂号失败'
      });
    } else {
      res.json({
        status: 200,
        msg: '挂号成功'
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

let SelfGuahaoMsg = async (req, res) => {
  try {
    let username = req.query.username;

    let sql = "select * from guahaoMsg where petuser = ?";
    let params = [username];

    const { results: data } = await db.exec(sql, params);
    console.log(data);

    if (data.length == 0) {
      res.json({
        status: 500,
        msg: '获取挂号信息失败'
      });
    } else {
      res.json({
        status: 200,
        data: data,
        msg: '挂号信息'
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

let delete_guahaoMsg = async (req, res) => {
  try {
    let userId = req.body.id;
    let sql = "delete from guahaoMsg where id = ?";
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
};

module.exports = {
	guahaoMsg,
	insertGuahaoMsg,
	SelfGuahaoMsg,
	delete_guahaoMsg
}