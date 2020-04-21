import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useStyles } from './styles';
import { TabPanel } from './TabPanel';

function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

function VerticalTabs(props) {
    const { tabs } = props;
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                className={classes.tabs}
            >
                {
                    tabs.map((tab, index) => {
                        const { label } = tab;
                        return (
                            <Tab label={label} {...a11yProps(index)} />
                        );
                    })
                }
            </Tabs>
            {
                tabs.map((tab, index) => {
                    const { label, component } = tab;
                    return (
                        <TabPanel value={value} index={index}>
                            {label}
                        </TabPanel>
                    )

                })
            }
        </div>
    )

}

export { VerticalTabs };