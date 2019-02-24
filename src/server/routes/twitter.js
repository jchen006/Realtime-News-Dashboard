
const express = require('express')
const router = express.Router()
const twitter = require('../controllers/twitter')

router.get('/languages', twitter.getLanguages)

module.exports = router