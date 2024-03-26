const db = require('../db.js')

let hospital_introduce = async (req, res) => {
  try {
    let sql = "select * from hospitalintroduce";
    let params = [];
    const { results } = await db.exec(sql, params);
    
    if (results.length == 0) {
      res.json({
        status: 404,
        msg: '获取失败'
      });
    } else {
      res.json({
        status: 200,
        msg: '获取成功',
        data: results
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

let update_introduce = async (req, res) => {
  try {
    let formData = req.body;
    let intro = formData.desc_title;
    let name = formData.name;
    
    let sql = "update hospitalintroduce set introduce=? where name=?";
    let params = [intro, name];
    await db.exec(sql, params);
    
    res.json({
      status: 200,
      msg: '修改成功'
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}



let hospitalMsg = async (req, res) => {
  try {
    let sql = "select * from gongGaoMsg";
    let params = [];
    const { results } = await db.exec(sql, params);
    
    if (results.length == 0) {
      res.json({
        status: 404,
        msg: '获取失败'
      });
    } else {
      res.json({
        status: 200,
        msg: '获取成功',
        dataMsg: results
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

let delete_hospitalMsg = async (req, res) => {
  try {
    let id = req.body.id;
    console.log(id);
    
    let sql = "delete from gongGaoMsg where id=?";
    let params = [id];
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

let update_hospitalMsg = async (req, res) => {
  try {
    let id = req.body.id;
    let descc = req.body.ds;
    
    let sql = "update gongGaoMsg set miaoshu=? where id=?";
    let params = [descc, id];
    await db.exec(sql, params);
    
    res.json({
      status: 200,
      msg: '修改成功'
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}

let add_hospitalMsg = async (req, res) => {
  try {
    let tit = req.body.tit;
    let time = req.body.time;
    let miaoshu = req.body.add_miaoshu;
    
    let sql = "insert into gongGaoMsg (tit, time, miaoshu) values (?, ?, ?)";
    let params = [tit, time, miaoshu];
    await db.exec(sql, params);
    
    res.json({
      status: 200,
      msg: '添加成功'
    });
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
}

module.exports={
	hospital_introduce,
	update_introduce,
	hospitalMsg,
	delete_hospitalMsg,
	update_hospitalMsg,
	add_hospitalMsg
}