const { getBestStories, getStoryById } = require('../apis/hackerNewsApi');

const story = (req, res) => {
    const callback = (responseBody, err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(responseBody)
        }
    }
    const { id } = req.params;
    getStoryById(id, callback);
}

const topStories = (req, res) => {
    const callback = (responseBody, err) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(responseBody)
        }
    }
    getBestStories(callback);
}

module.exports = {
    story,
    topStories
}