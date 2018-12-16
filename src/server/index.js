const express = require('express');
const config = require('./config')
const http = require('http');
const healthCheck = require('./controllers/healthCheck')
const google = require('./controllers/google')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const twitter = require('./controllers/twitter')

const app = express();

app.use(express.static('../../public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.json())

const port = 8080;

app.get('/healthCheck', healthCheck.healthCheck)
app.get('/google/sources', google.getAllSources)
app.get('/google/top', google.queryTopHeadlines)
app.get('/google/everything', google.queryEverything)

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

twitter.stream(server)



// initiateLiveStream(filter)

