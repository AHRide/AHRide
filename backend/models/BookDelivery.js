const mongoose = require('mongoose');

const BookDeliverySchema = new mongoose.Schema({
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
});

const BookDeliveryModel = mongoose.model('bookdelivery', BookDeliverySchema);
module.exports = BookDeliveryModel;
