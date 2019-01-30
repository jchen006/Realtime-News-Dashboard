import React from 'react'
import { 
    updateQuery,
    updateCountry,
    updateLanguage,
    updateCategory,
    updateSources,
    updatePollingInterval
} from '../../../actions/googleAction'
import { Typography } from '@material-ui/core'
import { categories, languages, countries } from '../../../constants/google'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import iso from 'iso-3166-1'
import ISO6391 from 'iso-639-1'
import MultiSelectField from '../../MultiSelectField/MultiSelectField.jsx'
import SingleSelectField from '../../SingleSelectField/SingleSelectField.jsx'
import MultiEntryField from '../../MultiEntryField/MultiEntryField.jsx'
import SingleEntryField from '../../SingleEntryField/SingleEntryField.jsx'


const mapStateToProps = state => {
    const google = state.googleReducer
    return {
        query: google.query ? google.query : '',
        country: google.country ? google.country : '',
        language: google.language ? google.language : '',
        category: google.category ? google.category : '',
        sources: google.sources ? google.sources : [],
        polling_interval: google.polling_interval ? google.polling_interval : 60000
    }
}

const mapDispatchToProp = dispatch => ({
    updateQuery: (queries) => dispatch(updateQuery(queries)),
    updateCountry: (countries) => dispatch(updateCountry(countries)),
    updateLanguage: (languages) => dispatch(updateLanguage(languages)),
    updateCategory: (categories) => dispatch(updateCategory(categories)),
    updateSources: (sources) => dispatch(updateSources(sources)),
    updatePollingInterval: (pollingInterval) => dispatch(updatePollingInterval(pollingInterval))
})

/**
 * These settings will be solely focused on leveraging that of the News API top headlines. 
 * There are 7 request parameters 
 * country - can only take in 1 
 * category - can only take in 1 
 * sources - can take in multiple 
 * language - can only take in 1
 * q - can only take in on phrase (needs to be URL encoded)
 * pageSize - 20 default to 100 
 * page - page size if greater than // implement lazy load?
 */
class GoogleNewsFormSettings extends React.Component {
    constructor(props) {
        super(props)
        this.onQueryChange = this.onQueryChange.bind(this)
        this.onSourcesChange = this.onSourcesChange.bind(this)
        this.onCategoryChange = this.onCategoryChange.bind(this)
        this.onCountryChange = this.onCountryChange.bind(this)
        this.onLanguageChange = this.onLanguageChange.bind(this)
        this.onPollingIntervalChange = this.onPollingIntervalChange.bind(this)
        this.state = {
            sources: []
        }
    }

    componentDidMount() {
        fetch('/google/sources')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    sources: data.sources
                })
            })
    }
    
    onPollingIntervalChange(value) {
        this.props.updatePollingInterval(value)
    }

    onQueryChange(value) {
        this.props.updateQuery(value)
    }

    onSourcesChange(value) {
        this.props.updateSources(value)
    }

    onCategoryChange(value) {
        this.props.updateCategory(value)
    }

    onCountryChange(value) {
        this.props.updateCountry(value)
    }

    onLanguageChange(value) {
        this.props.updateLanguage(value)
    }

    renderPollingIntervalField() {
        return (
            <SingleEntryField
                id={'google-polling-interval-field'}
                label={'Polling Interval'}
                value={this.props.polling_interval}
                onChange={this.onPollingIntervalChange}
            />
        )
    }

    renderCountryField() {
        const { country } = this.props
        const countriesObj = countries.map((c) => {
            let label = iso.whereAlpha2(c)
            return {
                label: label ? label.country : c,
                value: c
            }
        })
        return (
            <SingleSelectField
                options={countriesObj}
                placeholder={'Select country'}
                onChange={this.onCountryChange}
                value={country}
                label={'Country'}
            />
        )
    }

    renderLangugeField() {
        const { language } = this.props
        const languagesObj = languages.map((lang) => {
            let name = ISO6391.getName(lang)
            return {
                label: name ? name : lang,
                value: lang
            }
        })
        return (
            <SingleSelectField
                options={languagesObj}
                placeholder={'Select language'}
                onChange={this.onLanguageChange}
                value={language}
                label={'Language'}
            />
        )
    }

    renderQueriesField() {
        return (
            <MultiEntryField
                onChange={this.onQueriesChange}
                placeholder={'Enter queries'}
                values={this.props.queries}
                label={'Queries'}
            />
        )
    }

    renderCategoryField() {
        const { category } = this.props
        let modifiedCategories = categories ? categories.map((c) => {
            return {
                label: c,
                value: c
            }
        }) : []
        return (
            <SingleSelectField
                options={modifiedCategories}
                placeholder={'Select category'}
                onChange={this.onCategoryChange}
                value={category}
                label={'Category'}
            />
        )
    }

    renderSourcesField() {
        let modifiedSources = this.state.sources.length > 0 ? this.state.sources.map((s) => {
            return {
                label: s.name,
                value: s.id,
                description: s.description,
                url: s.url
            }
        }) : []
        return (
            <MultiSelectField
                options={modifiedSources}
                placeholder={'Select sources'}
                onChange={this.onSourcesChange}
                defaultValue={this.props.sources}
                label={'Sources'}
            />
        )
    }

    renderExistingQuery() {
        return (
            <Typography>
                
            </Typography>
        )
    }

    render() {
        const { 
            classes: {
                divider
            } 
        } = this.props
        return (
            <div>
                { this.renderPollingIntervalField() }
                <div className={divider} />
                { this.renderQueriesField()}
                <div className={divider} />
                { this.renderLangugeField() }
                <div className={divider} />
                { this.renderCountryField() }
                <div className={divider}/>
                { this.renderSourcesField() }
                <div className={divider} />
                { this.renderCategoryField() }
            </div>
        )
    }
}

/**
 * Category, Language, Sources are single for topHeadlines
 */
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProp)(GoogleNewsFormSettings))