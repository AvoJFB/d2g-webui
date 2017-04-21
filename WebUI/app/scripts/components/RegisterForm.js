import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router';
import { TextField } from 'redux-form-material-ui';
import FlatButton from 'material-ui/FlatButton';
import validate from '../validate';


const RegisterForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component={TextField} floatingLabelText="First Name" label="First Name" type="text" />
      <br />
      <Field name="lastName" component={TextField} floatingLabelText="Last Name" label="Last Name" type="text" />
      <br />
      <Field name="email" component={TextField} floatingLabelText="Email" label="Email" type="text" />
      <br />
      <Field name="password" component={TextField} floatingLabelText="Password" label="Password" type="password" />
      <br />
      <Field name="passwordConfirm" component={TextField} floatingLabelText="Confirm Password" label="Confirm Password" type="password" />
      <br />
      <Link to="/"><FlatButton label="Cancel" /></Link>
      <FlatButton type="submit" label="Submit" />
    </form>
  );
};

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default reduxForm({
  form: 'register',
  validate,
})(RegisterForm);

