const container = document.querySelector(".container");

// changes in the color selected
const colorButtons = document.querySelectorAll(".colorPicker");
let colorSelected = 1;
colorButtons.forEach((button) =>{
    button.addEventListener("click", () =>{
        updateButton();
        if (button.id == "color1"){
            colorSelected = 1;
            button.classList.add("selected");
        }
        else if (button.id == "color2"){
            colorSelected = 2;
            button.classList.add("selected");
        }
        else if (button.id == "color3"){
            colorSelected = 3;
            button.classList.add("selected");
        }
    })
})
// updates the button pressed
function updateButton(){
    colorButtons.forEach((button) => {
        button.classList.remove("selected");
    })
}

// getting the square size
let x = 16;
let containerWidth = container.offsetWidth;
let containerHeight = container.offsetHeight;

function setSquareSize(){
    const squareSize = Math.min(containerWidth, containerHeight) / x;
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
    });
}

// initial build of the grid
function createGrid(){
    if (x == null){
        return;
    }
    container.innerHTML = '';
    for (let i = 0; i < x; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < x; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseover", () =>{
                removePreviousColor(square);
                if(colorSelected == 1){square.classList.add("color");}
                if(colorSelected == 2){square.classList.add("color2");}
                if(colorSelected == 3){square.classList.add("color3");}
            })
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    setSquareSize();
}

// removes all color before adding a new one to the square
function removePreviousColor(square){
    square.classList.remove("color", "color2", "color3");
}

// listener of the change grid button
const changeGrid = document.querySelector(".btn");
changeGrid.addEventListener("click", () =>{
    let size = null;
    while (size < 2 || size > 100 || isNaN(size)==! ""){
        size = prompt("Choose a new number of square per side(maximum of 100):");
    }
    x = size;
    createGrid();
})

createGrid();