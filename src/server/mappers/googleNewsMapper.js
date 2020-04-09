const apiTypes = require('../../enums/apiTypes');

const googleNewsMapper = ({
    source: {
        id,
        name
    },
    ...rest
}) => {
    return ({
        apiType: 'google',
        sourceId: id,
        sourceName: name,
        ...rest
    })
}

module.exports = {
    googleNewsMapper
}