const express = require('express');
const router = express.Router();
const { quotesOfDay } = require('../controllers/quotes');

router.get('/', quotesOfDay);

module.exports = router;