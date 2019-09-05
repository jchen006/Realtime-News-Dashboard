const keyword_extractor = require('keyword_extractor')

let extract = (sentence) => {
    let extraction_result = keyword_extractor.extract(sentence, {
        language: 'english',
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false
    })
    return extraction_result;
}

module.exports = {
    extract
}
