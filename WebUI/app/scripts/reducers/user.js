import { GET_USER_SUCCESS, GET_USER_FAILURE } from '../constants/userConstants';

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return action.user;
    case GET_USER_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}

