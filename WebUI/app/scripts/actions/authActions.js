/* eslint-disable indent */
import axios from 'axios';
import { browserHistory } from 'react-router';
import { SIGN_IN_REQUEST,
    SIGN_IN_SUCCESS,
    SIGN_IN_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE,
    SIGN_OUT_REQUEST,
    SIGN_OUT_SUCCESS,
    SIGN_OUT_FAILURE,
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

export const signOutFailure = () => ({
    type: SIGN_OUT_FAILURE,
});

export const signOut = () => (
    (dispatch) => {
        dispatch(signOutRequest());
        return axios.get(`${process.env.API_URL}/user/logout`, { withCredentials: true })
            .then(() => {
                dispatch(signOutSuccess());
                browserHistory.push('/');
            })
            .catch(error => dispatch(signOutFailure(error)));
    }
);

export const signIn = credentials => (
  (dispatch) => {
    dispatch(signInRequest());
    return axios({
        method: 'post',
        baseURL: process.env.API_URL,
        url: '/user/login',
        data: credentials,
        withCredentials: true,
    })
      .then((response) => {
        dispatch(signInSuccess(response.data));
        browserHistory.push('/Profile');
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
