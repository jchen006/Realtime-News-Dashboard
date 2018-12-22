const express = require('express');
const config = require('./config')
const http = require('http');
const healthCheck = require('./controllers/healthCheck')
const google = require('./controllers/google')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const twitter = require('./controllers/twitter')
const google = require('./routes/google')
const healthCheck = require('/routes/healthCheck')

const app = express();
const port = 8080;

app.use(express.static('../../public'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.json())

//All declared routes will go here
app.use('/google', google)
app.use('/healthCheck', healthCheck)

app.get('/healthCheck', healthCheck.healthCheck)

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

// Only specific to Twitter since it needs to pass in a server 
twitter.stream(server)

