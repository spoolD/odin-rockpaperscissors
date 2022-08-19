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
        msg = "You Lose! Scissors beats Paper";
        winner = "computer";
    }
    // Tie
    else {
        msg = "Tie, you selected identically";
        winner = 'tie';
    }
    
    return {'message': msg, 'winner': winner};

}

//function game(){
//     // play 5 rounds and keep score
//     console.log("Let\'s play 5 rounds of rock paper scissors!");
    
//     // Initialize Scores
//     let playerScore = 0;
//     let computerScore = 0;
//     let tie = 0;



//     for (let i = 0; i < 5; i++){
//         // Prompt for each round
//         let validEntry = false;

//         while (!validEntry){
//             playerSelection = (prompt("Play Rock, Paper, or Scissors")).toLowerCase();
//             if (playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors"){
//                 validEntry = true;
//             }
//             else{
//                 console.log('Invalid entry, try again')
//             }
//         }
//         let computerSelection = getComputerChoice();
//         let result = playRound(playerSelection,computerSelection);
        
//         // Add to Score Totals
//         if (result.winner === 'player'){
//             playerScore++;
//         }
//         else if (result.winner === 'computer'){
//             computerScore++;
//         }
//         else {
//             tie++;
//         }

//         // Write out round result and updated scores
//         console.log(result.message)
//         console.log(`-----SCORE-----\n Player: ${playerScore}\n Computer: ${computerScore}\n Ties: ${tie}\n---------------`);
//     }
// }

// Game Logic for single round

//game()

function updateScoreboard(winner){
    let playerScore = document.querySelector('#player-score');
    let computerScore = document.querySelector('#computer-score');

    // Add to Score Totals    
    if (winner === 'player'){
            playerScore.textContent++;
        }
    else if (winner === 'computer'){
            computerScore.textContent++;
        }
    else {}
}

function checkWinner(){
    // Get Current Scores
    let playerScore = document.querySelector('#player-score').textContent;
    let computerScore = document.querySelector('#computer-score').textContent;
    
    // Initialize Variables
    let clearBoard = false;
    let winner = '';
    
    // Check for Winner
    if (parseInt(playerScore) === 5){
        clearBoard = true;
        winner = 'Player'
    }
    else if (parseInt(computerScore) === 5){
        clearBoard = true
        winner = 'Computer'
    }

    // If winner found, declare winner and deactivate buttons
    if (clearBoard){
        document.getElementById('button-container').style.display = 'none'
        const endGame = document.createElement('div');
        endGame.textContent = `${winner} reached 5 points! They are the winner!`;
        document.body.appendChild(endGame)
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', (e)=> {
        let result = playRound(e.target.id,getComputerChoice());
        
        //Update result div
        const output = document.querySelector('#output');
        output.textContent = result.message;

        //Update scoreboard
        updateScoreboard(result.winner)

        //Check for game completion
        checkWinner()
    })
})