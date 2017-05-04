import React from 'react';

export default class TicTacToe extends React.Component{
  render() {
    console.log('in render');
    console.log(this.props.board);
    let resetButton = null;
    if (this.props.gameOver === true){
      resetButton = <button className ='reset' onClick={() => this.props.resetGame()}>Play Again!</button>
    }


    return (
      <div>
      <div className="score_board">
        Player 1: {this.props.score[0]} / Player 2: {this.props.score[1]} <br/>
        {this.props.message}</div>
        <div className='canvas'>

          {this.props.board.map((value, idx) =>
          <button className='board' key={idx} onClick={() => this.props.theGame(idx)}>{value}</button>
        )}
          <div className='resetButton'>
            {resetButton}
          </div>
        </div>


      </div>
    );
  }
}
