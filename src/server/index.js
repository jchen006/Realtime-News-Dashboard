const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')
const twitter = require('./controllers/twitter')
const twitterRoute = require('./routes/twitter')
const google = require('./routes/google')
const healthCheck = require('./routes/healthCheck')
const weather = require('./routes/weather')
const { morganMiddleware } = require('./middleware/logging');

const app = express();
const port = 8080;
let _client;

app.use(express.static('src/dist'));
// for logging purposes
app.use(morganMiddleware);
app.use(bodyParser.json())

//All declared routes will go here
app.use('/google', google);
app.use('/twitter', twitterRoute);
app.use('/healthCheck', healthCheck);
app.use('/weather', weather);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

// Only specific to Twitter since it needs to pass in a server 
twitter.stream(server, _client)

