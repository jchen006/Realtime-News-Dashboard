import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';


function NewsfeedPanel(props) {
    const { panelTitle, children } = props;
    return (
        <div className="">
            <ExpansionPanel>
                <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon/>}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
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