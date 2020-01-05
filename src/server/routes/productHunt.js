const express = require('express');
const router = express.Router();
const { productHunt } = require('../controllers/producthunt')

router.get('/today', productHunt);

module.exports = router;