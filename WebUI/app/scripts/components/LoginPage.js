import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.onSignIn(values);
  }

  render() {
    return (
      <div>
        <p className="sign_in">Please sign in to continue.</p>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  onSignIn: React.PropTypes.func,
};

export default LoginPage;
