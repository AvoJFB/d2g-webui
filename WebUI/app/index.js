import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import router from './scripts/router';
import store from './scripts/store';
import styles from './styles/index.less';

ReactDom.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      {router()}
    </Router>
  </Provider>,
  document.getElementById('root'),
);
