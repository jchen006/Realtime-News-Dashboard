import React from 'react'
import NewsFeedCard from './NewsFeedCard.jsx';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';
import ReactLoading from 'react-loading'
import styles from './styles.js'
import topHeadlinesUrl from '../../utils/googleUrlConstructor'

const mapStateToProps = state => {
    const google = state.googleReducer
    return {
        query: google.query ? google.query : '',
        country: google.country ? google.country : '',
        language: google.language ? google.language : '',
        category: google.category ? google.category : '',
        sources: google.sources ? google.sources : [],
        polling_interval: google.polling_interval ? google.polling_interval : ''
    }
}

class NewsFeed extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            news: [],
            queryUrl: '/google/topHeadlines?country=us'
        }
        this.constructQuery = this.constructQuery.bind(this)
        this.getTopHeadlines = this.getTopHeadlines.bind(this)
    }

    componentWillMount() {
        this.getTopHeadlines()
        this.pollingIntervalId = setInterval(this.getTopHeadlines, this.props.polling_interval)
    }

    componentDidUpdate() {
        this.removePolling()
        this.pollingIntervalId = setInterval(this.getTopHeadlines, this.props.polling_interval)
    }
 
    removePolling() {
        clearInterval(this.pollingIntervalId)
    }

    constructQuery() {
        const { country, category, language, sources, query } = this.props

        if(country || category || language || sources || query) {
            const queryUrl = topHeadlinesUrl(country, category, sources, query, language)
            this.setState({
                queryUrl
            })
        }
    }

    getTopHeadlines() {
       this.constructQuery()
        fetch(this.state.queryUrl)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
    }
    
    renderFeed() {
        return (
            <div>
                { this.state.news.map((article) => {
                    return (
                        <NewsFeedCard
                            source={article.source.name}
                            title={article.title}
                            author={article.author}
                            publishedAt={article.publishedAt}
                            url={article.url}
                            description={article.description}
                            urlToImage={article.urlToImage}
                            content={article.content}
                        />
                    )
                })}
            </div>
        )
    }

    renderLoading() {
        return (
            <ReactLoading type={"spin"} color="#000000"/>
        )
    }

    renderNewsFeed() { 
        const { classes } = this.props
        return (
            <div>
                <GridList cellHeight={150} cols={2} className={classes.gridList}>
                    { this.state.news.length > 0 ? this.renderFeed() : this.renderLoading() }
                </GridList>
            </div>
        )
    }

    render() {
        return (
            <div>
                { this.renderNewsFeed() }
            </div>
        )
    }
}

export default withStyles(styles)(NewsFeed);