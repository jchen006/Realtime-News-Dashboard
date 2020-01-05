const Joi = require('@hapi/joi');
const constants = require('./constants');

const topHeadlinesSchema = Joi.object({
    country: Joi
        .string()
        .valid(constants.countries)
        .error(() => {
            return {
                message: 'Country is not a valid one.'
            }
        }),
    category: Joi
        .string()
        .valid(constants.categories)
        .error(() => {
            return {
                message: 'Category is not a valid one.'
            }
        }),
    q: Joi
        .string()
        .error(() => {
            return {
                message: 'Query is not a string.'
            }
        }), 
    pageSize: Joi.number()
        .integer()
        .min(20)
        .max(100)
        .error(() => {
            return {
                message: 'Page size needs to be between 20 to 100.'
            }
        }),
    page: Joi
        .number()
        .integer()
        .error(() => {
            return {
                message: 'Page needs to be an interger.'
            }
        }),
    // sources 
});

const everythingSchema = Joi.object({
    q: Joi
        .string(),
    qInTitle: Joi
        .string(),
    // sources
    // domains
    // excludeDomains:
    from: Joi
        .string()
        .isoDate(),
    to: Joi
        .string()
        .isoDate(),
    language: Joi
        .string()
        .valid(constants.languages),
    sortBy: Joi
        .string()
        .valid(['relevancy', 'popularity', 'publishedAt', '']),
    pageSize: Joi.number()
        .integer()
        .min(20)
        .max(100),
    page: Joi
        .number()
        .integer()
});

const sourceSchema = Joi.object({
    category: Joi
        .string()
        .valid(constants.categories),
    languages: Joi
        .string()
        .valid(constants.languages),
    country: Joi
        .string()
        .valid(constants.countries)
});



module.exports = {
    topHeadlinesSchema,
    everythingSchema,
    sourceSchema
}