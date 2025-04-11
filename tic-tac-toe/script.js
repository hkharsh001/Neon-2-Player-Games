const board = document.getElementById('board');
const statusText = document.getElementById('status');
let cells = Array(9).fill('');
let currentPlayer = 'X';
let gameActive = true;

function renderBoard() {
  board.innerHTML = '';
  cells.forEach((cell, index) => {
    const div = document.createElement('div');
    div.className = 'cell';
    div.textContent = cell;
    div.onclick = () => makeMove(index);
    board.appendChild(div);
  });
}

function makeMove(index) {
  if (!gameActive || cells[index]) return;
  cells[index] = currentPlayer;
  renderBoard();
  if (checkWin()) {
    statusText.textContent = `Player ${currentPlayer} Wins!`;
    gameActive = false;
  } else if (!cells.includes('')) {
    statusText.textContent = 'Draw!';
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusText.textContent = `Player ${currentPlayer}'s Turn`;
  }
}

function checkWin() {
  const wins = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];
  return wins.some(combo => 
    cells[combo[0]] && 
    cells[combo[0]] === cells[combo[1]] &&
    cells[combo[1]] === cells[combo[2]]
  );
}

function resetGame() {
  cells = Array(9).fill('');
  currentPlayer = 'X';
  gameActive = true;
  statusText.textContent = `Player ${currentPlayer}'s Turn`;
  renderBoard();
}

renderBoard();
resetGame();
