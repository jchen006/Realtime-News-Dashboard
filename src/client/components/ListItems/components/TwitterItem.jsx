import React from 'react';
import { NewsfeedAvatar } from './NewsfeedAvatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../styles';
import moment from 'moment';
import { Flipped, spring } from "react-flip-toolkit";

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

const onElementAppear = (el, index) =>
  spring({
    onUpdate: val => {
      el.style.opacity = val;
    },
    delay: index * 50
  });

const onExit = (el, index, removeElement) => {
  spring({
    config: { overshootClamping: true },
    onUpdate: val => {
      el.style.transform = `scaleY(${1 - val})`;
    },
    delay: index * 50,
    onComplete: removeElement
  });

  return () => {
    el.style.opacity = "";
    removeElement();
  };
};

function TwitterItem(props) {
    const {
        index,
        name,
        text,
        screen_name
    } = props;
    const classes = useStyles();
    const flipId = `tweet-item-${index}`;
    
    return (
        <Flipped
            flipId={flipId}
            onAppear={onElementAppear}
            onExit={onExit}
            key={flipId}
        >
            <ListItem alignItems="flex-start" className={classes.tweetItem}>
                <ListItemText
                    primary={<PrimaryText title={screen_name ? screen_name : name}/>}
                    secondary={<SecondaryText text={text}/>}
                />
            </ListItem>
        </Flipped>
    )
}

export { TwitterItem };