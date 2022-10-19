const express = require('express');
const app = express();
const mongoose = require('mongoose');
const UserModel = require('./models/Users');
const UserModelRider = require('./models/UserRider');
const UserModelAdmin = require('./models/UserAdmin');
const DeliveryUpdateModel = require('./models/DeliveryUpdates');
const DeliveryOfferModel = require('./models/DeliveryOffers');
const BookDeliveryModel = require('./models/BookDelivery');
const DeliveryHistoryModel = require('./models/DeliveryHistory');
const ClientReportsModel = require('./models/ClientReports');
const cors = require('cors');
require('dotenv').config();

const time = new Date().toLocaleTimeString([], {
	hour: '2-digit',
	minute: '2-digit',
});

app.use(express.json());
app.use(cors());

mongoose.connect(
	'mongodb+srv://ahridesoftdev:aHRidesoftdev3@cluster0.tcmdf9c.mongodb.net/AHRide?retryWrites=true&w=majority',
	{ useNewURLParser: true }
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

app.get('/getUserRider', (req, res) => {
	UserModelRider.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

app.get('/getUserAdmin', (req, res) => {
	UserModelAdmin.find({}, (err, result) => {
		if (err) {
			res.json(err);
		} else {
			res.json(result);
		}
	});
});

app.get('/getUser/:email', function (req, res) {
	return UserModel.find({ email: req.params.email })
		.then(function (users) {
			res.send(users);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.get('/getUserRider/:email', function (req, res) {
	return UserModelRider.find({ email: req.params.email })
		.then(function (users) {
			res.send(users);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.get('/getUserAdmin/:email', function (req, res) {
	return UserModelAdmin.find({ email: req.params.email })
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

app.get('/getClientReports', (req, res) => {
	ClientReportsModel.find({}, (error, result) => {
		if (error) {
			res.json(error);
		} else {
			res.json(result);
		}
	});
});

app.get('/getClientReports/:_id', function (req, res) {
	return ClientReportsModel.find({ _id: req.params._id })
		.then(function (clientReports) {
			// return orders when resolved
			res.send(clientReports);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
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

app.get('/getDeliveryUpdates/user/:client_email', function (req, res) {
	return DeliveryUpdateModel.find({ client_email: req.params.client_email })
		.then(function (deliveryUpdates) {
			// return orders when resolved
			res.send(deliveryUpdates);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.get('/getDeliveryUpdates/rider/:rider_email', function (req, res) {
	return DeliveryUpdateModel.find({ rider_email: req.params.rider_email })
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

app.get('/getBookDelivery/user/:client_email', function (req, res) {
	return BookDeliveryModel.find({ client_email: req.params.client_email })
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

app.get('/getDeliveryHistory', async (req, res) => {
	try {
		const licenses = await DeliveryHistoryModel.find({}).sort({ rating: -1 });
		res.send(licenses);
	} catch (e) {
		console.log('error:-', e);
	}
});

app.get('/getDeliveryHistory/rider/:rider_email', function (req, res) {
	return DeliveryHistoryModel.find({ rider_email: req.params.rider_email })
		.then(function (deli) {
			res.send(deli);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.get('/getDeliveryHistory/:_id', function (req, res) {
	return DeliveryHistoryModel.find({ _id: req.params._id })
		.then(function (deli) {
			res.send(deli);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.get('/getDeliveryHistory/client/:client_email', function (req, res) {
	return DeliveryHistoryModel.find({ client_email: req.params.client_email })
		.then(function (deli) {
			res.send(deli);
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

app.post('/createUserRider', async (req, res) => {
	const user = req.body;
	const newUser = new UserModelRider(user);
	await newUser.save();

	res.json(user);
});

app.post('/bookDelivery', async (req, res) => {
	const bookdeli = req.body;
	const newBookDeli = new BookDeliveryModel(bookdeli);
	await newBookDeli.save();

	res.json(bookdeli);
});

app.post('/deliveryHistory', async (req, res) => {
	const historydeli = req.body;
	const newHistoryDeli = new DeliveryHistoryModel(historydeli);
	await newHistoryDeli.save();

	res.json(historydeli);
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

app.post('/createClientReport', async (req, res) => {
	const report = req.body;
	const newReport = new ClientReportsModel(report);
	await newReport.save();

	res.json(report);
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

app.delete('/getClientReport/delete/:_id', function (req, res) {
	return ClientReportsModel.findByIdAndDelete({ _id: req.params._id })
		.then(function (deleteReport) {
			// return orders when resolved
			res.send(deleteReport);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.delete('/getDeliveryUpdates/:_id', function (req, res) {
	return DeliveryUpdateModel.findByIdAndDelete({ _id: req.params._id })
		.then(function (updateDelivery) {
			// return orders when resolved
			res.send(updateDelivery);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.delete('/getHistory/:_id', function (req, res) {
	return DeliveryUpdateModel.findByIdAndDelete({ _id: req.params._id })
		.then(function (updateDelivery) {
			// return orders when resolved
			res.send(updateDelivery);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.delete('/getHistoryDelete/:_id', function (req, res) {
	return DeliveryHistoryModel.findByIdAndDelete({ _id: req.params._id })
		.then(function (deletehist) {
			// return orders when resolved
			res.send(deletehist);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.delete('/getRiderUser/delete/:email', function (req, res) {
	return UserModelRider.findOneAndDelete({ email: req.params.email })
		.then(function (deleteRider) {
			// return orders when resolved
			res.send(deleteRider);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.delete('/getClientUser/delete/:email', function (req, res) {
	return UserModel.findOneAndDelete({ email: req.params.email })
		.then(function (deleteClient) {
			// return orders when resolved
			res.send(deleteClient);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});
});

app.put('/getDeliveryUpdates/PickingUI/:_id', (req, res) => {
	DeliveryUpdateModel.findByIdAndUpdate(
		{ _id: req.params._id },
		{
			sPicking: true,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.put('/getDeliveryUpdates/PickedUI/:_id', (req, res) => {
	DeliveryUpdateModel.findByIdAndUpdate(
		{ _id: req.params._id },
		{
			sPicked: true,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.put('/getDeliveryUpdates/OTW/:_id', (req, res) => {
	DeliveryUpdateModel.findByIdAndUpdate(
		{ _id: req.params._id },
		{
			sOTW: true,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.put('/getDeliveryUpdates/start/:_id', (req, res) => {
	DeliveryUpdateModel.findByIdAndUpdate(
		{ _id: req.params._id },
		{
			timeStart: time,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});
app.put('/getDeliveryUpdates/end/:_id', (req, res) => {
	DeliveryUpdateModel.findByIdAndUpdate(
		{ _id: req.params._id },
		{
			timeEnd: time,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.put('/getDeliveryUpdates/reported/:_id', (req, res) => {
	DeliveryUpdateModel.findByIdAndUpdate(
		{ _id: req.params._id },
		{
			clientReported: true,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.put('/deliveryHistory/:_id', (req, res) => {
	DeliveryHistoryModel.findByIdAndUpdate(
		{ _id: req.params._id },
		{
			rating: req.body.rating,
			comment: req.body.comment,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.put('/UpdateInfo/rider/:email', (req, res) => {
	UserModelRider.findOneAndUpdate(
		{ email: req.params.email },
		{
			name: req.body.name,
			contact: req.body.contact,
		}
	)
		.then(function (updateDelivery) {
			res.send(updateDelivery);
		})
		.catch(function (error) {
			console.log(error);
		});
});

app.listen(process.env.PORT || 3001, () => {
	console.log('Server is Running ...');
});
