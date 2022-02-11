document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display-box");
  const scoreBoard = document.querySelector(".score");
  const yourMove = document.querySelector(".your-move");
  const computerMove = document.querySelector(".computer-move");

  const rockButton = document.querySelector(".rock");
  const paperButton = document.querySelector(".paper");
  const scissorButton = document.querySelector(".scissors");

  const rock = 0;
  const paper = 1;
  const scissors = 2;

  // const choices = ["rock", "paper", "scissors"];
  const choices = ["✊", "✋", "✌️"];

  let yourScore = 0;
  let computerScore = 0;

  scoreBoard.innerHTML = `You: ${yourScore} - Computer: ${computerScore}`;

  function play(choice) {
    const computerChoice = Math.floor(Math.random() * choices.length);
    // const computerChoice = choices[randomNumber];
    if (
      (choice === rock && computerChoice === scissors) ||
      (choice === paper && computerChoice === rock) ||
      (choice === scissors && computerChoice === paper)
    ) {
      display.innerHTML = "You won!";
      display.className = "green";
      yourScore++;
    } else if (
      (choice === rock && computerChoice === paper) ||
      (choice === paper && computerChoice === scissors) ||
      (choice === scissors && computerChoice === rock)
    ) {
      display.innerHTML = "You lost!";
      display.className = "red";
      computerScore++;
    } else {
      display.innerHTML = "Draw!";
      display.className = "gray";
    }
    yourMove.innerHTML = choices[choice];
    computerMove.innerHTML = choices[computerChoice];
    scoreBoard.innerHTML = `You: ${yourScore} - Computer: ${computerScore}`;

    // result.innerHTML = `You chose ${choices[choice]} & Computer chose ${choices[computerChoice]}`;
  }

  rockButton.addEventListener("click", function () {
    play(rock);
  });
  paperButton.addEventListener("click", function () {
    play(paper);
  });
  scissorButton.addEventListener("click", function () {
    play(scissors);
  });
});
