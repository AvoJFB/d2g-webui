import { connect } from 'react-redux';
import UserInfoPage from '../components/UserInfoPage';

const mapStateToProps = state => ({
  user: state.auth.SecurityPrincipal.user,
});

export default connect(mapStateToProps)(UserInfoPage);
