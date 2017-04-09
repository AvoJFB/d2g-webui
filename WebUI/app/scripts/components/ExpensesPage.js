import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import UserShape from '../shapes/userShape';
import ItemShape from '../shapes/itemShape';
import ExpensesTable from './ExpensesTable';


const ExpensesPage = (props) => {
  let content = null;
  if (props.expensesPage.fetched) {
    content = (
      <div>
        <h1>This is expenses page.</h1>
        <ExpensesTable expenses={props.expensesPage.expenses} />
      </div>
    );
  } else {
    content = (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return content;
};

ExpensesPage.propTypes = {
  expensesPage: React.PropTypes.shape({
    isFetching: React.PropTypes.bool,
    fetched: React.PropTypes.bool,
    expenses: React.PropTypes.shape({
      owner: React.PropTypes.shape(UserShape),
      periodStart: React.PropTypes.string,
      periodEnd: React.PropTypes.string,
      totalIncome: React.PropTypes.number,
      totalExpense: React.PropTypes.number,
      lineItems: React.PropTypes.arrayOf(React.PropTypes.shape(ItemShape)),
    }),
  }),
};

export default ExpensesPage;
