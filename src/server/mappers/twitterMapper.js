const apiTypes = require('../../enums/apiTypes');

const twitterMapper = (event, model) => {
    let analyzedText;
    if(event.text && model) {
        analyzedText = model.analyze(event.text);
    }
    console.log(JSON.stringify(event, null, 2));
    return ({
        apiSource: apiTypes.TWITTER,
        geo: event.geo ? event.geo : null,
        coordinates: event.coordinates ? event.coordinates : null,
        created_at: event.created_at ? event.created_at : null,
        favorite_count: event.favorite_count ? event.favorite_count : null,
        id: event.id ? event.id : null,
        lang: event.lang ? event.lang : null,
        source: event.source ? event.source : null,
        text: event.text ? event.text : null,
        analyzedText: analyzedText ? analyzedText : null,
        name: event.user && event.user.name ? event.user.name : null,
        description: event.user && event.user.description ? event.user.description : null,
        profile_background_image_url: event.user && event.user.profile_background_image_url ? event.user.profile_background_image_url : null,
        screen_name: event.screen_name && event.user.screen_name ? event.user.screen_name : null
    })
}

module.exports = {
    twitterMapper
}