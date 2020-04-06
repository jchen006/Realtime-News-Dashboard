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
    return (
        <>
            <Typography component="span" variant="h6" className={classes.inline} color="textPrimary">
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
        text,
        screen_name
    } = props;

    return (
        <ListItem alignItems="flex-start">
            <ListItemAvatar>
                <NewsfeedAvatar sourceId="Twitter"/>
            </ListItemAvatar>
            <ListItemText
                primary={<PrimaryText title={screen_name}/>}
                secondary={<SecondaryText text={text}/>}
            />
        </ListItem>
    )
}

export { TwitterItem };