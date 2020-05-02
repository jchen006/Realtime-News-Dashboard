import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { TabPanel } from "./TabPanel";
import styles from "./style.module.css";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function VerticalTabs(props) {
  const { tabs } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.root}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={styles.tabs}
      >
        {tabs.map((tab, index) => {
          const { label } = tab;
          return <Tab label={label} {...a11yProps(index)} />;
        })}
      </Tabs>
      {tabs.map((tab, index) => {
        const { label, component } = tab;
        const Component = component;
        return (
          <TabPanel value={value} index={index}>
            <Component />
          </TabPanel>
        );
      })}
    </div>
  );
}

export { VerticalTabs };
