import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import moment from 'moment';
import Typography from '@material-ui/core/Typography';
import { NewsfeedAvatar } from './NewsfeedAvatar';
import { useStyles } from '../styles';

// TODO add a functoinality to expand 
// {
//     -"source": {
//     "id": "google-news",
//     "name": "Google News"
//     },
//     "author": "Kate Lyons",
//     "title": "Anger in Guam at 'dangerous' plan to offload US sailors from virus-hit aircraft carrier",
//     "description": "Governor of US Pacific territory accused of ‘playing a game of chance with the health of our people’",
//     "url": "https://www.theguardian.com/world/2020/apr/02/anger-in-guam-at-dangerous-plan-to-offload-us-sailors-from-virus-hit-aircraft-carrier",
//     "urlToImage": "https://i.guim.co.uk/img/media/9efcedc73bad8ff3e7b35d1affe15f53c491545b/0_0_6000_3604/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=79922711ffa19307fd922b1302a26698",
//     "publishedAt": "2020-04-02T05:05:37+00:00",
//     "content": "Community leaders in Guam have voiced concerns at the dangerous request from the US Navy to evacuate thousands of sailors to their island from a US aircraft carrier, where there has been an outbreak of coronavirus.\r\nNearly 3,000 sailors will be taken off the … [+3180 chars]"
//     }
function PrimaryText(props) {
    const { title } = props;
    const classes = useStyles();
    return (
        <>
            <Typography component="div" variant="body1" className={classes.inline} color="textPrimary">
                <b>{ title }</b>
            </Typography>
        </>
    );
}

function SecondaryText(props) {
    const { publishedAt, source} = props;
    const classes = useStyles();
    return (
        <>
            <div>
                <Typography component="span" variant="caption" className={classes.inline} color="textPrimary">
                    {source}
                </Typography>
            </div>
            <div>
                <Typography component="span" variant="caption" className={classes.inline} color="textPrimary">
                    { moment(publishedAt).fromNow() }
                </Typography>
            </div>
        </>
    );
}


function GoogleNewsItem(props) {
    const { 
        title, 
        url,
        publishedAt,
        sourceId,
        sourceName
    } = props;

    const handleOnClick = () => {
        window.open(url);
    }

    return (
        <ListItem alignItems="flex-start" button onClick={handleOnClick}>
            <ListItemText
                primary={<PrimaryText title={title}/>}
                secondary={<SecondaryText publishedAt={publishedAt} source={sourceName}/>}
            />
        </ListItem>
    )
}

export { GoogleNewsItem };