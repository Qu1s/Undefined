import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, FormControl, Input, InputLabel, Link, OutlinedInput, Paper, Tab, Tabs } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.background.default,
    display: "flex",
    justifyContent: "center",
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  login: {
    width: "400px",
    height: "500px",
    padding: "4px",
    marginTop: "100px",
    borderRadius: "5px",
    border: "6px dashed",
    borderColor: theme.palette.background.default,

    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formControl: {
    paddingBottom: "16px",
    width: "250px",
  },
  input: {
    padding: "18px 14px 16px",
    height: "30px",
  },
}))
function Login() {
    const classes = useStyles();
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleUserNameChange = (event: any) => {
      setUserName(event.target.value);
    };
    const handlePasswordChange = (event: any) => {
      setPassword(event.target.value);
    };
    const handleClick = () => {
      console.log(sendData());
    }

    async function sendData() {
      const data = {
        login: userName,
        password: password,
      }
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }
      const currentResponse = await fetch("http://www.localhost:5000/api/user/login", requestOptions).then(function(response) {
        return response.text();
      }).then(function(data) {
        console.log(data); // this will be a string
        return data;
      });;
      return currentResponse;
    }

    return (
      <div className={classes.root}>
        <AppBar>
          {/* <Tabs centered>
            <Link className={classes.link}><Tab label="Login"/></Link>
          </Tabs> */}
        </AppBar>
        <Paper className={classes.login} elevation={0}>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="component-outlined">Username</InputLabel>
            <OutlinedInput 
              id="username-input" 
              value={userName} 
              onChange={handleUserNameChange} 
              label="Username" 
              classes={{
                input: classes.input,
              }}
            />
          </FormControl>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput 
              id="password-input" 
              value={password} 
              type="password"
              onChange={handlePasswordChange} 
              label="Password" 
              classes={{
                input: classes.input,
              }}
            />
          </FormControl>
          <Input type="submit" value="Отправить" onClick={handleClick}/>
        </Paper>
      </div>
    );
  }
  
  export default Login;
  