
const express = require('express')
const router = express.Router()
const twitter = require('../controllers/twitter')

router.get('/languages', twitter.getLanguages);
router.get('/popularTweets', twitter.getPopularTweet);

module.exports = router