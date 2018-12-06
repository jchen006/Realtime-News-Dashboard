import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


const styles = theme => ({
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }
});

class TweetCard extends React.Component {
    /**
     * 
     * @param {*} props 
     * Each tweet will have the following properties 
     *  [u'quote_count', u'contributors', u'truncated', u'text', u'is_quote_status', 
     *  u'in_reply_to_status_id', u'reply_count', u'id', u'favorite_count', u'source', 
     * u'retweeted', u'coordinates', u'timestamp_ms', u'entities', u'in_reply_to_screen_name', 
     * u'id_str', u'retweet_count', u'in_reply_to_user_id', u'favorited', u'user', u'geo', 
     * u'in_reply_to_user_id_str', u'lang', u'created_at', u'filter_level', 
     * u'in_reply_to_status_id_str', u'place']
     */
    constructor(props) {
        super(props)
    }

    render() {
        const { 
            classes,
            user,
            createdAt,
            text,
            sentimentAnalysis,
            coordinates 
        } = this.props
        return (
            <Paper className={classes.paper}>
                <Card className={classes.card}>
                    <CardContent>
                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="h2">
                            { this.props.user }
                        </Typography>
                        {/* <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography> */}
                        <Typography component="p">
                            { this.props.text }
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Paper>
        )
    }
}

TweetCard.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.string,
    created: PropTypes.string,
    text: PropTypes.string,
    sentimentAnalysis: PropTypes.array,
    coordinates: PropTypes.string
}

export default withStyles(styles)(TweetCard);










