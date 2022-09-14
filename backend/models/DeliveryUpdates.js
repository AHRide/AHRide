const mongoose = require('mongoose');

const DeliveryUpdateSchema = new mongoose.Schema({
	client_id: {
		type: String,
		required: true,
	},
    rider_id: {
		type: String,
		required: true,
	},
	rider_name: {
		type: String,
		required: true,
	},
    rider_cont: {
		type: String,
		required: true,
	},
    rider_vehi: {
		type: String,
		required: true,
	},
    client_name: {
		type: String,
		required: true,
	},
    client_cont: {
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
		type: String,
		required: true,
	},
    note: {
		type: String,
		required: false,
	},
	time: {
		type: String,
		required: true,
	},
	payment: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
});

const DeliveryUpdateModel = mongoose.model('deliveryupdates', DeliveryUpdateSchema);
module.exports = DeliveryUpdateModel;
