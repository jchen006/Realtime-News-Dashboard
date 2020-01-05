const express = require('express');
const router = express.Router();
const { quotes } = require('../controllers/quotes');

router.get('/today', quotes);

module.exports = quotes;