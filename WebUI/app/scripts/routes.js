import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import NotFound from './components/NotFound';
import LoginPageContainer from './containers/LoginPageContainer';
import RegisterPageContainer from './containers/RegisterPageContainer';
import ExpensesPageContainer from './containers/ExpensesPageContainer';
import UserInfoPageContainer from './containers/UserInfoPageContainer';
import UsersListPageContainer from './containers/UsersListPageContainer';
import store from './store';

const requireAuth = (nextState, replace) => {
  if (store.getState().auth.SecurityContext.isLoggedIn === false) {
    replace({
      pathname: '/',
    });
  }
};

const redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().auth.SecurityContext.isLoggedIn === true) {
    replace({
      pathname: '/Expenses',
    });
  }
};

export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPageContainer} />
    <Route path="Register" component={RegisterPageContainer} onEnter={redirectIfLoggedIn} />
    <Route path="Expenses" component={ExpensesPageContainer} onEnter={requireAuth} />
    <Route path="Profile" component={UserInfoPageContainer} onEnter={requireAuth} />
    <Route path="UsersList" component={UsersListPageContainer} onEnter={requireAuth} />
    <Route path="*" component={NotFound} />
  </Route>
);
