import { browserHistory } from 'react-router';
import { push, replace } from 'react-router-redux';
import axiosClient from '../axiosClient';
import { SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_REQUEST,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  GET_SESSION_REQUEST,
  GET_SESSION_SUCCESS,
  GET_SESSION_FAILURE,
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

export const signOutRequest = () => ({
  type: SIGN_OUT_REQUEST,
});

export const signOutSuccess = () => ({
  type: SIGN_OUT_SUCCESS,
});

export const signOutFailure = error => ({
  type: SIGN_OUT_FAILURE,
  error,
});


export const signUpRequest = () => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = () => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = () => ({
  type: SIGN_UP_FAILURE,
});

export const getSessionRequest = () => ({
  type: GET_SESSION_REQUEST,
});

export const getSessionSuccess = user => ({
  type: GET_SESSION_SUCCESS,
  user,
});

export const getSessionFailure = error => ({
  type: GET_SESSION_FAILURE,
  error,
});

export const signIn = credentials => (
  (dispatch) => {
    dispatch(signInRequest());
    return axiosClient.post('user/login', credentials)
      .then((response) => {
        dispatch(signInSuccess(response.data));
        const auth = {
          SecurityPrincipal: {
            user: response.data,
          },
          SecurityContext: { isLoggedIn: true },
        };
        sessionStorage.setItem('auth', JSON.stringify(auth));
        dispatch(push('/Profile'));
      })
      .catch(error => dispatch(signInFailure(error)));
  }
);

export const signOut = () => (
  (dispatch) => {
    dispatch(signOutRequest());
    return axiosClient.get('user/logout')
      .then(() => {
        dispatch(signOutSuccess());
        sessionStorage.removeItem('auth');
      })
      .catch(error => dispatch(signOutFailure(error)));
  }
);

export const signUp = user => (
  (dispatch) => {
    dispatch(signUpRequest());
    return axiosClient.post('user', user)
      .then(() => {
        dispatch(signUpSuccess());
      })
      .catch(() => dispatch(signUpFailure()));
  }
);

export const getSession = () => (
  (dispatch) => {
    dispatch(getSessionRequest());
    return axiosClient.get('user/session')
      .then((response) => {
        dispatch(getSessionSuccess(response.data.payload));
      })
      .catch(error => dispatch(getSessionFailure(error)));
  }
);
