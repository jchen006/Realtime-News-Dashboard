import React from 'react';
import { ExpansionPanel } from './ExpansionPanel';
import { ExpansionPanelSummary } from './ExpansionPanelSummary';
import { ExpansionPanelDetails } from './ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { useNewsfeedPanelStyles as useStyles } from './styles';


function NewsfeedPanel(props) {
    const classes = useStyles();
    const { panelTitle, children } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel square expanded={true} disabled={true}>
                <ExpansionPanelSummary
                    aria-controls={`${panelTitle}-content`}
                    id={`${panelTitle}-header`}
                >
                    <Typography variant={"h6"}>{panelTitle}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    { children }
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export { NewsfeedPanel };