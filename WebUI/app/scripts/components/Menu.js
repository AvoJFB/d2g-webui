import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const menuItems = (
  <div>
    <Link to="/" ><FlatButton label="Home" /></Link>
    <Link to="/Auth" ><FlatButton label="Auth" /></Link>
    <Link to="/Expenses" ><FlatButton label="Expenses" /></Link>
    <Link to="/UserInfo" ><FlatButton label="User" /></Link>
    <Link to="/UsersList" ><FlatButton label="Users" /></Link>
  </div>
);

const Menu = () => (
  <AppBar title="D2G" iconElementRight={menuItems} />
);

export default Menu;
