const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	gender:{
		type: String,
		required: true,
	},
	birthdate:{
		type: String,
		required: true,
	},
	user_type:{
		type: String,
		required: true,
	},
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
