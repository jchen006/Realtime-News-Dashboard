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
const coronavirus = require('./routes/covid19/coronavirusMonitor');
var cors = require('cors');
// const quotes = require('./routes/quotes');
const { morganMiddleware } = require('./middleware/logging');
var reduxDevTools = require('redux-devtools-cli');


const app = express();
app.use(cors())
const port = 8080;
let _client;

// for logging purposes
app.use(morganMiddleware);
app.use(bodyParser.json())

//All declared routes will go here
// app.use('/batch', batch);
app.use('/google', google);
app.use('/twitter', twitterRoute);
app.use('/healthCheck', healthCheck);
app.use('/weather', weather);
app.use('/hackerNews', hackerNews);
app.use('/productHunt', productHunt);
app.use('/coronavirus', coronavirus);
app.get('/worldMapConfig', (req, res) => {
    res.status(200).send(worldMap);
})
// app.use('/quotes', quotes);

const server = app.listen(port, () => {
    console.log(`Listening on port ${port}!`)
});

// Only specific to Twitter since it needs to pass in a server 
twitter.stream(server, _client)

// Specific to redux dev tooling. Should add yargs to hide it. 
reduxDevTools({ hostname: 'localhost', port: 8000 });

