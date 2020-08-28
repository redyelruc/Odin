const choices = ["ROCK", "PAPER", "SCISSORS"];
let playerScore = 0;
let computerScore = 0;
let playerSelection = "";

// start a new match resetting the scoreboard to zero
function startMatch(){
    playerScore = 0;
    computerScore = 0;
    resetDisplay();
    refreshScore(0);
}

// start a game using the parameter as the player's choice
function startGame(playerChoice){
    //update display with player's choice
    playerSelection = playerChoice.toUpperCase();
    let display = document.getElementById("player-selection");
    display.innerHTML = "You chose:  " + playerSelection;
    //get random computer choice
    computerSelection = computerPlay();
    //find out who wins and refresh all of the displays
    result = getWinner(playerSelection, computerSelection);
    displayResult(result);
    refreshScore(result);
}

// get computer to make a random choice (rock, paper, or scissors)
function computerPlay(){
    let choice = choices[Math.floor(Math.random() * choices.length)];
    // update display
    let display = document.getElementById("computer-selection");
    display.innerHTML = "Computer chose:  "  + choice;
    return choice;
}


// reset all displays to blank
function resetDisplay(){
    let displays = document.getElementsByClassName("display");
    for (let i = 0; i < displays.length; i++){
        displays[i]. innerHTML = "";
    }
}

// update the score by adding the parameter resultIn
function refreshScore(resultIn){
    if (resultIn === 1){
        playerScore += 1;
    }else if (resultIn === -1){
        computerScore +=1 ;
    }
    //change color of scoreboard depending on who's winning
    let board = document.getElementById("scoreboard");
    if (playerScore > computerScore){
        board.style.color = "green";
    } else if (playerScore === computerScore){
        board.style.color = "black";
    } else{
        board.style.color = "red";
    }
    //update scoreboard
    board.innerHTML = playerScore + " - " + computerScore;
}

// logic for deciding who wins between playerSelectiona and computerSelection
function getWinner(playerSelection, computerSelection){
    switch (playerSelection.toUpperCase()) {
        case "ROCK":
            if (computerSelection === "ROCK"){
                return 0; //tie
            }else if (computerSelection === "PAPER"){
                return -1;  //lose
            }else if (computerSelection === 'SCISSORS'){
                return 1;  //win
            }
            break;
        case "PAPER":
            if (computerSelection === "ROCK"){
                return 1;  //win
            }else if (computerSelection === "PAPER"){
                return 0;  //tie
            }else if (computerSelection === 'SCISSORS'){
                return -1;  //lose
            }
            break;
        case "SCISSORS":
            if (computerSelection === "ROCK"){
                return -1;  //lose
            }else if (computerSelection === "PAPER"){
                return 1;  //win
            }else if (computerSelection === 'SCISSORS'){
                return 0;  //tie
            }
            break;
    }
}

// display result message in words
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