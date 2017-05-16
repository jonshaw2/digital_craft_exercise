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
import createaccountReducer from './CreateAccount/CreateAccount.reducer';
import LoginContainer from './Login/Login';
import loginReducer from './Login/Login.reducer';
import { persistStore, autoRehydrate } from 'redux-persist';
import CookieStorage from 'redux-persist-cookie-storage';
import * as loginActions from './Login/Login.actions';
import shoppingCartContainer from './shoppingCart/shoppingCart';
import shoppingCartReducer from './shoppingCart/shoppingCart.reducer';

const reducer = Redux.combineReducers({
  galleryIndex: galleryReducer,
  product:productReducer,
  createUser: createaccountReducer,
  loginUser: loginReducer,
  shoppingCart: shoppingCartReducer


});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.compose(
    autoRehydrate(),
    Redux.applyMiddleware(ReduxThunk)
  )
);

persistStore(store, { storage: new CookieStorage({
    expiration: {
      'default': 365 * 86400 // Cookies expire after one year
    }
  })
})


class AppLayout extends React.Component {
  render(){
    console.log('props',this.props)
    let accountInfo

    if (this.props.state.loginUser.currentToken === ''){
      accountInfo = <div><li><Link to="/CreateAccount" activeClassName="active">Sign Up</Link></li>
      <li><Link to="/LogIn" activeClassName="active">Log In</Link></li></div>

    } else{
      console.log('login user:',this.props.state.loginUser);
      accountInfo = <div>Welcome {this.props.state.loginUser.username}<br/>
      <button onClick={this.props.logout}>Log Out </button>
      </div>
    }

    return(
      <div>
      We Selling Stuff Now?

        <ul className="nav">
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
          <li><Link to="/ShoppingCart">Shopping Cart</Link></li>
          {accountInfo}
        </ul>

        <div>
          {this.props.children}
        </div>
      </div>

    );
  }
}



const AppLayoutContainer = ReactRedux.connect(
  state => ({state}),
  loginActions
)(AppLayout)

// function loginReducer(state, action){
//   if (action.type ==='logout'){
//     return Object.assign({}, state, {
//
//     })
//   }
// }


let HomePage = ({children}) =>
  <div>
    Just a simple store?

    <div>
    {children}
    </div>
  </div>

// const AppLayout = ({children}) =>
//   <div>
//   We Selling Stuff Now?
//
//     <ul className="nav">
//       <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
//       <li><Link to="/CreateAccount" activeClassName="active">Sign Up</Link></li>
//       <li><Link to="/LogIn" activeClassName="active">Log In</Link></li>
//     </ul>
//
//     <div>
//       {children}
//     </div>
//   </div>;

ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={AppLayoutContainer}>
      <Route component={HomePage}>
        <IndexRoute component={GalleryContainer}/>
      </Route>
      <Route path="/products/:id" component={ProductContainer}/>
      <Route path="/LogIn" component={LoginContainer}/>
      <Route path="/CreateAccount" component={CreateAccountContainer}/>
      <Route path="/ShoppingCart" component={shoppingCartContainer}/>
    </Route>
  </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
