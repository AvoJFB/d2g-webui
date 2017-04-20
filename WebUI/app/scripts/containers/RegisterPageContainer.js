import { connect } from 'react-redux';
import RegisterPage from '../components/RegisterPage';
import { signUp } from '../actions/authActions';

const mapDispatchToProps = dispatch => (
  {
    onSignUp(user) {
      const userDTO = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
      };
      dispatch(signUp(userDTO));
    },
  }
);

export default connect(null, mapDispatchToProps)(RegisterPage);
