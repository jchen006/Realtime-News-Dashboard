const express = require('express');
const router = express.Router();
const { 
    getReverseGeocode
} = require('../controllers/geocode');

router.get('/reverse', getReverseGeocode);

module.exports = router;