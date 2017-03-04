import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from '../constants/UserConstants';

export default function users(state = [], action) {
  switch (action.type) {
    case GET_USER_LIST_SUCCESS:
      return action.users;
    case GET_USER_LIST_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
