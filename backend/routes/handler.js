const express = require('express');
const router = express.Router();

router.get('/about', (req, res) => {
	const str = [
		{
			name: 'Zen Velez',
			msg: 'this is me',
			username: 'zentenshi',
		},
	];
	res.end(JSON.stringify(str));
});

router.post('/test', (req, res) => {
	res.end('NA');
});

module.exports = router;
