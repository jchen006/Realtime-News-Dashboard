/**
 * This API call will be explicity used to manage the home page, 
 * it will be designed to be a batch call of everything to facilitate
 * with a much easier load time.
 */

const express = require('express');
const router = express.Router();
const home = require('../controllers/home');

router.get('/batchAll', batchAll);

module.exports = router;
