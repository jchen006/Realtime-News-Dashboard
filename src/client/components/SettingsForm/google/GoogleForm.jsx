import React from 'react'
import { 
    updateQueries,
    updateCountries,
    updateLanguages,
    updateCategories,
    updateSources,
    updatePollingInterval
} from '../../../actions/googleAction'
import { TextField } from '@material-ui/core'
import Select from 'react-select'
import { categories, languages, country } from '../../../constants/google'
import styles from './styles.js'
import { withStyles } from '@material-ui/core/styles';
import {
    Control,
    Menu,
    MultiValue,
    NoOptionsMessage,
    Options,
    Placeholder,
    ValueContainer
} from './FormComponents.js'
import { connect } from 'react-redux';
import iso from 'iso-3166-1'


const mapStateToProps = state => {
    const google = state.googleReducer
    return {
        queries: google.queries,
        countries: google.countries,
        languages: google.languages,
        categories: google.categories ? google.categories : '',
        sources: google.sources,
        pollingInterval: google.pollingInterval
    }
}

const mapDispatchToProp = dispatch => ({
    updateQueries: (queries) => dispatch(updateQueries(queries)),
    updateCountries: (countries) => dispatch(updateCountries(countries)),
    updateLanguages: (languages) => dispatch(updateLanguages(languages)),
    updateCategories: (categories) => dispatch(updateCategories(categories)),
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
        this.onQueriesFieldChange = this.onQueriesFieldChange.bind(this)
        this.onQueriesFieldKeyPress = this.onQueriesFieldKeyPress.bind(this)
        this.handleOnCategories = this.handleOnCategories.bind(this)
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

    onQueriesFieldKeyPress(e) {
        if(e.charCode === 13) {
            let value = this.state.query
            let newValue = {
                key: this.props.queries.length,
                label: value
            }
            let updatedQueries = [...this.props.queries]
            updatedQueries.push(newValue)
            this.props.updateQueries(updatedQueries)
            this.setState({
                query: ''
            })
        }
    }

    onQueriesFieldChange(e) {
        this.setState({
            query: e.target.value
        })
    }

    onQueriesFieldDelete = data => () => {
        let updatedQueries = [...this.props.queries]
        const tokenToDelete = updatedQueries.indexOf(data)
        updatedQueries.splice(tokenToDelete, 1)
        this.props.updateQueries(updatedQueries)
    }

    renderQueriesField() {
        return (
            <TextField
                id="outlined-name"
                label="queries"
                value={this.props.queries}
                onChange={this.onQueriesFieldChange}
                onKeyPress={this.onQueriesFieldKeyPress}
                margin="normal"
                variant="outlined"
                />
            )
    }

    handleOnCategories = (type) => (value) => {
        console.log(type, value)
        if(type === 'Categories') {
            this.props.updateCategories(value)
        } else if(type === 'Languages') {
            this.props.updateLanguages(value)
        } else if(type === 'Countries') {
            this.props.updateCountries(value)
        } else if(type === 'Sources') {
            this.props.updateSources(value)
        }
    }

    renderMultiSelectField(options, type, defaultValue) {
        const { classes, theme } = this.props
        if(type !== 'Sources') {
            options = options.map((c) => {
                if(type === 'Countries') {
                    let isoSearch = iso.whereAlpha2(c)
                    let country = isoSearch && isoSearch.country ? isoSearch.country : ''
                    return {
                        label: country ? country : c,
                        value: c
                    }
                } else {
                    return {
                        label: c,
                        value: c
                    }
                }
            })
        } 

        const selectStyles = {
            input: base => ({
              ...base,
              color: theme.palette.text.primary,
              '& input': {
                font: 'inherit',
              },
            }),
        };

        const components = {
            Control,
            Menu,
            MultiValue,
            NoOptionsMessage,
            Placeholder,
            ValueContainer
        }
        return (
            <Select
                classes={classes}
                styles={selectStyles}
                textFieldProps={{
                    label: type,
                    InputLabelProps: {
                        shrink: true
                    }
                }}
                onChange={this.handleOnCategories(type)}
                options={options}
                components={components}
                placeholder={`Select ${type}`}
                isMulti
                defaultValue={defaultValue ? defaultValue : null}
            />
        )
    }

    render() {
        const { sources } = this.state
        const { 
            classes: {
                divider
            } 
        } = this.props
        let modifiedSources = this.state.sources ? sources.map((s) => {
            return {
                label: s.name,
                value: s.id,
                description: s.description,
                url: s.url
            }
        }) : []
        return (
            <div>
                { this.renderPollingIntervalField() }
                <div className={divider} />
                { this.renderMultiSelectField(categories, 'Categories', this.props.categories) }
                <div className={divider} />
                { this.renderMultiSelectField(languages, 'Languages', this.props.languages) }
                <div className={divider} />
                { this.renderMultiSelectField(country, 'Countries', this.props.countries) }
                <div className={divider} />
                { this.renderMultiSelectField(modifiedSources, 'Sources', this.props.sources) }
                <div className={divider} />
            </div>
        )
    }
}

/**
 * Category, Language, Sources are single for topHeadlines
 */
export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, mapDispatchToProp)(GoogleNewsFormSettings))