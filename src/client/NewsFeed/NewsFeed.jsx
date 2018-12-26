import React from 'react'
import NewsFeedCard from './NewsFeedCard.jsx';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';
import ReactLoading from 'react-loading'
import styles from './styles.js'

const mapStateToProps = state => ({
    queries: state.google.queries,
    countries: state.google.countries,
    languages: state.google.languages,
    categories: state.google.categories,
    sources: state.google.sources,
    pollingInterval: state.google.pollingInterval
})

class NewsFeed extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentWillMount() {
        this.getTopHeadlines()
        this.pollingIntervalId = setInterval(this.getTopHeadlines, this.props.pollInterval)
    }
 
    removePolling() {
        clearInterval(this.pollingIntervalId)
    }

    constructQuery() {
        
    }

    /** Update to graphQL, 
     * also need to specify by what the queries*/
    getTopHeadlines() {
        fetch('/google/topHeadlines?country=us')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    news: data.articles
                })
            })
    }

    /** Update to graphQL */
    getNewsByQuery() {
        this.removePolling() 
        fetch('/google/everything')
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    news: data.articles})
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