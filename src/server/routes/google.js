const express = require('express')
const router = express.Router()
const {
    getTopHeadlines,
    getAllSources,
    getHeadlinesBySubject
} = require('../controllers/google')

router.get('/topHeadlines', getTopHeadlines)
router.get('/sources', getAllSources)
router.get('/everything', getHeadlinesBySubject)

module.exports = router