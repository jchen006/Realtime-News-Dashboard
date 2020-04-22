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