const express = require('express');
const router = express.Router();
const weather = require('../controllers/weather')

router.post('/forecast', weather.forecast);

module.exports = router;
