import { connect } from 'react-redux';
import Menu from '../components/Menu';
import { signOut } from '../actions/authActions';

const mapStateToProps = state => ({
  isLoggedIn: state.auth.SecurityContext.isLoggedIn,
});

const mapDispatchToProps = dispatch => (
  {
    onSignOut() {
      dispatch(signOut());
    },
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
