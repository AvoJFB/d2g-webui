import axios from 'axios';
import { GET_EXPENSES_REQUEST, GET_EXPENSES_FAILURE, GET_EXPENSES_SUCCESS } from '../constants/expensesConstants';

export const getExpensesRequest = () => ({
  type: GET_EXPENSES_REQUEST,
});

export const getExpensesSuccess = expenses => ({
  type: GET_EXPENSES_SUCCESS,
  expenses,
});

export const getExpensesFailure = error => ({
  type: GET_EXPENSES_FAILURE,
  error,
});

export const getExpenses = () => (
  (dispatch) => {
    dispatch(getExpensesRequest());
    return axios.get('./expenses.json')
      .then(response => dispatch(getExpensesSuccess(response.data)))
      .catch(error => dispatch(getExpensesFailure(error)));
  }
);

