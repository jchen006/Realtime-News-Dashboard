const {getTodaysQuote} = require('../apis/quotesApi');

let quoteOfDay = (req, res, next) => {
    getTodaysQuote((err, data) => {
        if(err){
            res.status(500).send(err);
        }
        res.status(200).send(data);
    })
}

module.exports = {
    quotesOfDay
}