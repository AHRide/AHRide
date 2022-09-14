const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const DeliveryUpdateModel = require('./models/DeliveryUpdates');
const DeliveryOfferModel = require('./models/DeliveryOffers')

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
	'mongodb+srv://ahridesoftdev:aHRidesoftdev3@cluster0.tcmdf9c.mongodb.net/AHRide?retryWrites=true&w=majority'
);

app.get('/getUsers', (req, res) => {
	UserModel.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

app.get('/getDeliveryUpdates', (req, res) => {
	DeliveryUpdateModel.find({}, (error, result) => {
		if (error) {
			res.json(error);
		} else {
			res.json(result);
		}
	});
});

app.get('/getDeliveryOffers', (req, res) => {
	DeliveryOfferModel.find({}, (error, result) => {
		if (error) {
			res.json(error);
		} else {
			res.json(result);
		}
	});
});

app.post('/createUser', async (req, res) => {
	const user = req.body;
	const newUser = new UserModel(user);
	await newUser.save();

	res.json(user);
});

app.post('/createDeliveryUpdates', async (req, res) => {
	const deliupdates = req.body;
	const newDeliUpdates = new DeliveryUpdateModel(deliupdates);
	await newDeliUpdates.save();

	res.json(deliupdates);
});

app.post('/createDeliveryOffers', async (req, res) => {
	const delioffers = req.body;
	const newDeliOffers = new DeliveryOfferModel(delioffers);
	await newDeliOffers.save();

	res.json(delioffers);
});

app.listen(3001, () => {
	console.log('Server is Running ...');
});
