var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* loadImg Page */
router.get('/load', function(req, res, next) {
	res.render('loadImg', {title: '原生图片上传'});
});

module.exports = router;
