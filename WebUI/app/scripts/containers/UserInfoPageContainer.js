import { connect } from 'react-redux';
import UserInfoPage from '../components/UserInfoPage';
import { getUser } from '../actions/userActions';

const mapStateToProps = state => ({
  userInfoPage: state.userInfoPage,
});

const mapDispatchToProps = (dispatch) => {
  dispatch(getUser());
  return {
    onGetUser() {
      dispatch(getUser());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfoPage);
