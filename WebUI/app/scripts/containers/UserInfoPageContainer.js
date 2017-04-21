import { connect } from 'react-redux';
import UserInfoPage from '../components/UserInfoPage';

const mapStateToProps = state => ({
  user: state.auth.SecurityPrincipal.user.payload,
});

export default connect(mapStateToProps)(UserInfoPage);
