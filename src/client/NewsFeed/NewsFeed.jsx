import React from 'react'

class NewsFeed extends React.Component { 
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.pollInterval = setInterval(this.getNews, this.props.pollInterval)
    }

    getDerivedStateFromProps() {
        /**
         * recreate new polling if updated.
         */
    }

    getNews() {
        /**
         * Make the request to the endpoint here
         */
    }

    render() {
        /** This will be rendering a couple PNGS and headlines of many NewsFeedCard */
    }


}