import React, { PropTypes } from 'react';
import LoginForm from './LoginForm';

class AuthPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.onSignIn();
  }

  render() {
    return (
      <div>
        <h1>This is sign in page.</h1>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

AuthPage.propTypes = {
  onSignIn: React.PropTypes.func,
};

export default AuthPage;
