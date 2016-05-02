// use jquery file upload
$(function() {
	var $progressBar = $("#progressBar");

	$("#fileUpload").on('change', function() {
		$progressBar.css('width', '0%');
	});

	$("#fileUpload").fileupload({
		url: '/file/upload',
		type: 'post',
		dataType: 'json',
		progressall: function(e,data) {
			var present = data.loaded / data.total * 100;
			$progressBar.css('width', present + '%');
			if (present >= 100) {
				setTimeout(function() {
					$progressBar.css('width', '0%');
				}, 1000);
			}
		},
		done: function(e, data) {
			// $progressBar.css('width', '0%');
		}
	});

});

// use zepto ajax
// $(function() {

// 	var $progressBar = $("#progressBar");
// 	var $form = $(document.fileForm);

// 	$form.on('submit', function(e) {

// 		e.preventDefault();
// 		var formData = new FormData($form[0]);
// 		$.ajax({
// 			url: '/file/upload',
// 			type: 'post',
// 			data: formData,
// 			cache: false,
// 			contentType: false,
// 			processData: false,
// 			success: function(data) {
// 				console.log(data);
// 			},
// 			error: function(xhr, status, err) {
// 				console.log(err);
// 			}
// 		});

// 	});

// });