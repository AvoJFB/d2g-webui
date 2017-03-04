import axios from 'axios';
import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from '../constants/userConstants';

export const getUsersListSuccess = users => ({
  type: GET_USER_LIST_SUCCESS,
  users,
});

export const getUsersListFailure = error => ({
  type: GET_USER_LIST_FAILURE,
  error,
});

export const getUsersListRequest = () => (
  dispatch => (
    axios.get('./users.json')
      .then(response => dispatch(getUsersListSuccess(response.data)))
      .catch(error => dispatch(getUsersListFailure(error)))
  )
);
