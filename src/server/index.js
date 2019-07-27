const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const twitter = require('./controllers/twitter')
const twitterRoute = require('./routes/twitter')
const google = require('./routes/google')
const healthCheck = require('./routes/healthCheck')
const { morganMiddleware } = require('./middleware/morganMiddleware')

const app = express();
const port = 8080;
let _client;

app.use(express.static('src/dist'));
// for logging purposes
app.use(morganMiddleware);
app.use(bodyParser.json())

//All declared routes will go here
app.use('/google', google)
app.use('/twitter', twitterRoute)
app.use('/healthCheck', healthCheck)

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

// Only specific to Twitter since it needs to pass in a server 
twitter.stream(server, _client)

