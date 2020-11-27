import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import TabView from "./components/TabView";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: 'flex',
  },
  link: {
    width: '100%',
    height: '100%',
    textDecoration: 'none',
    color: theme.palette.text.primary
  },
  content: {
    width: '740px',
    height: 'calc(100% - 88px)',
    padding: '20px',
    margin: '48px auto 0',
    overflow: 'auto'
  }
}));

function App() {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: any, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab label='User'/>
          <Tab label='Search'/>
          <Tab label='Messages'/>            
        </Tabs>
      </AppBar>
      <Paper className={classes.content}>
        <TabView index={0} currentIndex={tabValue}>
          <h1>User route</h1>
        </TabView>
        <TabView index={1} currentIndex={tabValue}>
          <h1>Search route</h1>
        </TabView>
        <TabView index={2} currentIndex={tabValue}>
          <h1>Messages route</h1>
        </TabView>
      </Paper>
    </div>
  );
}

export default App;
