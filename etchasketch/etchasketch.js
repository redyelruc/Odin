

function addGridToSketchpad(size){
    for (let i = 0; i < size; i ++){
        makeRow(size);
    }
}

function makeRow(size){
    let sketchpad = document.getElementById("sketchpad");
    console.log(sketchpad);
    for (let i=0;i<size;i++){
        let cell = document.createElement('div');
        cell.id = "cell";
        cell.style.border = "1px solid black";
        let width = size + "fr";
        cell.width = width;
        sketchpad.appendChild(cell); 
    }
}

addGridToSketchpad(10);