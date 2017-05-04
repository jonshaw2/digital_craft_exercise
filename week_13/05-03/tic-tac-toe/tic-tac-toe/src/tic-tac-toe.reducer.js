export default function reducer(state, action) {
  let newState = Object.assign({}, state);
  console.log('in the reducer');
  console.log(action.index);
  console.log(newState.board);

  var playerIndex
  var currentPlayer = newState.player;

  if (action.type === 'reset'){
    if (newState.gameOver === true){
      console.log('in zhe reset');
      console.log(newState);
      return {

          board: ['', '', '', '', '', '', '', '', ''],
          player: 'O',
          message: null,
          score: newState.score,
          gameOver: false

      }
    }
    return newState;

  }


  if (newState.board[action.index] === '' && newState.gameOver != true){

    if (state.player === 'O'){
      playerIndex = 0;
    }
    else{
      playerIndex = 1;
    }

    if (action.type === 'input') {
      console.log('in input');
      let newArray = newState.board.map((item,i) => i === action.index ? newState.player : item );
      console.log(newArray);
      newState.board = newArray;





    var board = newState.board;


    function checkWinCondition(){
      let winCondition = false;
      if (board[0] === board[3] && board[3] === board[6] && board[0] !== ''){
        winCondition = true;

      }else if (board[1] === board[4] && board[4] === board[7] && board[1] !== ''){
        winCondition = true;

      }else if (board[2] === board[5] && board[5] === board[8] && board[2] !== ''){
        winCondition = true;

      }else if (board[0] === board[1] && board[1] === board[2] && board[0] !== ''){
        winCondition = true;

      }else if (board[3] === board[4] && board[4] === board[5] && board[3] !== ''){
        winCondition = true;

      }else if (board[6] === board[7] && board[7] === board[8] && board[6] !== ''){
        winCondition = true;
      }else if (board[0] === board[4] && board[4] === board[8] && board[0] !== ''){
        winCondition = true;
      }else if (board[2] === board[4] && board[4] === board[6] && board[2] !== ''){
        winCondition = true;
      }

      if (board[0] !== '' && board[1] !== '' && board[2] !== '' && board[3] !== '' && board[4] !== '' && board[5] !== '' && board[6] !== '' && board[7] !== '' && board[8] !== '' && winCondition != true){

        newState = {
          board : newState.board,
          player: currentPlayer,
          message: 'Draw!',
          score: newState.score,
          gameOver: true,
        }

      }



      if (winCondition === true) {
        console.log('win condition met');
        let newScore = newState.score.map((item, i) => i === playerIndex ? newState.score[playerIndex] + 1: item);

        newState = {
          board : newState.board,
          player: currentPlayer,
          message: currentPlayer +  ' won',
          score: newScore,
          gameOver: true,

        }


      }



      console.log('in win condition');
    }
    checkWinCondition()


    if (newState.player === 'O'){
      currentPlayer = 'X';
    }
    else {
      currentPlayer = 'O';
    }

    newState = {
      board : newState.board,
      player: currentPlayer,
      message: newState.message,
      score: newState.score,
      gameOver: newState.gameOver
    }





  }



    return newState;
  }else{
    return newState;
  }
}
