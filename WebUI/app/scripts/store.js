import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './reducers/rootReducer';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, routerMiddleware(browserHistory))));
