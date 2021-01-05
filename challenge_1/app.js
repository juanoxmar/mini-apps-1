const body = document.body;
const app = document.createElement('div');
app.className = 'app';
body.appendChild(app);
const player1 = prompt('Player One (X) enter your name:');
const player2 = prompt('Player Two (O) enter your name:');

const p1 = document.getElementById('player1');
p1.innerHTML = `${player1} win count: `;
const p2 = document.getElementById('player2');
p2.innerHTML = `${player2} win count: `;

function gameControl() {
  let xTurn = true;
  let gameInProgress = true;
  let turnCount = 0;
  let xWins = 0;
  let oWins = 0;
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
      if (solutionCheck(game)) {
        if (marker === 'X') {
          const span = document.getElementById('xWins');
          xWins++;
          span.innerHTML = xWins;
        } else {
          const span = document.getElementById('oWins');
          oWins++;
          span.innerHTML = oWins;
        }
        const div = document.createElement('div');
        div.className = 'announce';
        div.innerHTML = `${marker} wins!`;
        app.appendChild(div);
        gameInProgress = false;
        xTurn = !xTurn;
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
