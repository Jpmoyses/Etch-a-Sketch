const container = document.querySelector(".container");


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

function updateButton(){
    colorButtons.forEach((button) => {
        button.classList.remove("selected");
    })
}



for (let i = 0; i < 16; i++){
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++){
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

function removePreviousColor(square){
    square.classList.remove("color", "color2", "color3");
}