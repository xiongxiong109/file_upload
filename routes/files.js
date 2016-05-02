// 处理文件上传
var express = require('express');
var router = express.Router();

var formidable = require('formidable');
var fs = require('fs');

router.post('/upload', function(req, res, next) {
	var form = new formidable.IncomingForm();
	form.encoding = 'utf-8';
	form
	.parse(req, function(err, fields, files) {

		if (err) {
			console.log(err);
		} else { // 获取avatar文件上传的信息

			var cachePath = files.file.path;
			var fileName = files.file.name;
			
			fs.readFile(cachePath, function(err, data) {
				if(err) {
					console.log('读取错误:' + err);
				}
				fs.open('./public/files/' + fileName, 'w+', function(err, fd) {
					if(err) {
						console.log(err);
					} else {
						fs.writeFileSync('./public/files/' + fileName, data);
					}
				});
				
			});
			

		}
	})
	.on('file', function(name, file) {
		res.send({
			name: name,
			file: file
		});
	});

});

module.exports = router;