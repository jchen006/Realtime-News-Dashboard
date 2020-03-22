const { queryDailySummary } = require("../apis/coronavirusMonitorApi");

const getDailySummary = (req, res) => {
    queryDailySummary(qs, (response, error) => {
        if(error) {
            res.status(500).send(error);
        }
        res.status(200).send(response);
    })
}

module.exports = {
    getDailySummary
}