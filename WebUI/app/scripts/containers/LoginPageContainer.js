import { connect } from 'react-redux';
import AuthPage from '../components/LoginPage';
import { signIn } from '../actions/authActions';

const mapDispatchToProps = dispatch => (
  {
    onSignIn() {
      dispatch(signIn());
    },
  }
);

export default connect(null, mapDispatchToProps)(AuthPage);
