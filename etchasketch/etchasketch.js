
let paintable = false;
let eraseMode = false;
let defaultColor = "#009900";
let fillColor;


window.addEventListener("load", startup());

function startup() {
    let colorWell = document.querySelector("#color");
    colorWell.value = defaultColor;
    fillColor = defaultColor;
    colorWell.addEventListener("change", () => {
        fillColor = event.target.value}, false);
    colorWell.select();
    makeGrid(16);
  }


function setColor(){
    let input = document.getElementById("color");
    fillColor = input.getAttribute('value');
}


  function makeGrid(size) {
    let sketchpad = document.getElementById("sketchpad");
    sketchpad.style.setProperty('--grid-rows', size);
    sketchpad.style.setProperty('--grid-cols', size);
    for (c = 0; c < (size * size); c++) {
        let cell = document.createElement("div");
        cell.style.border = "1px solid silver";
        cell.addEventListener("click", () => {paintCell(cell)});
        cell.addEventListener("mousedown", () => {paintable = true});  
        cell.addEventListener("mouseup", () => {paintable = false});
        cell.addEventListener("mouseover", () => {if (paintable) {paintCell(cell)}});
        sketchpad.appendChild(cell).className = "grid-item";
    };
}


function paintCell(cell){
    if (eraseMode){
        cell.style['background-color'] = "white";
    } else{
        cell.style['background-color'] = fillColor;
    }   
}


function toggleEraseMode(){
    let button = document.getElementById("erase-toggle");
    if (!eraseMode){
        eraseMode = true;
        button.style["font-weight"] = "bold";
        button.style["background-color"] = "#ffcccc";
        button.style.border = "1px solid red";
    } else {
        eraseMode = false;
        button.style["font-weight"] = "normal";
        button.style["background-color"] = "white";
        button.style.border = "1px solid black";
    }
}

