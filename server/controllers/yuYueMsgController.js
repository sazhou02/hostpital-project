const db = require('../db.js')
let yuYueMsg = async (req, res) => {
  try {
    const page_num = req.query.page_num; //当前的num
    const page_size = req.query.page_size; //当前页的数量
    const query_data = req.query.query_data;
    
    let sql = "select * from yuYueMsg limit ?,?";
    let params = [(parseInt(page_num) - 1) * parseInt(page_size), parseInt(page_size)];
    const { results } = await db.exec(sql, params);
    
    if (results) {
      let sqlTotal = 'select count(*) as total from yuYueMsg';
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

let insertyuYueMsg = async (req, res) => {
  try {
    let keshi = req.body.keshi;
    let doctor = req.body.doctor;
    let day = req.body.day;
    let daytime = req.body.time[0];
    let time = req.body.time[1];
    let username = req.body.username;
    let petname = req.body.petname;
    let phone = req.body.phone;
    let doctorId = req.body.doctorId;
    const selectYuYueSql = "select doctor,yuYueTime,daytime,time_duan from yuyuemsg where doctor_id = ? and daytime = ? and time_duan = ? and yuYueTime = ?";
    const selectYuYueParams = [doctorId, daytime, time, day];
    const { results: data } = await db.exec(selectYuYueSql, selectYuYueParams);
    const selectGuaHaoSql = "select doctor,guahaoTime,daytime,time_duan from guahaomsg where doctor_id = ? and daytime = ? and time_duan = ? and guahaoTime = ?";
    const selectGuaHaoParams = [doctorId, daytime, time, day];
    const { results: data1 } = await db.exec(selectGuaHaoSql, selectGuaHaoParams);
    if (data.length > 0 || data1.length > 0) {
      res.json({
        status: 200,
        msg: `${data[0]?.doctor || data1[0].doctor}医生${data[0]?.yuYueTime || data1[0].guahaoTime}号${data[0]?.daytime || data1[0].daytime}的${data[0]?.time_duan || data1[0].time_duan}时间段已被预约或已被挂号，请选择其他时间段或其他医生！`
      });
      return ;
    }
    
    let sql = "insert into yuYueMsg (petname, petuser, phone, keshi, doctor, yuYueTime, daytime, time_duan, doctor_id) values (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    let params = [petname, username, phone, keshi, doctor, day, daytime, time, doctorId];
    await db.exec(sql, params);
    
    res.json({
      status: 200,
      msg: '预约成功'
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}

let SelfyuYueMsg = async (req, res) => {
  try {
    console.log(req.query);
    let username = req.query.username;
    
    let sql = "select * from yuYueMsg where petuser = ?";
    let params = [username];
    const { results: data } = await db.exec(sql, params);
    
    if (data.length == 0) {
      res.json({
        status: 404,
        msg: '获取失败'
      });
    } else {
      res.json({
        status: 200,
        data: data,
        msg: '预约信息'
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

let delete_yuYueMsg = async (req, res) => {
  try {
    let userId = req.body.id;
    let sql = "delete from yuYueMsg where id = ?";
    let params = [userId];
    await db.exec(sql, params);
    
    res.json({
      status: 200,
      msg: '删除成功'
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}
module.exports = {
	yuYueMsg,
	insertyuYueMsg,
	SelfyuYueMsg,
	delete_yuYueMsg
}