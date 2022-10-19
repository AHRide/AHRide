const mongoose = require('mongoose');

const ClientReportsSchema = new mongoose.Schema({
	deliveryID: {
		type: String,
		required: true,
	},
    client_email: {
		type: String,
		required: true,
	},
    rider_email: {
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
    comment: {
		type: String,
		required: false,
	},
	reporttime: {
		type: String,
		required: true,
	},
});

const ClientReportsModel = mongoose.model('clientreports', ClientReportsSchema);
module.exports = ClientReportsModel;