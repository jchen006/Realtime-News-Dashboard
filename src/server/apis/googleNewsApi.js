const request = require('request');
const tokens = require('../../config/tokens');
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(tokens.google.key);

let queryTopHeadlines = async (qs) => {
    try {
        const response = await newsapi.v2.topHeadlines(qs);
        return response;
    } catch(error) {
        throw new Error(error);
        return;
    }
}

let queryAllSources = async (qs) => {
    try {
        const response = await newsapi.v2.sources(qs);
        return response;
    } catch (error) {
        throw new Error(error);
        return;
    }
}

let queryEverythingBySubject = async (qs) => {
    try {
        const response = await newsapi.v2.everything(qs);
        return response;
    } catch (error) {
        throw new Error(error);
        return;
    }
}

module.exports = {
    queryTopHeadlines,
    queryAllSources,
    queryEverythingBySubject
}