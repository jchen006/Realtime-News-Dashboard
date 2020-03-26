const express = require('express');
const router = express.Router();
const { getDailySummary } = require('../../controllers/coronavirus');

router.get('/daily', getDailySummary);

module.exports = router;