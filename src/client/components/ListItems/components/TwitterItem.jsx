import React from 'react';
import { NewsfeedAvatar } from './NewsfeedAvatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';
import moment from 'moment';

function PrimaryText(props) {
    const { title } = props;
    const classes = useStyles();

    const handleOnClick = () => {
        window.open(`https://twitter.com/${title}`);
    }

    return (
        <>
            <Typography component="span" variant="h6" className={classes.inline} color="textPrimary" onClick={handleOnClick}>
                @{ title }
            </Typography>
        </>
    );
}

function SecondaryText(props) {
    const { text, createdAt } = props;
    const classes = useStyles();
    return (
        <>
            <div>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    {text}
                </Typography>
            </div>
            <div>
                <Typography component="span" variant="caption" className={classes.inline} color="textPrimary">
                    { moment(createdAt).fromNow() }
                </Typography>
            </div>
        </>
    );
}

function TwitterItem(props) {
    const {
        name,
        text,
        screen_name
    } = props;
    const classes = useStyles();

    return (
        <ListItem alignItems="flex-start" className={classes.tweetItem}>
            <ListItemText
                primary={<PrimaryText title={screen_name ? screen_name : name}/>}
                secondary={<SecondaryText text={text}/>}
            />
        </ListItem>
    )
}

export { TwitterItem };