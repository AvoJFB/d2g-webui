import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import usersListPage from './usersListPage';
import expensesPage from './expensesPage';
import auth from './authReducer';

export default combineReducers({
  usersListPage,
  expensesPage,
  auth,
  form,
  routing: routerReducer,
});
