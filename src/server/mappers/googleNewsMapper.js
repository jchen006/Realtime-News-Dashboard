const apiTypes = require('../../enums/apiTypes');

const googleNewsMapper = ({
    source: {
        id,
        name
    },
    ...rest
}) => {
    console.log(rest);
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