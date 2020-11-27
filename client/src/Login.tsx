import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, TextField } from '@material-ui/core';

const useStyles = makeStyles({
    login: {
      backgroundColor: "#ffffff",
      color: "#ffffff",
      width: "400px",
      height: "500px",
      padding: "4px",
      marginTop: "100px",
      boxShadow: "box-shadow: -2px 10px 20px 9px rgba(0,0,0,0.78); -webkit-box-shadow: -2px 10px 20px 9px rgba(0,0,0,0.78); -moz-box-shadow: -2px 10px 20px 9px rgba(0,0,0,0.78);",
      borderRadius: "5px",
      border: "2px dashed #212121",

      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    textField: {
      paddingBottom: "16px",
    }
})
function Login() {
    const classes = useStyles();
    return (
      <Container className={classes.login}>
        <TextField
          required
          id="username-input"
          label="Username"
          type="username"
          autoComplete="current-username"
          variant="outlined"
          className={classes.textField}
        />
        <TextField
          required
          id="password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          className={classes.textField}
      />
      </Container>
    );
  }
  
  export default Login;
  