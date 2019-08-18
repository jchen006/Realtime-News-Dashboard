const { queryTopHeadlines, queryAllSources, queryEverythingBySubject } = require('../apis/googleNewsApi');

let getTopHeadlines = (req, res) => {
    const callback = (response, err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(response);
        }
    }
    let qs = req.query;
    queryTopHeadlines(qs, callback);
}

/**
 * Gets specifically by all the sources that exists. Used only for filtering and search.
 * @param {*} req 
 * @param {*} res 
 */
let getAllSources = (req, res) => {
    const callback = (response, err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(response);
        }
    }
    let qs = req.query
    queryAllSources(qs, callback);
}

let getHeadlinesBySubject = (req, res) => {
    const callback = (response, err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(response);
        }
    }
    let qs = req.query;
    queryEverythingBySubject(qs, callback);
}


module.exports = {
    getTopHeadlines,
    getAllSources,
    getHeadlinesBySubject
};