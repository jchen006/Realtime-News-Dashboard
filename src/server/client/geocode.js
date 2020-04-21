const fetch = require('node-fetch');

class GeocodeAPI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    reverseGeocode(latitude, longitude) {
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${this.apiKey}`;
        return fetch(url).then(response => response.json());
    }
}

module.exports = GeocodeAPI;