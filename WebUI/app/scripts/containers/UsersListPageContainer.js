import { connect } from 'react-redux';
import UsersListPage from '../components/UsersListPage';
import { getUsersListRequest } from '../actions/UsersListActions';

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getUsersListRequest());
  return {
    onGetUsersList() {
      dispatch(getUsersListRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersListPage);
