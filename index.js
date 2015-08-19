
var express = require('express'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	flash = require('flash'),
	morgan = require('morgan'),
	userRouter = require('./routers/userRouter'),
	log = console.log.bind(console)

var app = express();
app.set('view engine', 'ejs')

//app.use(morgan('dev'));
app.use(express.static('public'));

app.use(bodyParser.urlencoded());
app.use(session({secret: 'keyboard cat'}));
app.use(flash());
app.use(function(req, res, next) {
	res.locals.req = req;
	//req.flash('danger', 'error message');
	next();
})

app.use(morgan('dev'));

app.use('/user', userRouter);

app.listen(3001, function() {
	console.log('listening on 3001');
})