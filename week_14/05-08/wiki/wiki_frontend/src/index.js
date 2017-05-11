import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import './index.css';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';
import LoginContainer from './wiki-page/LogIn';
import CreateAccountContainer from './wiki-page/CreateAccount';
import {WikiContainer, WikiSearchContainer} from './wiki-page/WikiPage';
import wikiReducer from './wiki-page/WikiPage.reducer';


const reducer = Redux.combineReducers({
  wikiData: wikiReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);



const HomePage = ({children}) =>
  <div>
    <div>
      hello
    </div>
  </div>


function checkUser(){
  console.log('in checkUser')
  return {content: undefined, edit: false, boxContent: undefined, doesNotExist: false, user: false};
}
class AppLayout extends React.Component {
  render(){
    if (this.props.user === false){
      var login =
      <div>
      <li><Link to="/Login">Log In</Link></li>
      <li><Link to="/CreateAccount">Create Account</Link></li>
      </div>
    } else{
      login =
      <div>
      <br/><button>Log Out</button><br/>
      </div>
    }
    return(
    <div>
      <ul className="nav">

        <li><IndexLink to="/">Home</IndexLink></li>
        <li><Link to="/page">Wiki</Link></li>
        {login}
      </ul>
      <div>
        {this.props.children}
      </div>
    </div>);
  }
}

const AppLayoutContainer = ReactRedux.connect(
  state => (
    state.wikiData
  ),

)(AppLayout);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={AppLayoutContainer}>
      <IndexRoute component={HomePage}/>
      <Route path="/LogIn" component={LoginContainer}/>
      <Route path="/CreateAccount" component={CreateAccountContainer}/>
      <Route path="/page" component={WikiSearchContainer}/>
      <Route path="/page/:title" component={WikiContainer}/>
    </Route>
  </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
