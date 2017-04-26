import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  GET_SESSION_SUCCESS,
  GET_SESSION_FAILURE,
} from '../constants/authConstants';

const initialState = {
  SecurityContext: { isLoggedIn: false },
  SecurityPrincipal: null,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        SecurityContext: { isLoggedIn: true },
        SecurityPrincipal: { user: action.user },
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        SecurityContext: { isLoggedIn: false },
        SecurityPrincipal: null,
      };
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case GET_SESSION_SUCCESS:
      return {
        ...state,
        SecurityContext: { isLoggedIn: true },
        SecurityPrincipal: { user: action.user },
      };
    case GET_SESSION_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
