import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './scripts/routes';
import store from './scripts/store';
import styles from './styles/index.scss';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <Router history={history} routes={routes} />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
);
