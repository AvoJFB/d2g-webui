import React, { PropTypes } from 'react';
import UserInfo from '../components/UserInfo';
import UserShape from '../shapes/UserShape';


const UsersListPage = props => (
  <div>
    <h1>This is users list page.</h1>
    {props.users.map(user => <UserInfo key={user.id} user={user} />)}
  </div>
);

UsersListPage.propTypes = {
  users: React.PropTypes.arrayOf(React.PropTypes.shape(UserShape)),
};

export default UsersListPage;
