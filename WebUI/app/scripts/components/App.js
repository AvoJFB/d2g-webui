import React, { propTypes } from 'react';
import MenuContainer from '../containers/MenuContainer';


const App = props => (
  <div>
    <MenuContainer />
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
