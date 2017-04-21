import React from 'react';
import UserShape from '../shapes/userShape';

const UserInfo = (props) => {
  let avatar = null;
  if (props.user.avatarUrl) {
    avatar = (
      <div>
        <div className="user_avatar_block">
          <img className="user_avatar" src={props.user.avatarUrl} alt="avatar"/>
          <div className="upload_button">
            <img className="upload_icon" src="./img/upload.png" alt="upload"/>
          </div>
        </div>
      </div>
    );
  } else {
    avatar = (
      <div>
        <p className="no_avatar">No avatar</p>
      </div>
    );
  }
  return (
    <div className="user_profile">
      {avatar}
      <div className="user_name user_text">{`${props.user.firstName} ${props.user.lastName}`}</div>
      <div className="user_email user_text">{props.user.email}</div>
      <div className="user_withus user_text">5 days with us.</div>
    </div>
  );
}

UserInfo.propTypes = {
  user: React.PropTypes.shape(UserShape),
};

export default UserInfo;
