import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary
  }
}));

function App() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Router>
        <AppBar>
          <Tabs centered>
            <Link className={classes.link} to='/user'><Tab label='User'/></Link>
            <Link className={classes.link} to='/search'><Tab label='Search'/></Link>
            <Link className={classes.link} to='/messages'><Tab label='Messages'/></Link>
          </Tabs>
        </AppBar>
        <Switch>
          <Redirect from='/' to='search'/>
          <Route path="/messages">
            Messages route
          </Route>
          <Route path="/search">
            Search route
          </Route>
          <Route path="user">
            User route
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
