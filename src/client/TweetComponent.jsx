import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap'

class TweetComponent extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3"> { this.props.user } </Panel.Title>
                    </Panel.Heading>
                    <Panel.Body> { this.props.text } </Panel.Body>
                </Panel>
            </div>
        )
    }
}

TweetComponent.propTypes = {
    user: PropTypes.string,
    created: PropTypes.string,
    text: PropTypes.string,
    sentimentAnalysis: PropTypes.array,
    coordinates: PropTypes.string
}

export default TweetComponent





// [u'quote_count', u'contributors', u'truncated', u'text', u'is_quote_status', 
// u'in_reply_to_status_id', u'reply_count', u'id', u'favorite_count', u'source', 
// u'retweeted', u'coordinates', u'timestamp_ms', u'entities', u'in_reply_to_screen_name', 
// u'id_str', u'retweet_count', u'in_reply_to_user_id', u'favorited', u'user', u'geo', 
// u'in_reply_to_user_id_str', u'lang', u'created_at', u'filter_level', 
// u'in_reply_to_status_id_str', u'place']