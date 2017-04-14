import { connect } from 'react-redux';
import AuthPage from '../components/AuthPage';
import { signIn } from '../actions/authActions';

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => (
  {
    onSignIn() {
      dispatch(signIn());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
