import React from 'react';
import Tile from './Tile.jsx';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useStyles } from './styles';

const NewsTiles = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={4}>
            { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(val => (
                    <Grid item xs={3}>
                        <Paper key={val} className={classes.paper} />
                    </Grid>
            ))}
            </Grid>
        </div>
    )
}

export default NewsTiles;