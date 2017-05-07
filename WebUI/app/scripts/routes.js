import React from 'react';
import { Route } from 'react-router';
import NotFound from './components/NotFound';
import App from './components/App';
import Wrapper from './components/Wrapper';
import LoginPageContainer from './containers/LoginPageContainer';
import RegisterPageContainer from './containers/RegisterPageContainer';
import ExpensesPageContainer from './containers/ExpensesPageContainer';
import UserInfoPageContainer from './containers/UserInfoPageContainer';
import UsersListPageContainer from './containers/UsersListPageContainer';
import store from './store';

const requireGuest = (nextState, replace) => {
  if (store.getState().auth.SecurityContext.isLoggedIn) {
    replace({
      pathname: '/Profile',
    });
  }
};

const requireAuth = (nextState, replace) => {
  if (!store.getState().auth.SecurityContext.isLoggedIn) {
    replace({
      pathname: '/',
    });
  }
};


export default (
  <Route component={App} >
    <Route component={Wrapper} onEnter={requireGuest}>
      <Route path="/" component={LoginPageContainer} />
      <Route path="/Register" component={RegisterPageContainer} />
    </Route>
    <Route component={Wrapper} onEnter={requireAuth} >
      <Route path="/Expenses" component={ExpensesPageContainer} />
      <Route path="/Profile" component={UserInfoPageContainer} />
      <Route path="/UsersList" component={UsersListPageContainer} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
