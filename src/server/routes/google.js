const express = require('express')
const router = express.Router()
const google = require('../controllers/google')

router.get('/topHeadlines', google.queryTopHeadlines)
router.get('/sources', google.getAllSources)
router.get('/everything', google.queryEverything)

module.exports = router