import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const TwitterTile = (props) => {
    const classes = useStyles();
    const { name, text } = props;

    return (
        <Card className={classes.card}>
          <CardActionArea>
              <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                      {`@${name}`} 
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                      {text}
                  </Typography>
              </CardContent>
          </CardActionArea>
        </Card>
    );
}

