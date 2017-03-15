
function fire(row, col) {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];

  function checkCondition(){

    if (board[row][col] === 'o') {
      board[row][col] = 'x';
      return 'Hit!';
    } else {
      return 'Miss';
    }
  }

  return checkCondition();
}


console.log(fire(0, 1));
console.log(fire(0, 0));
