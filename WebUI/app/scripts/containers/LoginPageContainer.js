import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { signIn } from '../actions/authActions';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.SecurityContext.isLoggedIn,
});

const mapDispatchToProps = dispatch => (
  {
    onSignIn(credentials) {
      dispatch(signIn(credentials));
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
