import React, { PropTypes } from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';
import UserInfo from '../components/UserInfo';
import UserShape from '../shapes/userShape';


const UsersListPage = (props) => {
  let content = null;
  if (props.users.fetched) {
    content = (
      <Table>
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
        <TableBody>
          {props.users.payload.map(user => (
            <TableRow>
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
  users: React.PropTypes.shape({
    payload: React.PropTypes.arrayOf(React.PropTypes.shape(UserShape)),
    isFetching: React.PropTypes.bool,
    fetched: React.PropTypes.bool,
  }),
};


export default UsersListPage;
