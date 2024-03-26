// 接收图片上传

const express = require("express")
// 数据库的操作
const db=require('../db.js')

const router=express.Router()

const path=require('path')
const fs = require('fs')
// 导入muilter插件
const multer=require('multer')

// 使用multer生成一个仓库信息
const stroage_cang=multer.diskStorage({
	// 设定存储路径
	destination:function(req,file,cb){
		// req  本次请求
		// file  本次请求的文件
		//cb   回调函数，利用回调函数来设定存储的路径
		// 回调函数的第一个参数为null，表示不要修改我的二进制流 文件
		cb(null,path.join(__dirname,'../public/img'))
	},
	// 设置文件名称
	filename:function(req,file,cb){
		// req  本次请求
		// file  本次上传的文件信息
		// 通过回调来设定文件的名称
		// console.log(file)
		// 获取文件的后缀
		const tem=path.extname(file.originalname)
		// 设置图片文件的命名
		cb(null,`avar_${new Date().getTime()}-${Math.random().toString().slice(2)}${tem}`)
	}
})
// 设置接收器，带有仓库信息
const fileUpload=multer({storage:stroage_cang})

router.post('/photo', fileUpload.single('img'), async (req, res) => {
	let username = req.body.username;
	let { size, mimetype, path } = req.file;
	let types = ['jpeg', 'jpg', 'png', 'gif']; // 允许上传的类型
	let tmpType = mimetype.split('/')[1];

	// 检查上传的文件大小和类型
	if (size > 5000000) {
			return res.send({ err: -1, msg: '上传的内容不能超过5000000' });
	} else if (!types.includes(tmpType)) {
			return res.send({ err: -2, msg: '上传的类型错误' });
	}

	// 文件类型和大小都符合要求，更新用户头像信息
	try {
			let url = req.file.filename;
			let http = 'http://127.0.0.1:3000/' + url;
			let sql = "UPDATE app_users SET headphoto=? WHERE username=?";
			let params = [http, username];

			const { results } = await db.exec(sql, params);

			res.json({
					status: 200,
					msg: '头像上传成功,更新成功'
			});
	} catch (error) {
			res.json({
					status: 500,
					msg: '服务器错误',
					error: error.message
			});
	}
});




// 导出表
module.exports=router
