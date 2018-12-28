import React from 'react'
import { 
    updateQueries,
    updateCountries,
    updateLanguages,
    updateCategories,
    updateSources,
    updatePollingInterval
} from '../../actions/googleAction'
import { TextField } from '@material-ui/core'

const mapStateToProps = state => {
    const google = state.googleReducer
    return {
        queries: google.queries,
        countries: google.countries,
        languages: google.languages,
        categories: google.categories,
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

class GoogleNewsFormSettings extends React.Component {
    constructor(props) {
        super(props)
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

    renderQueriesField() {

    }

    renderCategoriesField() {

    }

    renderLanguagesField() {
        
    }

    renderSourcesField() {

    }


    render() {
        return (
            <div>
                { this.renderPollingIntervalField() }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(GoogleNewsFormSettings)