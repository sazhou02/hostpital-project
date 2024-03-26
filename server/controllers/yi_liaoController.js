const db = require('../db.js')
let yi_liaoMsg = async (req, res) => {
  try {
    let sql = "select * from usuall_fill";
    let params = [];

    const { results: data } = await db.exec(sql, params);

    if (data.length == 0) {
      res.json({
        status: 500,
        msg: '获取常见的医疗方法信息失败'
      });
    } else {
      res.json({
        status: 200,
        data: data,
        msg: '成功获取常见的医疗方法信息'
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

let yi_liaoMsg2 = async (req, res) => {
  try {
    const page_num = req.query.page_num; // 当前的num
    const page_size = req.query.page_size; // 当前页的数量
    const query_data = req.query.query_data;

    if (query_data) {
      let sql = "select * from usuall_fill where username=?";
      let params = [query_data];

      const { results: data } = await db.exec(sql, params);

      if (data) {
        let sqlTotal = 'select count(*) as total from usuall_fill where username=?';
        let params = [query_data];

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
    } else {
      let sql = "select * from usuall_fill limit ?,?";
      let params = [(parseInt(page_num) - 1) * parseInt(page_size), parseInt(page_size)];

      const { results: data } = await db.exec(sql, params);

      if (data) {
        let sqlTotal = 'select count(*) as total from usuall_fill';
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
    }
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
};

let update_yiliaoMsg = async (req, res) => {
  try {
    let id = req.body.newData.id;
    let title = req.body.newData.title;
    let reason = req.body.newData.reason;
    let fangfa = req.body.newData.fangfa;
    let sysbol = req.body.newData.sysbol;

    let sql = "update usuall_fill set title_ming=?,reason=?,fangfa=?,sysbol=? where id=?";
    let params = [title, reason, fangfa, sysbol, id];

    const { results: data } = await db.exec(sql, params);

    if (data.length == 0) {
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
  } catch (err) {
    console.error(err);
    res.json({
      status: 500,
      msg: '服务器错误'
    });
  }
};

let delete_yiliaoMsg = async (req, res) => {
  try {
    let userId = req.body.id;
    let sql = "delete from usuall_fill where id=?";
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

let add_yiliaoMsg = async (req, res) => {
  try {
    let title_ming = req.body.title_ming;
    let reason = req.body.reason;
    let sysbol = req.body.sysbol;
    let fangfa = req.body.fangfa;

    let sql = "insert into usuall_fill (title_ming,reason,sysbol,fangfa) values(?,?,?,?)";
    let params = [title_ming, reason, sysbol, fangfa];

    const { results: data } = await db.exec(sql, params);

    if (data == "{}") {
      res.json({
        status: 404,
        msg: '添加失败'
      });
    } else {
      res.json({
        status: 200,
        msg: '添加成功'
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
	yi_liaoMsg,
	yi_liaoMsg2,
	delete_yiliaoMsg,
	update_yiliaoMsg,
	add_yiliaoMsg
}
