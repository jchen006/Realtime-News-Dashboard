import React from 'react';
import PropTypes from 'prop-types';
import { useStyles } from './styles'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Tile extends React.Component {

    constructor(props) {
        super(props);
    }

    renderMedia(classes) {
        const { image } = this.props;
        return (
            <CardMedia
                className={classes.media}
                image={image}
                title=""
            />
        )
    }

    renderContent() {
        const { title, user, content, source } = this.props;
        return (
            <CardContent>
                <Typography gutterBottom variant="h5" compoenent="h2">
                    { source === 'Twitter' ? user : title }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    { content }
                </Typography>
            </CardContent>
        );
    }

    renderActions() {
        return (
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        );
    }

    render() {
        const classes = useStyles();
        return (
            <Card className={classes.card}>
                <CardActionArea>
                    { image ? this.renderMedia(classes) : null }
                    { this.renderContent() }
                    { this.renderActions() }
                </CardActionArea>
            </Card>
        )
    }
}

Tile.propTypes = {

}