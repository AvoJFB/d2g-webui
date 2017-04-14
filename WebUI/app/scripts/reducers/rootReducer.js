import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import usersListPage from './usersListPage';
import expensesPage from './expensesPage';
import authReducer from './authReducer';


export default combineReducers({
  usersListPage,
  expensesPage,
  auth: authReducer,
  form,
});
