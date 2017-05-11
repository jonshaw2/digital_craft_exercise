import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';

cost reducer = Redux.combineReducers({

});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

cost homePage = ({children}) =>
  <div>
    <div>
      hello
    </div>
    <div>
      {children}
    </div>
  </div>

ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={homePage}>
      <IndexRoute component={homePage}/>
    </Route>
  </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
