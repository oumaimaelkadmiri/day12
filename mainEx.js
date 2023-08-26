function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    // Make playerSelection case-insensitive
    playerSelection = playerSelection.toLowerCase();

    // Define possible outcomes
    const outcomes = {
        rock: { beats: "scissors", losesTo: "paper" },
        paper: { beats: "rock", losesTo: "scissors" },
        scissors: { beats: "paper", losesTo: "rock" }
    };

    // Determine the winner or tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (outcomes[playerSelection].beats === computerSelection) {
        return `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        const playerChoice = prompt(`Round ${i}: Enter your choice (Rock, Paper, or Scissors):`).toLowerCase();
        const computerChoice = getComputerChoice();

        const result = playRound(playerChoice, computerChoice);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log(`You win the game! Your score: ${playerScore}, Computer score: ${computerScore}`);
    } else if (playerScore < computerScore) {
        console.log(`You lose the game. Your score: ${playerScore}, Computer score: ${computerScore}`);
    } else {
        console.log(`It's a tie! Your score: ${playerScore}, Computer score: ${computerScore}`);
    }
}

// Call the game function to start playing
game();


