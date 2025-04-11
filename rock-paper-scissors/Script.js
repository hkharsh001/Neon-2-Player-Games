function play(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const aiChoice = choices[Math.floor(Math.random() * 3)];

  let result = '';
  if (playerChoice === aiChoice) {
    result = "It's a tie!";
  } else if (
    (playerChoice === 'rock' && aiChoice === 'scissors') ||
    (playerChoice === 'paper' && aiChoice === 'rock') ||
    (playerChoice === 'scissors' && aiChoice === 'paper')
  ) {
    result = "Player 1 wins!";
  } else {
    result = "Player 2 wins!";
  }

  document.getElementById('result').textContent = 
    `P1: ${playerChoice} vs P2: ${aiChoice} — ${result}`;
}
