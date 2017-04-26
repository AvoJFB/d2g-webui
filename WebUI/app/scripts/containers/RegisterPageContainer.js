import { connect } from 'react-redux';
import { reset } from 'redux-form';
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
    handleReset(form) {
      dispatch(reset(form));
    },
  }
);

export default connect(null, mapDispatchToProps)(RegisterPage);
