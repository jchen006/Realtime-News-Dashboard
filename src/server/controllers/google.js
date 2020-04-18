const { queryTopHeadlines, queryAllSources, queryEverythingBySubject } = require('../apis/googleNewsApi');
const { googleNewsMapper } = require('../mappers/googleNewsMapper');

const getTopHeadlines = async (req, res) => {
    let qs = req.query;
    const response = await queryTopHeadlines(qs);
    const { message, status, articles } = response;
    if(status === 'ok') {
        const mappedArticles = articles.map(article => googleNewsMapper(article));
        res.status(200).send(mappedArticles);
    } else {
        res.status(500).send(message);
    }
}

/**
 * Gets specifically by all the sources that exists. Used only for filtering and search.
 * @param {*} req 
 * @param {*} res 
 */
const getAllSources = async (req, res) => { 
    let qs = req.query;
    const response = await queryAllSources(qs);
    const { message, status, sources } = response;
    if(status === 'ok') {
        res.status(200).send(sources);
    } else {
        res.status(500).send(message);
    }
}


const getHeadlinesBySubject = async (req, res) => {
    let qs = req.query;
    const response = await queryEverythingBySubject(qs);
    const { message, status, articles } = response;
    if(status === 'ok') {
        const mappedArticles = articles.map(article => googleNewsMapper(article));
        res.status(200).send(mappedArticles);
    } else {
        res.status(500).send(message);
    }
}


module.exports = {
    getTopHeadlines,
    getAllSources,
    getHeadlinesBySubject
};