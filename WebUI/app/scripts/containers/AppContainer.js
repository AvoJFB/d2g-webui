import { connect } from 'react-redux';
import App from '../components/App';
import { getSession } from '../actions/authActions';

const mapStateToProps = state => ({
  expensesPage: state.expensesPage,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getSession());
  return {
    onGetSession() {
      dispatch(getSession());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
