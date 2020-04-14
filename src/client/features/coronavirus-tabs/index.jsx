import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core.Tab';
import Box from '@material-ui/core/Box';

function CoronavirusTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="verticak"
                variant="scrollable"
                value={value}
                onChange={handleChange}
            >
            
            </Tabs>
        </div>
    )
}

export { CoronavirusTabs };
