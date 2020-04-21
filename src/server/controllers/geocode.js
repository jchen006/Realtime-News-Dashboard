const { reverseGeocode } = require('../apis/geocode');
const { geocodeMapper } = require('../mappers/geocodeMapper');

const getReverseGeocode = async(req, res) => {
    let params = req.params;
    const { latitude, longitutude } = params;
    const { status, results } = await reverseGeocode(longitutude, latitude);
    console.log(JSON.stringify(results));
    if(status.message === 'OK') {
        const mappedResults = results.map(result => geocodeMapper(result))
        res.status(200).send(mappedResults);
    } else {
        res.status(500).send('')
    }
}



module.exports = {
    getReverseGeocode
}