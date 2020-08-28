const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";


function startMatch(){
    playerScore = 0;
    computerScore = 0;
    resetDisplay();
    refreshScore(0);
}


function startGame(playerChoice){
    playerSelection = playerChoice.toUpperCase();
    let display = document.getElementById("player-selection");
    display.innerHTML = "You chose:  " + playerSelection;
    computerSelection = computerPlay();
    result = getWinner(playerSelection, computerSelection);
    displayResult(result);
    refreshScore(result);
}


function resetDisplay(){
    let displays = document.getElementsByClassName("display");
    for (let i = 0; i < displays.length; i++){
        displays[i].innerHTML = "";
    }
}
function refreshScore(resultIn){
    if (resultIn === 1){
        playerScore += 1;
    }else if (resultIn === -1){
        computerScore +=1 ;
    }
    let board = document.getElementById("scoreboard");
    if (playerScore > computerScore){
        board.style.color = "green";
    } else if (playerScore === computerScore){
        board.style.color = "black";
    } else{
        board.style.color = "red";
    }
    board.innerHTML = playerScore + " - " + computerScore;
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
    let resultsBox = document.getElementById("result");
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