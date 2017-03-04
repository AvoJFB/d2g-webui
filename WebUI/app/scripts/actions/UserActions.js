import axios from 'axios';
import { GET_USER_FAILURE, GET_USER_SUCCESS } from '../constants/UserConstants';

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailure = error => ({
  type: GET_USER_FAILURE,
  error,
});

export const getUserRequest = () => (
  dispatch => (
    axios.get('./user.json')
      .then(response => dispatch(getUserSuccess(response.data)))
      .catch(error => dispatch(getUserFailure(error)))
  )
);

export default {};

