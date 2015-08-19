
var userRepo = require('../data/userRepo')

var exp = module.exports = {};

function test() {
	console.log('this', this.res)

}
exp.list = function(req, res) {
test();
	res.render('pages/user/list', { users: userRepo.getAll()})
}

exp.editGet = function(req, res) {
	res.render('pages/user/edit', { user: userRepo.getOne(req.params.id), layout: 'views/layout'})
}

function valid(user) {
	return user.name && user.age && parseInt(user.age) != NaN;
}


exp.editPost = function(req, res, next) {

	var user = {id: req.body.id, name: req.body.name, age: req.body.age};

	if(!valid(user)) {
		req.flash('danger', 'you must have both a name and age for a user')
		res.render('pages/user/edit', { user: user});
		return;
	}

	var adding = !/^\d+$/.test(user.id);
	userRepo.save(user, function(err, user) {
		if(err) {
			req.flash('danger', err.message)
			res.render('pages/user/edit', { user: user});
		}
		else {
			req.flash('you successfully ' + (adding? 'added': 'updated') + ' a user')
			res.render('pages/user/edit', { user: user})
		}
	});
}

exp.add = function(req, res) {
	res.render('pages/user/edit', {user: {}});
}

