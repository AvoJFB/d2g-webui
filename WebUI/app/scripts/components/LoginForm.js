import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import Divider from 'material-ui/Divider';
import { TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';


const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Field name="email" component={TextField} floatingLabelText="Email" label="Email" type="text" />
        <br />
        <Field name="password" component={TextField} floatingLabelText="Password" label="Password" type="password" />
        <br />
        <FlatButton type="submit" label="Sign in" />
        <FlatButton label="Sign Up" />
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'login',
})(LoginForm);

