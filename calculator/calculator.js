let currentTotal = "";
let currentDisplay = "";

function operate(a, b, operator){
    switch (operator){
        case "/":
            return a / b;
        case "*":
            return a * b;
        case "+":
            return a + b;
        case "-":
            return a - b;
    }   
}

function clearAll(){
    currentTotal = "";
    clearDisplay();
}

function clearDisplay(){
    currentDisplay = "";
    updateDisplay();
}

function updateDisplay(){
    let display = document.getElementById("display");
    display.innerHTML = currentDisplay;
}
function addToDisplay(digit){
    currentDisplay += digit.toString();
    updateDisplay();
}
