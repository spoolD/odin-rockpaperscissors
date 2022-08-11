function getComputerChoice() {
    // Create array of Rock, Paper, Scissors
    const choices = ["rock", "paper", "scissors"];
    // Randomly index one of these
    computerSelection = choices[Math.floor(Math.random()*3)];
    return computerSelection;
}

function playRound (playerSelection, computerSelection){
    let msg;
    let winner;
    // Paper beats Rock player wins
    if (playerSelection === "paper" && computerSelection === "rock"){
        msg = "You Win! Paper beats Rock";
        winner = "player";
    }
    // Paper beats Rock computer wins
    else if (playerSelection === "rock" && computerSelection === "paper"){
        msg = "You Lose! Paper beats Rock";
        winner = "computer";
    }
    // Rock beats Scissors player wins
    else if (playerSelection === "rock" && computerSelection === "scissors"){
        msg = "You Win! Rock beats Scissors";
        winner = "player";
    }
    // Rock beats Scissors computer wins
    else if (playerSelection === "scissors" && computerSelection === "rock"){
        msg = "You Lose! Rock beats Scissors";
        winner = "computer";
    }
    // Scissors beats Paper player wins
    else if (playerSelection === "scissors" && computerSelection === "paper"){
        msg = "You Win! Scissors beats Paper"
        winner = "player";
    }
    // Scissors beats Paper computer wins
    else if (playerSelection === "paper" && computerSelection === "scissors"){
        msg = "You Lose! Paper beats Rock";
        winner = "computer";
    }
    // Tie
    else {
        msg = "Tie, you selected identically";
        winner = 'tie';
    }
    console.log(msg)
    return {'message': msg, 'winner': winner}

}

function game(){
    // play 5 rounds and keep score

    for (let i = 0; i < 5; i++){
        
    }
}

const playerSelection= 'rock';
const computer=getComputerChoice();
playRound(playerSelection,computer);
