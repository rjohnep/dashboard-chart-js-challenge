import { createGlobalStyle } from 'styled-components';
import { createMuiTheme } from '@material-ui/core';

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }
  
  #app {
    display: flex;
    width: 100%;
    height: 100%;
    background: #fff;
  }
`;

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#43af6c',
      contrastText: '#fff'
    },
    secondary: {
      main: '#f3f3f3',
      contrastText: '#000'
    }
  }
});
