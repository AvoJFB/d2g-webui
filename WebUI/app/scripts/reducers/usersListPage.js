import { GET_USER_LIST_REQUEST, GET_USER_LIST_SUCCESS, GET_USER_LIST_FAILURE } from '../constants/userConstants';

const initialState = {
  isFetching: false,
  fetched: false,
  users: [],
};

export default function usersListPage(state = initialState, action) {
  switch (action.type) {
    case GET_USER_LIST_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetched: false,
      };
    case GET_USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.users,
        isFetching: false,
        fetched: true,
      };
    case GET_USER_LIST_FAILURE:
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
