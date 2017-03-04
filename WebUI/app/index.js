import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import router from './scripts/router';
import store from './scripts/store';
import styles from './styles/index.less';

ReactDom.render(
  <Provider store={store}>
    {router()}
  </Provider>,
  document.getElementById('root'),
);
