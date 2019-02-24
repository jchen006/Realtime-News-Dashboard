
let healthCheck = (req, res) => {
    res.status(200).send("health check ok")
}

module.exports = healthCheck