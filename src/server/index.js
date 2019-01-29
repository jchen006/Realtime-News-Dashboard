const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const twitter = require('./controllers/twitter')
const twitterRoute = require('./routes/twitter')
const google = require('./routes/google')
const healthCheck = require('./routes/healthCheck')

const app = express();
const port = 8080;

app.use(express.static('src/dist'));
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(bodyParser.json())

//All declared routes will go here
app.use('/google', google)
app.use('/twitter', twitterRoute)
app.use('/healthCheck', healthCheck)

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

// Only specific to Twitter since it needs to pass in a server 
// twitter.stream(server)

