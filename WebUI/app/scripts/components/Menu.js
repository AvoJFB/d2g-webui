import React from 'react';
import { Link } from 'react-router';
import Button from 'react-bootstrap/lib/Button';
import ButtonGroup from 'react-bootstrap/lib/ButtonGroup';
import { LinkContainer } from 'react-router-bootstrap';

const Menu = () => (
  <div>
    <ButtonGroup>
      <LinkContainer to="/">
        <Button>Main</Button>
      </LinkContainer>
      <LinkContainer to="/Auth">
        <Button>Auth</Button>
      </LinkContainer>
      <LinkContainer to="/UserInfo">
        <Button>User Info</Button>
      </LinkContainer>
      <LinkContainer to="/UsersList">
        <Button>Users List</Button>
      </LinkContainer>
    </ButtonGroup>
    <hr />
  </div>
);

export default Menu;
