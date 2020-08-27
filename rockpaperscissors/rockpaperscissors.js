const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";


function startMatch(){
    playerScore = 0;
    computerScore = 0;
    refreshScore(0);
}


function startGame(playerChoice){
    playerSelection = playerChoice;
    computerSelection = computerPlay();
    result = getWinner(playerSelection, computerSelection);
    displayResult(result);
    refreshScore(result);
}

function refreshScore(resultIn){
    if (resultIn === 1){
        playerScore += 1;
    }else if (resultIn === -1){
        computerScore +=1 ;
    }
    let board = document.getElementById("scoreboard");
    board.innerHTML = playerScore + " - " + computerScore;
}

function playerPlay(selected){
    playerSelection = selected.toUpperCase();
    return;
}

function computerPlay(){
    let choice = choices[Math.floor(Math.random() * choices.length)];
    let display = document.getElementById("computer-selection");
    display.innerHTML = "Computer chose:  "  + choice;
    return choice;
}

function getWinner(playerSelection, computerSelection){
    switch (playerSelection.toUpperCase()) {
        case "ROCK":
            if (computerSelection === "ROCK"){
                return 0;
            }else if (computerSelection === "PAPER"){
                return -1;
            }else if (computerSelection === 'SCISSORS'){
                return 1;
            }
            break;
        case "PAPER":
            if (computerSelection === "ROCK"){
                return 1;
            }else if (computerSelection === "PAPER"){
                return 0;
            }else if (computerSelection === 'SCISSORS'){
                return -1;
            }
            break;
        case "SCISSORS":
            if (computerSelection === "ROCK"){
                return -1;
            }else if (computerSelection === "PAPER"){
                return 1;
            }else if (computerSelection === 'SCISSORS'){
                return 0;
            }
            break;
    }
}

function displayResult(result){
    let resultsBox = document.getElementById("display");
    let message = result;
    switch (result){
        case 1:
            message = "You win";
            break;
        case 0:
            message = "It's a tie";
            break;
        case -1:
            message = "You lose";
            break;
    }
    resultsBox.innerHTML = message;
}