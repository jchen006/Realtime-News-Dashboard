import React from 'react'
import { 
    updateQueries,
    updateCountries,
    updateLanguages,
    updateCategory,
    updateSources,
    updatePollingInterval
} from '../../../actions/googleAction'
import { TextField } from '@material-ui/core'
import { categories, languages, country } from '../../../constants/google'
import styles from './styles'
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import iso from 'iso-3166-1'
import MultiSelectField from '../../MultiSelectField/MultiSelectField.jsx'
import SingleSelectField from '../../SingleSelectField/SingleSelectField.jsx'
import MultiEntryField from '../../MultiEntryField/MultiEntryField.jsx'


const mapStateToProps = state => {
    const google = state.googleReducer
    return {
        queries: google.queries ? google.queries : [],
        country: google.country ? google.country : '',
        language: google.languages ? google.languages : '',
        category: google.category ? google.category : '',
        sources: google.sources ? google.sources : [],
        pollingInterval: google.pollingInterval
    }
}

const mapDispatchToProp = dispatch => ({
    updateQueries: (queries) => dispatch(updateQueries(queries)),
    updateCountry: (countries) => dispatch(updateCountries(countries)),
    updateLanguage: (languages) => dispatch(updateLanguages(languages)),
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
 * q - can only take in on phrase (needs to be URL encoded)
 * pageSize - 20 default to 100 
 * page - page size if greater than
 */
class GoogleNewsFormSettings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            queries: ''
        }
        this.onQueriesChange = this.onQueriesChange.bind(this)
        this.onSourcesChange = this.onSourcesChange.bind(this)
        this.onCategoryChange = this.onCategoryChange.bind(this)
        this.onCountryChange = this.onCountryChange.bind(this)
        this.onLanguageChange = this.onLanguageChange.bind(this)
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
    
    onChangePollingIntervalField(e) {
        e.preventDefault()
        let value = e.target.value
        this.props.updateThrottle(value)
    }

    renderPollingIntervalField() {
        return (
            <TextField
                id="outlined-name"
                label="polling-interval"
                value={this.props.pollingInterval}
                onChange={this.onChangePollingIntervalField}
                margin="normal"
                variant="outlined"
            />
        )
    }

    onQueriesChange(value) {
        this.props.updateQueries(value)
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

    renderQueriesField() {
        return (
            <MultiEntryField
                onChange={this.onQueriesChange}
                onEnter={this.onQueriesChange}
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
        console.log(category)
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

    renderMultiSelectField() {
        const { sources } = this.state
        let modifiedSources = sources ? sources.map((s) => {
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
                <div className={divider}/>
                { this.renderMultiSelectField() }
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