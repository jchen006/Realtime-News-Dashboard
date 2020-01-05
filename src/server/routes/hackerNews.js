const express = require('express');
const router = express.Router();
const {
    story,
    topStories
} = require('../controllers/hackerNews');

router.get('/story/:id', story);
router.get('/topStory', topStories);

module.exports = router;