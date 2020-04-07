import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { useNewsfeedPanelStyles as useStyles } from './styles';


function NewsfeedPanel(props) {
    const classes = useStyles();
    const { panelTitle, children } = props;
    return (
        <div className={classes.root}>
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    className={classes.header}
                    defaultExpanded
                >
                    <Typography className={classes.heading}>{panelTitle}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                    { children }
                </ExpansionPanelDetails>
            </ExpansionPanel>
        </div>
    )
}

export { NewsfeedPanel };