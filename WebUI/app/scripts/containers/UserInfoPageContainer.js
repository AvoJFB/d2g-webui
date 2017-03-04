import { connect } from 'react-redux';
import UserInfoPage from '../components/UserInfoPage';
import { getUserRequest } from '../actions/UserActions';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getUserRequest());
  return {
    onGetUser() {
      dispatch(getUserRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoPage);
