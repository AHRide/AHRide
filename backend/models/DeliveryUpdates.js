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
	sPicking: {
		type: Boolean,
		required: false,
	},
	sPicked: {
		type: Boolean,
		required: false,
	},
	sOTW: {
		type: Boolean,
		required: false,
	},
	timeStart: {
		type: String,
		default: false
	  },
	timeEnd: {
		type: String,
		default: false
	  },
	  clientReported: {
		type: Boolean,
		default: false,
		required: false,
	  }
});

const DeliveryUpdateModel = mongoose.model(
	'deliveryupdates',
	DeliveryUpdateSchema
);
module.exports = DeliveryUpdateModel;
