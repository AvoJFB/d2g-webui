import React, { propTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.handleSignOutClick = this.handleSignOutClick.bind(this);
  }

  handleSignOutClick() {
    this.props.onSignOut();
  }

  render() {
    let menuItems = null;
    if (this.props.isLoggedIn) {
      menuItems = (
        <div>
          <Link to="/Expenses"><FlatButton label="Expenses" /></Link>
          <Link to="/Profile"><FlatButton label="Profile" /></Link>
          <Link to="/UsersList"><FlatButton label="Users" /></Link>
          <FlatButton onClick={this.handleSignOutClick} label="Sign Out" />
        </div>
      );
    } else {
      menuItems = null;
    }
    return (
      <AppBar title="D2G" showMenuIconButton={false} iconElementRight={menuItems} />
    );
  }
}

Menu.propTypes = {
  isLoggedIn: React.PropTypes.bool,
  onSignOut: React.PropTypes.func,
};

export default Menu;
