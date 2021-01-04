const body = document.body;
const app = document.createElement('div');
app.className = 'app';
body.appendChild(app);

function gameControl() {
  let xTurn = true;
  let gameInProgress = true;
  let turnCount = 0;
  let game = Array.from(Array(3), () => new Array(3).fill(null));
  gameBoard();

  function gameBoard() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const div = document.createElement('div');
        div.className = 'square';
        div.setAttribute('row', i);
        div.setAttribute('col', j);
        div.addEventListener('click', (e) => {
          selectSquare(i, j, e);
        });
        app.appendChild(div);
      }
    }
  }

  function selectSquare(row, col, e) {
    if (game[row][col] === null && gameInProgress) {
      turnCount++;
      const marker = xTurn ? 'X' : 'O';
      e.target.innerHTML = marker;
      game[row][col] = marker;
      console.log(game);
      if (solutionCheck(game)) {
        const div = document.createElement('div');
        div.className = 'announce';
        div.innerHTML = `${marker} wins!`;
        app.appendChild(div);
        gameInProgress = false;
      } else if (turnCount === 9) {
        const div = document.createElement('div');
        div.className = 'announce';
        div.innerHTML = 'Tie Game!';
        app.appendChild(div);
        gameInProgress = false;
      } else {
        xTurn = !xTurn;
      }
    }
  }

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

  function clearBoard() {
    while (app.firstChild) {
      app.firstChild.remove();
    }
    gameBoard();
    newBoard();
    xTurn = true;
    gameInProgress = true;
    turnCount = 0;
  }

  function newBoard() {
    game = Array.from(Array(3), () => new Array(3).fill(null));
  }

  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
    clearBoard();
  });
}

gameControl();
