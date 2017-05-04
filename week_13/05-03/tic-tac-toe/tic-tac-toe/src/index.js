import React from 'react';
import ReactDOM from 'react-dom';
import * as Redux from 'redux';
import * as ReactRedux from 'react-redux';
import TicTacToe from './tic-tac-toe';
import tictactoeReducer from './tic-tac-toe.reducer';
import './index.css';


console.log('test');

// initial state
const INITIAL_STATE = {
  game:{
    board: ['', '', '', '', '', '', '', '', ''],
    player: 'O',
    message: null,
    score: [0,0],
    gameOver: false,

  }
};

function reducer(state = INITIAL_STATE, action){
  return {
    game: tictactoeReducer(state.game, action)
  }
}

const store = Redux.createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const TicTacToeContainer = ReactRedux.connect(
  state => ({
    board: state.game.board,
    player: state.game.player,
    message: state.game.message,
    score: state.game.score,
    gameOver: state.game.gameOver,

  }),
  dispatch => ({
    theGame: (idx) => {
      dispatch({
        index: idx,
        type: 'input'
      })
    },
    resetGame: () =>{
      dispatch({
        type: 'reset'
      })
    }
  })
)(TicTacToe);

// class TicTacToeContainer extends React.Component {
//   componentDidMount() {
//     store.subscribe(() => this.forceUpdate());
//   }
//   render()  {
//     let theGame = (idx) => store.dispatch({
//           index: idx,
//           type: 'input'
//         })
//     return (
//
//       <TicTacToe
//         board={store.getState().game.board}
//         theGame={theGame}
//       />
//     );
//   }
// }

ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <div>

      <TicTacToeContainer/>
    </div>
  </ReactRedux.Provider>,
  document.getElementById('root')
);
