const request = require('request');
const { bestStories, story } = require('../../config/url').hackerNews;

const getBestStories = (callback) => {
    let options = {
        url: bestStories
    };
    request(options, (err, response, body) => {
        if(!err & response.statusCode == 200) {
            callback(body, null);
        } else {
            callback(null, err);
        }
    });
}

const getStoryById = (id, callback) => {
    let options = {
        url: story(id)
    }
    request(options, (err, response, body) => {
        if(!err & response.statusCode == 200) {
            callback(body, null);
        } else {
            callback(null, err);
        }
    });
}

module.exports = {
    getStoryById,
    getBestStories
}