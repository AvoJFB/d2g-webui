import axios from 'axios';
import { browserHistory } from 'react-router';
import { SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_OUT } from '../constants/authConstants';

export const signInRequest = () => ({
  type: SIGN_IN_REQUEST,
});

export const signInSuccess = user => ({
  type: SIGN_IN_SUCCESS,
  user,
});

export const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  error,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const signIn = () => (
  (dispatch) => {
    dispatch(signInRequest());
    return axios.get('./user.json')
      .then((response) => {
        dispatch(signInSuccess(response.data));
        browserHistory.push('/Expenses');
      })
      .catch(error => dispatch(signInFailure(error)));
  }
);
