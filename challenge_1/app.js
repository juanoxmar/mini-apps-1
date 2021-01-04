const root = document.getElementById('root');

function solutionCheck(board) {
  if (
    (board[0][0] !== null && board[0][0] === board[0][1] && board[0][0] === board[0][2]) ||
    (board[1][0] !== null && board[1][0] === board[1][1] && board[1][0] === board[1][2]) ||
    (board[2][0] !== null && board[2][0] === board[2][1] && board[2][0] === board[2][2]) ||
    (board[0][0] !== null && board[0][0] === board[1][0] && board[0][0] === board[2][0]) ||
    (board[0][1] !== null && board[0][1] === board[1][1] && board[0][1] === board[2][1]) ||
    (board[0][2] !== null && board[0][2] === board[1][2] && board[0][2] === board[2][2]) ||
    (board[0][0] !== null && board[0][0] === board[1][1] && board[0][0] === board[2][2]) ||
    (board[0][2] !== null && board[0][2] === board[1][1] && board[0][2] === board[2][0])
    ) {
      return true;
  } else {
    return false;
  }
}

const newBoard = () => Array.from(Array(3), () => new Array(3).fill(null));

const game = newBoard();

game[0][2] = 'X';
game[1][1] = 'X';
game[2][1] = 'X';

console.log(game);
console.log(solutionCheck(game));
