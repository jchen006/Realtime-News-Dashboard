const socket = require("socket.io");
const Twitter = require("twitter");
const config = require("../../config/tokens");
const twitterClient = new Twitter(config.twitter);
const SentimentModel = require("../models/SentimentModel");
const { twitterMapper } = require("../mappers/twitterMapper");

var _stream = {};
let filter = {
  track: "covid-19,coronavirus",
};
let language = "en";
let _model;

var initiateLiveStream = function (io, filter) {
  twitterClient.stream("statuses/filter", filter, function (stream) {
    _stream = stream;
    _stream.on("data", function (event) {
      console.log(event);
      if (event && event.lang == language) {
        let mappedEvent = twitterMapper(event, _model);
        io.emit("tweet", mappedEvent);
      }
    });

    _stream.on("error", function (error) {
      console.log("[ERROR]: ", error); //convert to chalk
      io.emit("error:stream", {
        error,
      });
    });
  });
};

let stream = function (server, client) {
  let io = socket(server);
  io.on("connection", (client) => {
    console.log("[EVENT]: client connected");
    client = client;
    _model = new SentimentModel(client);
    client.on("filter:update", (filters, callback) => {
      _stream.destroy();
      callback({
        ack: true,
        message: `Successfully updated the filters to ${filters}`,
      });
      filter.track = filters;
      initiateLiveStream(io, filter);
    });

    client.on("language:update", (language, callback) => {
      console.log(`Client update the language to ${language}`);
      _stream.destroy();
      callback({
        ack: true,
        message: `Successfully updated the language to ${language}`,
      });
      filter.language = language;
      initiateLiveStream(io, filter);
    });

    client.on("locations:update", (locations) => {
      console.log("Client update the location");
      _stream.destroy();
      filter.locations = locations;
      initiateLiveStream(io, filter);
    });

    client.on("sentiment:valueUpdate", (extras) => {
      _model.update(extras);
    });

    console.log("Client and server are now connected");
    initiateLiveStream(io, filter);
  });
};

getLanguages = function (req, res) {
  twitterClient.get("help/languages", (error, languages, response) => {
    if (error) {
      throw error;
    } else {
      res.status(200).send(languages);
    }
  });
};

getPopularTweet = function (req, res) {
  twitterClient.get(
    "search/tweets.json?q=world%3Anews&lang=en&result_type=popular",
    (error, tweets, response) => {
      if (error) {
        console.log(`[ERROR]: ${error}`);
        throw error;
      } else {
        let mappedTweets = tweets.statuses.map((tweet) => {
          return twitterMapper(tweet, _model);
        });
        res.status(200).send(mappedTweets);
      }
    }
  );
};

module.exports = {
  stream,
  getLanguages,
  getPopularTweet,
};
