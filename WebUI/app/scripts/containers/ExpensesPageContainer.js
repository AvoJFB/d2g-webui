import { connect } from 'react-redux';
import ExpensesPage from '../components/ExpensesPage';
import { getExpenses } from '../actions/expensesActions';

const mapStateToProps = state => ({
  expensesPage: state.expensesPage,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getExpenses());
  return {
    onGetExpenses() {
      dispatch(getExpenses());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesPage);
