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
import SingleEntryField from '../../SingleEntryField/SingleEntryField.jsx'
import FlipSwitch from '../../Switch/FlipSwitch.jsx'
import topHeadlinesUrl from '../../../utils/googleUrlConstructor'


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
    updateQuery: (query) => dispatch(updateQuery(query)),
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
        this.onSourceSwitchChange = this.onSourceSwitchChange.bind(this)
        this.state = {
            sources: [],
            useSource: true
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

    onSourceSwitchChange(checked) {
        this.setState({
            useSource: checked
        })
    }

    renderSourcesSwitch() {
        return (
            <FlipSwitch
                handleChange={this.onSourceSwitchChange}
                checked={this.state.useSource}
                value={"use-sources-switch"}
                label={"Use Sources?"}
            />
        )
    }

    renderPollingIntervalField() {
        return (
            <SingleEntryField
                id={'google-polling-interval-field'}
                label={'Polling Interval'}
                value={this.props.polling_interval}
                onChange={this.onPollingIntervalChange}
                disabled={false}
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
                disabled={this.state.useSource}
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
                disabled={false}
            />
        )
    }

    renderQueryField() {
        return (
            <SingleEntryField
                id={'google-polling-interval-field'}
                label={'Query'}
                value={this.props.query}
                onChange={this.onQueryChange}
                disabled={false}
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
                disabled={this.state.useSource}
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
                disabled={!this.state.useSource}
            />
        )
    }

    renderExistingUrlQuery() {
        let {country, category, sources, query, language } = this.props
        let queryUrl = ""
        if(!this.state.useSource) {
            queryUrl = topHeadlinesUrl(country, category, sources=[], query, language)
        } else {
            queryUrl = topHeadlinesUrl(country="", category="", sources, query, language)
        }
        
        return (
            <Typography variant="body1" gutterBottom>
                {queryUrl}
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
                {this.renderExistingUrlQuery()}
                <div className={divider} />
                {this.renderSourcesSwitch()}
                <div className={divider} />
                { this.renderPollingIntervalField() }
                <div className={divider} />
                { this.renderQueryField()}
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