import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import Register from './Register';

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Register/>
  </ThemeProvider>,
  document.getElementById('root')
);
