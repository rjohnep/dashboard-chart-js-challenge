import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { App } from './containers/App';
import { rootReducer } from './reducers';
import { theme, GlobalStyle } from './theme';

const MOUNT_NODE = document.getElementById('app');

/* eslint-disable no-underscore-dangle */
// TODO: implement only for development mode
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <Fragment>
            <CssBaseline />
            <GlobalStyle />

            <App />
          </Fragment>
        </ThemeProvider>
      </MuiThemeProvider>
    </Provider>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./containers/App'], () => {
    if (MOUNT_NODE) ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    render();
  });
}

render();
