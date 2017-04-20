const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'First name is required.';
  }
  if (!values.lastName) {
    errors.lastName = 'Last name is required';
  }
  if (!values.email) {
    errors.email = 'Email address is required.';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address.';
  }
  if (values.passwordConfirm !== values.password) {
    errors.password = "Passwords doesn't match.";
  }
  return errors;
};

export default validate;
