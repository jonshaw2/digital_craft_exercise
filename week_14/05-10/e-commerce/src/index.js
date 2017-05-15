import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';
import './index.css';
import GalleryContainer from './Gallery/Gallery';
import galleryReducer from './Gallery/Gallery.reducer';
import ProductContainer from './Product/Product';
import productReducer from './Product/Product.reducer';
import CreateAccountContainer from './CreateAccount/CreateAccount';
import createaccountReducer from './CreateAccount/CreateAccount.reducer'
import LoginContainer from './Login/Login';
import loginReducer from './Login/Login.reducer'

const reducer = Redux.combineReducers({
  galleryIndex: galleryReducer,
  product:productReducer,
  createUser: createaccountReducer,
  loginUser: loginReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);

let HomePage = ({children}) =>
  <div>
    Just a simple store?

    <div>
    {children}
    </div>
  </div>

const AppLayout = ({children}) =>
  <div>
  We Selling Stuff Now?

    <ul className="nav">
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/CreateAccount" activeClassName="active">Sign Up</Link></li>
      <li><Link to="/LogIn" activeClassName="active">Log In</Link></li>
    </ul>

    <div>
      {children}
    </div>
  </div>;

ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <Route component={HomePage}>
        <IndexRoute component={GalleryContainer}/>
      </Route>
      <Route path="/products/:id" component={ProductContainer}/>
      <Route path="/LogIn" component={LoginContainer}/>
      <Route path="/CreateAccount" component={CreateAccountContainer}/>
    </Route>
  </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
