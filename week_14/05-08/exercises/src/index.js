import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import ReduxThunk from 'redux-thunk';
import CounterContainer from './counter/Counter';
import counterReducer from './counter/Counter.reducer';
import GalleryContainer from './gallery/Gallery';
import galleryReducer from './gallery/Gallery.reducer';
import DragonGameContainer from './dragon/Dragon';
import dragonGameReducer from './dragon/Dragon.reducer';
import WeatherContainer from './weather/Weather';
import weatherReducer from './weather/Weather.reducer';
import { Router, Route, hashHistory, Link, IndexRoute, IndexLink } from 'react-router';
import './index.css';

const reducer = Redux.combineReducers({
  theCount: counterReducer,
  galleryInfo: galleryReducer,
  dragonGame: dragonGameReducer,
  weather: weatherReducer
});

const store = Redux.createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  Redux.applyMiddleware(ReduxThunk)
);
let homePage = ({children}) =>
  <div>
    Welcome Home!
    hello
  </div>


const AppLayout = ({children}) =>
  <div>
    <ul className="nav">
      <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
      <li><Link to="/counter" activeClassName="active">Counter</Link></li>
      <li><Link to="/gallery" activeClassName="active">Gallery</Link></li>
      <li><Link to="/dragon" activeClassName="active">Dragon</Link></li>
      <li><Link to="/weather" activeClassName="active">Weather</Link></li>
    </ul>
    <div>
      {children}
    </div>
  </div>;



// ReactDOM.render(
//   <ReactRedux.Provider store={store}>
//     <div>
//       <CounterContainer/>
//       <GalleryContainer/>
//       <DragonGameContainer/>
//       <WeatherContainer/>
//     </div>
//   </ReactRedux.Provider>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <ReactRedux.Provider store={store}>
  <Router history={hashHistory}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={homePage}/>
      <Route path="/counter" component={CounterContainer}/>
      <Route path="/gallery" component={GalleryContainer}/>
      <Route path="/dragon" component={DragonGameContainer}/>
      <Route path="/weather/:city" component={WeatherContainer}/>
      <Route path="/weather" component={WeatherContainer}/>
    </Route>
  </Router>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
