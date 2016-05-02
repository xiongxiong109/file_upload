// 使用localResize前端压缩图片后上传
var $file = $("#avatar");

$file.on('change', function() {

	var _self = this;

	lrz(_self.files[0], {width: 400})
		.then(function(rst){ // rst.formData可以拿到传给后台的formData数据流
			alert(_self.files[0]);
			// sendAjax(rst);
		})
		.catch(function(err){
			console.log(err);
		});

});

function toFixed2(num) {
	return num.toFixed(2);
}

// function sendAjax(formData) {
// 	var x = new XMLHttpRequest();
// 	x.open('post', '/file/upload');
// 	x.send(formData);

// 	x.onload = function() {
// 		if(x.status == 200 && x.readyState == 4) {
// 			console.log(x.response);
// 		}
// 	}
// 	// 上传进度
// 	x.upload.onprogress = function(e) {
// 		console.log(e);
// 	}
// }

function sendAjax(rst) {
	
	rst.formData.append('fileLen', rst.fileLen);
	$.ajax({
		url: '/file/upload',
		type: 'post',
		dataType: 'json',
		cache: false,
		processData: false,
		contentType: false,
		data: rst.formData,
		success: function(data) {
			console.log(data);
		},
		error: function(xhr, status, err) {
			console.log(err);
		}
	});

}