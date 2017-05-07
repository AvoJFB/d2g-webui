import { connect } from 'react-redux';
import UserInfoPage from '../components/UserInfoPage';
import requireAuth from '../HOC/requireAuth';

const mapStateToProps = state => ({
  user: state.auth.SecurityPrincipal.user.payload,
});

export default connect(mapStateToProps)(requireAuth(UserInfoPage));
