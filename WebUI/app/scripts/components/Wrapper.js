import React, { propTypes } from 'react';

const Wrapper = props => (
  <div className="container">
    {props.children}
  </div>
);

Wrapper.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default Wrapper;
