import axiosClient from '../utils/axiosClient';
import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from '../constants/userConstants';

export const getUsersListRequest = () => ({
  type: GET_USER_LIST_REQUEST,
});

export const getUsersListSuccess = users => ({
  type: GET_USER_LIST_SUCCESS,
  users,
});

export const getUsersListFailure = error => ({
  type: GET_USER_LIST_FAILURE,
  error,
});

export const getUsersList = () => (
  (dispatch) => {
    dispatch(getUsersListRequest());
    return axiosClient.get(`${process.env.API_URL}/user`)
      .then(response => dispatch(getUsersListSuccess(response.data.payload.usersList)))
      .catch(error => dispatch(getUsersListFailure(error)));
  }
);
