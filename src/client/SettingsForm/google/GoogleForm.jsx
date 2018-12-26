import React from 'react'
import { 
    updateQueries,
    updateCountries,
    updateLanguages,
    updateCategories,
    updateSources,
    updatePollingInterval
} from '../../actions/googleAction'

const mapStateToProps = state => ({
    queries: state.google.queries,
    countries: state.google.countries,
    languages: state.google.languages,
    categories: state.google.categories,
    sources: state.google.sources,
    pollingInterval: state.google.pollingInterval
})

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

    render() {
        return (
            <ExpansionPanelDetails>
                <div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
                <div>
                    
                </div>
            </ExpansionPanelDetails>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(GoogleNewsFormSettings)