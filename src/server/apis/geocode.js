const tokens = require('../../config/tokens');
const GeocodeAPI = require('../client/geocode');
const geocodeapi = new GeocodeAPI(tokens.openCage.key);

const reverseGeocode = async (longitutde, latitude) => {
    try {
        const response = await geocodeapi.reverseGeocode(longitutde, latitude);
        return response;
    } catch(error) {
        throw new Error(error);
        return;
    }
}

module.exports = {
    reverseGeocode
}