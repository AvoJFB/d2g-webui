import React, { PropTypes } from 'react';
import RegisterForm from './RegisterForm';

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.onSignUp(values);
  }

  render() {
    return (
      <RegisterForm onSubmit={this.handleSubmit} />
    );
  }
}

RegisterPage.propTypes = {
  onSignUp: React.PropTypes.func,
};

export default RegisterPage;
