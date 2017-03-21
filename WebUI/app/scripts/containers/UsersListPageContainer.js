import { connect } from 'react-redux';
import UsersListPage from '../components/UsersListPage';
import { getUsersList } from '../actions/usersListActions';

const mapStateToProps = state => ({
  usersListPage: state.usersListPage,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getUsersList());
  return {
    onGetUsersList() {
      dispatch(getUsersList());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
