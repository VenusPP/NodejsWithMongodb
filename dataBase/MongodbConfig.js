/*
* @Author: Administrator
* @Date:   2017-06-25 15:05:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-06-25 16:32:44
*/

'use strict';
// 引入 mongoose
const mongoose = require("mongoose")
// 数据库链接方式：遵循TCP协议 mongodb://域名/数据库
let dburl = "mongodb://localhost:27017/testone"
// 建立与mongodb的链接
mongoose.connect(dburl);
// 用来监听当nodejs与mongdb的链接建立的完成
mongoose.connection.on("connected",()=>{
	console.log(`Nodejs与mongodb成功建立链接:${dburl}`)
})
// 建立一个框架（Schema）
let Schema = mongoose.Schema;

//建立一个Schema程序框架
let ProductsSchema = new Schema({
	"title":String,
	"price":String,
	"cat":String
});

// 通过mongoose.model建立两个框架之间的mapping
let ProductsEntity = mongoose.model("products",ProductsSchema);

// let pro = new ProductsEntity({
// 	"title":"锤子手机",
// 	"price":"8550",
// 	"cat":"mobile"
// })
// // 添加的数据
// pro.save((err,result)=>{
// 	console.log(result)
// })
// 删除数据
// ProductsEntity.remove({"title":"VIVO手机"}).exec(function(err,result){
// 	console.log(result)
// })
// 修改数据
// ProductsEntity.update({"title":"锤子手机"},{$set:{"title":"手机锤子"}},(err,result)=>{
// 	console.log(result)
// })
// 查询数据
	// ProductsEntity.find({"title":"手机锤子"},(err,result)=>{
	// 	console.log(result)
	// })
// 查询分页
 ProductsEntity.find().skip(0).limit(3).exec((err,result)=>{
 	console.log(result)
 })
