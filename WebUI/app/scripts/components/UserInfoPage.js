import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import UserInfo from './UserInfo';
import UserShape from '../shapes/userShape';


const UserInfoPage = (props) => {
  let content = null;
  if (props.userInfoPage.fetched) {
    content = (
      <div>
        <h1>This is user info page.</h1>
        <UserInfo user={props.userInfoPage.user} />
      </div>
    );
  } else {
    content = (
      <div>
        <CircularProgress />
      </div>
    );
  }
  return content;
};

UserInfoPage.propTypes = {
  userInfoPage: React.PropTypes.shape({
    user: React.PropTypes.shape(UserShape),
    isFetching: React.PropTypes.bool,
    fetched: React.PropTypes.bool,
  }),
};

export default UserInfoPage;
