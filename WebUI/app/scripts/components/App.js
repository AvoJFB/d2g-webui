import React, { propTypes } from 'react';
import MenuContainer from '../containers/MenuContainer';


class App extends React.Component {
  componentWillMount() {
    this.props.onGetSession();
  }

  render() {
    return (
      <div>
        <MenuContainer />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  onGetSession: React.PropTypes.func,
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node,
  ]),
};

export default App;
