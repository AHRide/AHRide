const mongoose = require('mongoose');

const DeliveryUpdateSchema = new mongoose.Schema({
	rider_email: {
		type: String,
		required: true,
	},
	client_email: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
	from: {
		type: String,
		required: true,
	},
	receiver_name: {
		type: String,
		required: true,
	},
	receiver_cont: {
		type: Number,
		required: true,
	},
	note: {
		type: String,
		required: true,
	},
	payment: {
		type: Number,
		required: true,
	},
	duration: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

const DeliveryUpdateModel = mongoose.model(
	'deliveryupdates',
	DeliveryUpdateSchema
);
module.exports = DeliveryUpdateModel;
