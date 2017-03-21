import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILURE } from '../constants/userConstants';

const initialState = {
  isFetching: false,
  fetched: false,
  user: {},
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetched: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        isFetching: false,
        fetched: true,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.error,
        isFetching: false,
        fetched: false,
      };
    default:
      return state;
  }
}

