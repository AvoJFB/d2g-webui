import React, { propTypes } from 'react';
import Menu from './Menu';


const App = props => (
  <div>
    <Menu />
    {props.children}
  </div>
);

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default App;
