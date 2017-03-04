import { reducer as form } from 'redux-form';
import { combineReducers } from 'redux';
import user from './user';
import users from './users';


export default combineReducers({
  user,
  users,
  form,
});
