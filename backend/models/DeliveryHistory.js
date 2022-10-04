const mongoose = require('mongoose');

const DeliveryHistorySchema = new mongoose.Schema({
    delivery_id: {
		type: String,
		required: true,
	},
    status: {
		type: String,
		required: true,
	},
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
		required: false,
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
	  }
});

const DeliveryHistoryModel = mongoose.model(
	'deliveryhistory',
	DeliveryHistorySchema
);
module.exports = DeliveryHistoryModel;
