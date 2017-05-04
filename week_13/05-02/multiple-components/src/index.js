import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import Switch from './Switch';
import switchReducer from './Switch.reducer';
import Counter from './Counter';
import counterReducer from './Counter.reducer';
import * as ReactRedux from 'react-redux';

const INITIAL_STATE = {
  on: false,
  count: 0
};

function reducer(state = INITIAL_STATE, action) {
  return {
    on: switchReducer(state.on, action),
    count: counterReducer(state.count, action)
  }
}
// or fancy way
// const reducer = combineReducers({
//   on: switchReducer,
//   count: counterReducer
// });

const store = Redux.createStore(reducer);

const SwitchContainer = ReactRedux.connect(
  state => ({ on: state.on }),
  dispatch => ({
    toggle: () => dispatch({
      type: 'toggle'
    })
  })
)(Switch);

const CounterContainer = ReactRedux.connect(
  state => ({ count: state.count }),
  dispatch => ({
    add: () => dispatch({
      type: 'add'
    }),
    subtract: () => dispatch({
      type: 'subtract'
    })
  })
)(Counter);

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>
      <SwitchContainer/>
      <CounterContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
