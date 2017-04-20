import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
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
    case SIGN_OUT:
      return {
        ...state,
        SecurityContext: { isLoggedIn: false },
        SecurityPrincipal: null,
      };
    default:
      return state;
  }
}
