import axios from 'axios';
import { GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS } from '../constants/userConstants';

export const getUserStart = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  user,
});

export const getUserFailure = error => ({
  type: GET_USER_FAILURE,
  error,
});

export const getUserRequest = () => (
  (dispatch) => {
    dispatch(getUserStart());
    axios.get('http://localhost:8080/user.json')
      .then(response => dispatch(getUserSuccess(response.data)))
      .catch(error => dispatch(getUserFailure(error)));
  }
);

