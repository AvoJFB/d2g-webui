import { GET_EXPENSES_REQUEST, GET_EXPENSES_SUCCESS, GET_EXPENSES_FAILURE } from '../constants/expensesConstants';

const initialState = {
  isFetching: false,
  fetched: false,
  expenses: {},
};

export default function expensesPage(state = initialState, action) {
  switch (action.type) {
    case GET_EXPENSES_REQUEST:
      return {
        ...state,
        isFetching: true,
        fetched: false,
      };
    case GET_EXPENSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fetched: true,
        expenses: action.expenses,
      };
    case GET_EXPENSES_FAILURE:
      return {
        ...state,
        isFetching: false,
        fetched: false,
        error: action.error,
      };
    default:
      return state;
  }
}

