const moment = require('moment');

/**
 * Returns back as a Date object
 * @param {} time twitter created_at property
 */
const stringToDateObjectConversion = (time) => {
    return new Date(time);
}


/**
 * Returns back the time from based on 'now'
 * @param {*} time needs to be in array format 
 * [dddd, MMMM Do YYYY, h:mm:ss a]
 */
const getTimeFrom = (time) => {
    return moment(time).fromNow();
}

module.exports = {
    stringToDateObjectConversion,
    getTimeFrom
}