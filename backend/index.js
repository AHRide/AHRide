const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const DeliveryUpdateModel = require('./models/DeliveryUpdates');
const DeliveryOfferModel = require('./models/DeliveryOffers');
const BookDeliveryModel = require('./models/BookDelivery');

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

app.get('/getUsers/:email', function (req, res) {
	return UserModel.find({ email: req.params.email })
		.then(function (users) {
			res.send(users);
		})
		.catch(function (error) {
			console.log(error);
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

app.get('/getDeliveryUpdates/:_id', function (req, res) {
	return DeliveryUpdateModel.find({ _id: req.params._id })
		.then(function (deliveryUpdates) {
			// return orders when resolved
			res.send(deliveryUpdates);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.get('/getBookDelivery', (req, res) => {
	BookDeliveryModel.find({}, (error, result) => {
		if (error) {
			res.json(error);
		} else {
			res.json(result);
		}
	});
});

app.get('/getBookDelivery/:_id', function (req, res) {
	return BookDeliveryModel.find({ _id: req.params._id })
		.then(function (bookDelivery) {
			// return orders when resolved
			res.send(bookDelivery);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.get('/getBookDelivery/user/:email', function (req, res) {
	return BookDeliveryModel.find({ email: req.params.email })
		.then(function (bookDelivery) {
			// return orders when resolved
			res.send(bookDelivery);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
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

app.get('/getDeliveryOffers/:_id', function (req, res) {
	return DeliveryOfferModel.find({ _id: req.params._id })
		.then(function (deliveryOffers) {
			res.send(deliveryOffers);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.post('/createUser', async (req, res) => {
	const user = req.body;
	const newUser = new UserModel(user);
	await newUser.save();

	res.json(user);
});

app.post('/bookDelivery', async (req, res) => {
	const bookdeli = req.body;
	const newBookDeli = new BookDeliveryModel(bookdeli);
	await newBookDeli.save();

	res.json(bookdeli);
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

app.delete('/getBookDelivery/:_id', function (req, res) {
	return BookDeliveryModel.findByIdAndDelete({ _id: req.params._id })
		.then(function (bookDelivery) {
			// return orders when resolved
			res.send(bookDelivery);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.listen(3001, () => {
	console.log('Server is Running ...');
});
