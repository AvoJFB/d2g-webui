import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import userInfoPage from './userInfoPage';
import usersListPage from './usersListPage';


export default combineReducers({
  userInfoPage,
  usersListPage,
  form,
});
