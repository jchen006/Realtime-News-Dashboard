import React from 'react'
import NewsFeedCard from './NewsFeedCard.jsx';
import GridList from '@material-ui/core/GridList';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js'

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

    // /**
    //  * When an update is triggered with pollInterval, an update will be triggered
    //  * @param {*} nextProps 
    //  */
    // static getDerivedStateFromProps(nextProps) {
    //     if(this.pollingIntervalId) {
    //         this.removePolling()
    //     }
    //     this.pollingIntervalId = setInterval(this.getTopHeadlines, nextProps.pollInterval)
    // }
 
    removePolling() {
        clearInterval(this.pollingIntervalId)
    }

    /** Update to graphQL, 
     * also need to specify by what the queries*/
    getTopHeadlines() {
        fetch('/google/topHeadlines?country=us')
            .then(response => response.json())
            .then((news) => {
                this.setState({
                    news})
                })
    }

    /** Update to graphQL */
    getNewsByQuery() {
        this.removePolling() 
        fetch('/google/everything')
            .then(response => response.json())
            .then((news) => {
                this.setState({
                    news})
                })
    }

    // {
    //     -"source": {
    //     "id": null,
    //     "name": "Nypost.com"
    //     },
    //     "author": "Associated Press",
    //     "title": "Two arrested for drone use in London Gatwick Airport case - New York Post ",
    //     "description": "LONDON — British police say two people were arrested early Saturday morning for suspected “criminal use of drones’” in the Gatwick Airport case that has created nightmarish holiday travel delays fo…",
    //     "url": "https://nypost.com/2018/12/22/two-arrested-for-drone-use-in-london-gatwick-airport-case/",
    //     "urlToImage": "https://thenypost.files.wordpress.com/2018/12/181222-gatwick-case.jpg?quality=90&strip=all&w=1200",
    //     "publishedAt": "2018-12-22T13:16:00Z",
    //     "content": "LONDON British police say two people were arrested early Saturday morning for suspected criminal use of drones in the Gatwick Airport case that has created nightmarish holiday travel delays for tens of thousands of passengers. Sussex police did not release th… [+4266 chars]"
    //     },
    renderNewsFeed() {
        //Change to render top 20
        const { classes } = this.props
        console.log(this.state.news)
        return (
            <div>
                <GridList cellHeight={180} className={classes.gridList}>
                    { this.state.news.map((article) => {
                        return (
                            <NewsFeedCard
                                source={article.source.name}
                                author={article.author}
                                publishedAt={article.publishedAt}
                                url={article.url}
                                description={article.description}
                                urlToImage={article.urlToImage}
                                content={article.content}
                            />
                        )
                    })}
                </GridList>
            </div>
        )
    }

    render() {
        /** This will be rendering a couple PNGS and headlines of many NewsFeedCard. 
         * How to prioririze based on importance? Possible extract only keywords and if trend is that way highlight? 
         */
        return (
            <div>
                { this.renderNewsFeed() }
            </div>
        )
    }
}

export default withStyles(styles)(NewsFeed);