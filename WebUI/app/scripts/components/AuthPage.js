import React from 'react';
import LoginForm from './LoginForm';

class AuthPage extends React.Component {
  handleSubmit = (values) => {
    console.log(JSON.stringify(values));
  };

  render() {
    return (
      <div>
        <h1>This is auth page.</h1>
        <LoginForm onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default AuthPage;
