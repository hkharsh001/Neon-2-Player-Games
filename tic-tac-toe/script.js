let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
  if (gameBoard[index] === "") {
    gameBoard[index] = currentPlayer;
    document.querySelectorAll('.cell')[index].textContent = currentPlayer;
    if (checkWinner()) {
      alert(currentPlayer + " wins!");
      resetGame();
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return true;
    }
  }
  return false;
}

function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  document.querySelectorAll('.cell').forEach(cell => cell.textContent = "");
  currentPlayer = "X";
}

document.getElementById('instructions-btn').addEventListener('click', () => {
  document.getElementById('instructions-modal').style.display = "block";
});

function closeInstructions() {
  document.getElementById('instructions-modal').style.display = "none";
}
