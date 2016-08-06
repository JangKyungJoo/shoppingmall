var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/after', function(req, res, next) {
	res.render('main', { title: 'Express' });
});

router.get('/before', function(req, res, next){
	res.render('before');
});
/*
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next){
	console.log(req.body.id);
	console.log(req.body.passwd);
});
*/
module.exports = router;
