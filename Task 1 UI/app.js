  // Set up variables
  let playerScore = 0;
  let computerScore = 0;
  const buttons = document.querySelectorAll('button');
  const scoreDiv = document.querySelector('#score');
  const winnerDiv = document.querySelector('#winner');

  // Add event listeners to the buttons
  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          const playerSelection = button.id;
          const computerSelection = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];
          playRound(playerSelection, computerSelection);
          updateScore();
      });
  });

  // Update the score and check for a winner
  function updateScore() {
      scoreDiv.textContent = `Score: Human ${playerScore}-${computerScore} Computer`;
      if (playerScore === 5) {
          winnerDiv.textContent = "Player wins!";
          disableButtons();
      } else if (computerScore === 5) {
          winnerDiv.textContent = "Computer wins!";
          disableButtons();
      }
  }

  // Play a round of the game
  function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
          return;
      } else if (
          (playerSelection === 'rock' && computerSelection === 'scissors') ||
          (playerSelection === 'paper' && computerSelection === 'rock') ||
          (playerSelection === 'scissors' && computerSelection === 'paper')
      ) {
          playerScore++;
          return;
      } else {
          computerScore++;
          return;
      }
  }

  // Disable the buttons when the game is over
  function disableButtons() {
      for (let i = 0; i < buttons.length; i++) {
          buttons[i].disabled = true;
      }
  }