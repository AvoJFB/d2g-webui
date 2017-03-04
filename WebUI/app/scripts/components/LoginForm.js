import React, { PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <Field name="email" component="input" type="text" />
        <br />
        <label htmlFor="password">Password:</label>
        <Field name="password" component="input" type="password" />
        <br />
        <button type="submit" >Login</button>
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

