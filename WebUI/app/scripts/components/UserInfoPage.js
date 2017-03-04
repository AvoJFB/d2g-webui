import React from 'react';
import UserInfo from './UserInfo';
import UserShape from '../shapes/UserShape';

const UserInfoPage = props => (
  <div>
    <h1>This is user info page.</h1>
    <UserInfo user={props.user} />
  </div>
);

UserInfoPage.propTypes = {
  user: React.PropTypes.shape(UserShape),
};

export default UserInfoPage;
