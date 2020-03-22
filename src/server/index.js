const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')
const twitter = require('./controllers/twitter')
const twitterRoute = require('./routes/twitter')
const google = require('./routes/google')
const healthCheck = require('./routes/healthCheck')
const weather = require('./routes/weather')
const productHunt = require('./routes/productHunt');
const hackerNews = require('./routes/hackerNews');
const path = require('path');
// const quotes = require('./routes/quotes');
const { morganMiddleware } = require('./middleware/logging');

const app = express();
const port = 8080;
let _client;

// for logging purposes
app.use(morganMiddleware);
app.use(bodyParser.json())

//All declared routes will go here
// app.use('/batch', batch);
app.use('/api/google', google);
app.use('/api/twitter', twitterRoute);
app.use('/api/healthCheck', healthCheck);
app.use('/api/weather', weather);
app.use('/api/hackerNews', hackerNews);
app.use('/api/productHunt', productHunt);
// app.use('/quotes', quotes);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

// Only specific to Twitter since it needs to pass in a server 
twitter.stream(server, _client)

