import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import MainPage from './components/MainPage';
import AuthPageContainer from './containers/AuthPageContainer';
import ExpensesPageContainer from './containers/ExpensesPageContainer';
import UserInfoPageContainer from './containers/UserInfoPageContainer';
import UsersListPageContainer from './containers/UsersListPageContainer';
import store from './store';

const requireAuth = (nextState, replace) => {
  if (store.getState().auth.SecurityContext.isLoggedIn === false) {
    replace({
      pathname: '/Auth',
    });
  }
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={MainPage} />
    <Route path="Auth" component={AuthPageContainer} />
    <Route path="Expenses" component={ExpensesPageContainer} onEnter={requireAuth} />
    <Route path="UserInfo" component={UserInfoPageContainer} onEnter={requireAuth} />
    <Route path="UsersList" component={UsersListPageContainer} onEnter={requireAuth} />
  </Route>
);
