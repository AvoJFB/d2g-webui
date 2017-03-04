import React from 'react';
import UserShape from '../shapes/userShape';

const UserInfo = props => (
  <div>
    <img width="200" src={props.user.avatarUrl} alt="avatar" />
    <p>{`First name: ${props.user.firstName}`}</p>
    <p>{`Last name: ${props.user.lastName}`}</p>
    <p>{`Email: ${props.user.email}`}</p>
  </div>
);

UserInfo.propTypes = {
  user: React.PropTypes.shape(UserShape),
};

export default UserInfo;
