
var users = [
	{
		id: 0,
		name: 'dank',
		age: 50
	},
	{
		id: 1,
		name: 'carl',
		age: 60
	},
]

var exp = module.exports = {};


exp.getAll = function() {
	return users;
}

exp.getOne = function(id) {
	return users[id];
}

exp.save = function(user, cb) {
	if(/^\d+$/.test(user.id))
		users[parseInt(user.id)] = user;
	else {
		users.push(user);
		user.id = user.length - 1;
	}
	cb(null, user)
}

