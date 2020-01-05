const { getBestStories, getStoryById } = require('../apis/hackerNewsApi');

/**
 * Gets all the story details by id
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * Gets all the top stories
 * @param {*} req 
 * @param {*} res 
 */
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

/**
 * Gets all the top stories with the details related do it
 * @param {*} req 
 * @param {*} res 
 */
const getTopStoriesWithDetails = (req, res) => {

}

module.exports = {
    story,
    topStories
}