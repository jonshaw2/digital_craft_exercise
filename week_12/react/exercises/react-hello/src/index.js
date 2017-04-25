import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class TicTacToe extends React.Component {
  constructor(){
    super()
    this.state = {
      currentPlayer : 'O',
      boardState : ['','','',
                    '','','',
                    '','',''],
      piecesPlayed: 0,
      player1Score: 0,
      player2Score: 0
    }

  }

  play(key){
    let tempBoard = this.state.boardState;

    if (tempBoard[key] === ''){
      tempBoard[key]=this.state.currentPlayer;
      this.setState({
        boardState : tempBoard
      });

      if (this.state.currentPlayer === 'O'){
        this.setState({
          currentPlayer:'X',
          piecesPlayed: this.state.piecesPlayed + 1
        });
      } else {
        this.setState({
          currentPlayer:'O',
          piecesPlayed: this.state.piecesPlayed + 1
        });
      }
    }
    this.checkWinCondition();
      console.log('test');

  }

  checkWinCondition(){
    let tempBoard = this.state.boardState;

    if (tempBoard[0]=== tempBoard[1] && tempBoard[1] === tempBoard[2] && tempBoard[0]!==''){
      this.gameOver();
    }
    if (tempBoard[3] === tempBoard[4] && tempBoard[4] === tempBoard[5] && tempBoard[3]!==''){
      this.gameOver();
    }
    if (tempBoard[6] === tempBoard[7] && tempBoard[7] === tempBoard[8] && tempBoard[6]!==''){
      this.gameOver();
    }

    if (tempBoard[0]=== tempBoard[3] && tempBoard[3] === tempBoard[6] && tempBoard[0]!==''){
      this.gameOver();
    }
    if (tempBoard[1] === tempBoard[4] && tempBoard[4] === tempBoard[7] && tempBoard[1]!==''){
      this.gameOver();
    }
    if (tempBoard[2] === tempBoard[5] && tempBoard[5] === tempBoard[8] && tempBoard[2]!==''){
      this.gameOver();
    }

    if (tempBoard[0] === tempBoard[4] && tempBoard[4] === tempBoard[8] && tempBoard[0]!==''){
      this.gameOver();
    }

    if (tempBoard[2] === tempBoard[4] && tempBoard[4] === tempBoard[6] && tempBoard[2]!==''){
      this.gameOver();
    }
    console.log(this.state.piecesPlayed);
    if (this.state.piecesPlayed === 8){
      console.log('draw');
      this.gameOver();
    }
  }

  gameOver(){
    console.log('vver');
  }





  CreateButton(input, index){
    return(<button key={index}className="board" onClick={() => this.play(index)}>{input}</button>);
  }

  render(){
    let board = this.state.boardState.map((item, index) =>
      this.CreateButton(item, index));



    return (
      <div>
        <div className="title">
          Current Player: {this.state.currentPlayer}
        </div>
        <div className="canvas">
          {board}


        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <div>
  <TicTacToe/></div>,
  document.getElementById('root')
);
