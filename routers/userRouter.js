
var express = require('express'),
	ctrl = require('../controllers/userCtrl')


var router = module.exports = express.Router();

router.get('/', ctrl.list)

router.get('/edit/:id', ctrl.editGet)

router.post(['/edit/:id', '/edit'], ctrl.editPost)

router.get('/add', ctrl.add);
router.post('/add', ctrl.editPost);
