import React, { propTypes } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleSignOutClick() {
    this.props.onSignOut();
    browserHistory.push('/');
    console.log('Signed out!');
  }

  render() {
    let menuItems = null;
    if (this.props.isLoggedIn) {
      menuItems = (
        <div>
          <Link to="/"><FlatButton label="Home" /></Link>
          <Link to="/Expenses"><FlatButton label="Expenses" /></Link>
          <Link to="/UserInfo"><FlatButton label="User" /></Link>
          <Link to="/UsersList"><FlatButton label="Users" /></Link>
          <FlatButton onClick={this.handleSignOutClick} label="Sign Out" />
        </div>
      );
    } else {
      menuItems = (
        <div>
          <Link to="/"><FlatButton label="Home" /></Link>
          <Link to="/Auth"><FlatButton label="Sign In" /></Link>
        </div>
      );
    }
    return (
      <AppBar title="D2G" iconElementRight={menuItems} />
    );
  }
}

Menu.propTypes = {
  isLoggedIn: React.PropTypes.bool,
  onSignOut: React.PropTypes.func,
};

export default Menu;
