import { connect } from 'react-redux';
import LoginPage from '../components/LoginPage';
import { signIn } from '../actions/authActions';

const mapDispatchToProps = dispatch => (
  {
    onSignIn(credentials) {
      dispatch(signIn(credentials));
    },
  }
);

export default connect(null, mapDispatchToProps)(LoginPage);
