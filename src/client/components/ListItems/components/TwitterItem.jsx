import React from 'react';
import { NewsfeedAvatar } from './NewsfeedAvatar';
import { useStyles } from '../styles';


function PrimaryText(props) {
    const { title } = props;
    const classes = useStyles();
    return (
        <>
            <Typography component="span" variant="h6" className={classes.inline} color="textPrimary">
                @ { title }
            </Typography>
        </>
    );
}

function SecondaryText(props) {
    const { text } = props;
    const classes = useStyles();
    return (
        <>
            <div>
                <Typography component="span" variant="body2" className={classes.inline} color="textPrimary">
                    " {text} "
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
        <ListItem alignItems="flex-start" onClick={handleOnClick} onHover={handleOnHover}>
            <ListItemAvatar>
                <NewsfeedAvatar source="Twitter"/>
            </ListItemAvatar>
            <ListItemText
                primaryText={<PrimaryText title={screen_name}/>}
                secondaryText={<SecondaryText text={text}/>}
            />
        </ListItem>
    )
}

export { TwitterItem };