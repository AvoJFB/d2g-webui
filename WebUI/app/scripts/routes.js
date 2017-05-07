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
import requireAuth from './HOC/requireAuth';

export default (
  <Route component={App} >
    <Route component={Wrapper} >
      <Route path="/" component={LoginPageContainer} />
      <Route path="/Register" component={RegisterPageContainer} />
    </Route>
    <Route component={requireAuth(Wrapper)} >
      <Route path="/Expenses" component={ExpensesPageContainer} />
      <Route path="/Profile" component={UserInfoPageContainer} />
      <Route path="/UsersList" component={UsersListPageContainer} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);
