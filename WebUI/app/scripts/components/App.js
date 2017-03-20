import React, { propTypes } from 'react';
import Menu from './Menu';


const App = props => (
  <div>
    <Menu />
    <div className="container">
      {props.children}
    </div>
  </div>
);

App.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default App;
