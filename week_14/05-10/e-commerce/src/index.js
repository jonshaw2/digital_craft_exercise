import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';
import './index.css';

const reducer = Redux.combineReducers({
  theCount: {hi: 'this'}
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

let homePage = ({children}) =>
  <div>
    Just a simple store?
  </div>

const AppLayout = ({children}) =>
  <div>
  test
    <ul className = "nav">
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
    </ul>

    <div>
      {children}
    </div>
  </div>;

ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={homePage}/>
    </Route>
  </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
