let computerPlay = () => {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber == 1) {
    return "Rock";
  }
  if (randomNumber == 2) {
    return "Paper";
  } else {
    return "Scissior";
  }
};

let playerScore = 0;
let computerScore = 0;

let game = () => {
  for (let index = 0; index < 5; index++) {
    player = prompt("Enter Your play");
    console.log(playRound(player, computerPlay()));
  }
};

let playRound = (player, computer) => {
  if (
    (player.toUpperCase() == "ROCK" && computer.toUpperCase() == "PAPER") ||
    (player.toUpperCase() == "PAPER" && computer.toUpperCase() == "SCISSIOR") ||
    (player.toUpperCase() == "SCISSIOR" && computer.toUpperCase() == "ROCK")
  ) {
    computerScore++;
    return "You lose";
    
  }
  if (
    (player.toUpperCase() == "PAPER" && computer.toUpperCase() == "ROCK") ||
    (player.toUpperCase() == "SCISSIOR" && computer.toUpperCase() == "PAPER") ||
    (player.toUpperCase() == "ROCK" && computer.toUpperCase() == "SCISSIOR")
  ) {
    playerScore++;
    return "You Win";
    
  }
  if (player.toUpperCase() === computer.toUpperCase()) {
    return "Tie";
  }
};

game();
console.log(playerScore);
