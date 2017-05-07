import React, { Component, propTypes } from 'react';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';

export default function (InnerComponent) {
  class requireAuth extends Component {
    componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.dispatch(replace('/'));
      }
    }

    componentWillReceiveProps(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.dispatch(replace('/'));
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.dispatch(replace('/'));
      }
    }

    render() {
      let content = null;
      if (this.props.isLoggedIn) {
        content = <InnerComponent {...this.props} />;
      }
      return content;
    }
  }

  requireAuth.propTypes = {
    isLoggedIn: React.PropTypes.bool,
    dispatch: React.PropTypes.func,
  };

  const mapStateToProps = state => ({
    isLoggedIn: state.auth.SecurityContext.isLoggedIn,
  });

  const mapDispatchToProps = dispatch => ({
    dispatch,
  });

  return connect(mapStateToProps, mapDispatchToProps)(requireAuth);
}
