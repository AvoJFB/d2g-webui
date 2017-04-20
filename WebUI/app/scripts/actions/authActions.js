import axios from 'axios';
import { browserHistory } from 'react-router';
import { SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT,
} from '../constants/authConstants';

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

export const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE,
});

export const signUp = user => (
  (dispatch) => {
    dispatch(signUpRequest());
    return axios.post(`${process.env.API_URL}/user`, user)
      .then(() => {
        dispatch(signUpSuccess());
      })
      .catch(() => dispatch(signUpFailure()));
  }
);
