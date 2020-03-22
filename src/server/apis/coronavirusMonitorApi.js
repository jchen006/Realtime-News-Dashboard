const fetch = require('node-fetch');
const { coronavirusMonitor } = require('../../utils/urlGenerator');


const queryAllCountries = async (callback) => {
    const { countries } = coronavirusMonitor;
    try {
        const response = await fetch(countries);
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error);
        } else {
            callback(json, null);
        }ß
    } catch(error) {
        callback(null, error);
        throw new Error(error);
    }
}

const queryDailySummary = async (callback) => {
    const { dailySummary } = coronavirusMonitor;
    try {
        const response = await fetch(dailySummary);
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error);
        } else {
            callback(json, null);
        }
    } catch (error) {
        callback(null, error);
        throw new Error(error);
    }
}

const queryByCountry = async (country, callback) => {
    const { country:countryUrl } = coronavirusMonitor;
    try {
        const response = await fetch(countryUrl(country));
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error);
        } else {
            callback(json, null);
        }
    } catch (error) {
        callback(null, error);
        throw new Error(error);
    }
}

const queryByDate = async (startDate, callback)  => {
    // https://covid19.mathdro.id/api/daily/[dateString]
    const { date } = coronavirusMonitor;
    try {
        const response = await fetch(date());
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error);
        } else {
            callback(json, null);
        }
    } catch (error) {
        callback(null, error);
        throw new Error(error);
    }

}

// look back by 15 days 
// figure out a way to cache it too 
const getByDateRange = async (startDate, endDate, callback) => {
    return;
}

const queryConfirmed = async (callback) => {
    const { confirmed } = coronavirusMonitor;
    try {
        const response = await fetch(confirmed);
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error);
        } else {
            callback(json, null)
        }
    } catch (error) {
        callback(null, error);
        throw new Error(error);
    }
}

const queryDeaths = async (callback) => {
    const { deaths } = coronavirusMonitor;
    try {
        const response = await fetch(deaths);
        const json = await response.json();
        if(json && json.error) {
            throw Error(json.error);
        } else {
            callback(json, null);
        }
    } catch(error) {
        callback(null, error);
        throw new Error(error);
    }
}

module.exports = {
    queryAllCountries
}
