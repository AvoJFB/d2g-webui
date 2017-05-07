import React from 'react';
import UserInfo from './UserInfo';
import UserShape from '../shapes/userShape';


const UserInfoPage = props => (
  <div>
    <UserInfo user={props.user} />
  </div>
);

UserInfoPage.propTypes = {
  user: React.PropTypes.shape(UserShape),
};

export default UserInfoPage;
