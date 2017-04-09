import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import MainPage from './components/MainPage';
import AuthPage from './components/AuthPage';
import ExpensesPageContainer from './containers/ExpensesPageContainer';
import UserInfoPageContainer from './containers/UserInfoPageContainer';
import UsersListPageContainer from './containers/UsersListPageContainer';


export default (
  <Route component={App}>
    <Route path="/" component={MainPage} />
    <Route path="/Auth" component={AuthPage} />
    <Route path="/Expenses" component={ExpensesPageContainer} />
    <Route path="/UserInfo" component={UserInfoPageContainer} />
    <Route path="/UsersList" component={UsersListPageContainer} />
  </Route>
);
