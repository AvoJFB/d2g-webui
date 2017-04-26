import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import NotFound from './components/NotFound';
import AppContainer from './containers/AppContainer';
import LoginPageContainer from './containers/LoginPageContainer';
import RegisterPageContainer from './containers/RegisterPageContainer';
import ExpensesPageContainer from './containers/ExpensesPageContainer';
import UserInfoPageContainer from './containers/UserInfoPageContainer';
import UsersListPageContainer from './containers/UsersListPageContainer';
import store from './store';

const redirectIfLoggedIn = (nextState, replace) => {
  if (store.getState().auth.SecurityContext.isLoggedIn === true) {
    replace({
      pathname: 'Profile',
    });
  }
};

export default (
  <Route component={AppContainer} >
    <Route path="/" component={LoginPageContainer} onEnter={redirectIfLoggedIn} />
    <Route path="Register" component={RegisterPageContainer} />
    <Route path="Expenses" component={ExpensesPageContainer} />
    <Route path="Profile" component={UserInfoPageContainer} />
    <Route path="UsersList" component={UsersListPageContainer} />
    <Route path="*" component={NotFound} />
  </Route>
);
