import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import UserInfo from '../components/UserInfo';
import UserShape from '../shapes/userShape';


const UsersListPage = (props) => {
  let content = null;
  if (props.usersListPage.fetched) {
    content = (
      <Table multiSelectable>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn colSpan="3" style={{ textAlign: 'center' }}>
              Users List
            </TableHeaderColumn>
          </TableRow>
          <TableRow>
            <TableHeaderColumn>First name</TableHeaderColumn>
            <TableHeaderColumn>Last name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover>
          {props.usersListPage.users.map(user => (
            <TableRow key={user.id}>
              <TableRowColumn>{user.firstName}</TableRowColumn>
              <TableRowColumn>{user.lastName}</TableRowColumn>
              <TableRowColumn>{user.email}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
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

UsersListPage.propTypes = {
  usersListPage: React.PropTypes.shape({
    isFetching: React.PropTypes.bool,
    fetched: React.PropTypes.bool,
    users: React.PropTypes.arrayOf(React.PropTypes.shape(UserShape)),
  }),
};


export default UsersListPage;
