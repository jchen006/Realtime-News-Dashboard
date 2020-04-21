// {
//     "statename": {},
//     "distance": "0.000",
//     "elevation": "20",
//     "state": "UK",
//     "latt": "51.50354",
//     "city": "LONDON",
//     "prov": "UK",
//     "geocode": "LONDON-MCRXA",
//     "geonumber": "3154700960970",
//     "country": "United Kingdom",
//     "stnumber": "10",
//     "staddress": "DOWNING STREET",
//     "inlatt": "51.50354",
//     "alt": {
//     "loc": {
//     "staddress": "DOWNING STREET",
//     "stnumber": "10",
//     "postal": "SW1A2AA",
//     "latt": "51.50354",
//     "city": "LONDON",
//     "prov": "UK",
//     "longt": "-0.12768",
//     "class": {}
//     }
//     },
//     "timezone": "Europe/London",
//     "region": "Greater London, England",
//     "postal": "SW1A2AA",
//     "longt": "-0.12768",
//     "remaining_credits": {},
//     "confidence": "1",
//     "inlongt": "-0.12768",
//     "class": {},
//     "altgeocode": "SYNERGY-MCRXA"
//     }

const geocodeMapper = ({
    components,
    confidence,
    formatted
}) => {
    return ({
        ...components,
        confidence,
        formatted
    })
}

module.exports = {
    geocodeMapper
}