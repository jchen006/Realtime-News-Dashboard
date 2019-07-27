const morgan = require('morgan');
const chalk = require('chalk');

const morganMiddleware = morgan((tokens, req, res) => {
    console.log(res.body)
    return [
        chalk.green.bold(tokens.method(req, res)),
        chalk.red.bold(tokens.status(req, res)),
        chalk.white(tokens.url(req, res)),
        // Figure out how to log the response and request body 
        chalk.yellow(tokens['response-time'](req, res) + ' ms'),
    ].join(' ');
})

module.exports = {
    morganMiddleware
};