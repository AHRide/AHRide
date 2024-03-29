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
	contact:{
		type: String,
		required: true,
	},
});

const UserModel = mongoose.model('userClient', UserSchema);
module.exports = UserModel;
