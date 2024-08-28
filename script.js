const container = document.querySelector(".gridContainer");

function randomColor(){
    return Math.floor(Math.random() * 256);
}

function makeGrid(number) {
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement("div");
        div.setAttribute("class", "gridSquare")
        const gridWidth = 640 / number;
        div.style.minWidth = `${gridWidth}px`;
        div.style.height = `${gridWidth}px`;
        div.style.border = '1px solid black';
        div.style.backgroundColor = 'rgba(255, 255, 255, 0.99)';
        div.style.boxSizing = 'border-box';
        container.appendChild(div);

        div.addEventListener('mouseover', () => {
            const bgColor = div.style.backgroundColor;
            const op = parseFloat(bgColor.split(',')[3]);
            console.log(bgColor);
            console.log(op)

            if(bgColor.startsWith('rgb') && getComputedStyle(div).borderWidth == "2px"){
                div.style.backgroundColor = "rgba(0, 0, 0, 1)";
            
            }
            else if(op == 0.99 && getComputedStyle(div).borderWidth == "1px"){
                div.style.border = '1px solid black';
                div.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
            }
            else if(op == 0.9){
                div.style.backgroundColor = "rgba(0, 0, 0, 1)";
                div.style.border = '2px solid black';
            }
            else{
                const newOpacity = op + 0.10;
                div.style.border = '1px solid black';
                div.style.backgroundColor = "rgba(0, 0, 0, "+newOpacity+")";
            }
        });
    }
}

makeGrid(16);

const changeGridButton = document.querySelector("#changeGridButton");

changeGridButton.addEventListener('click', () => {
    let value = prompt("Enter the number:")
    if(value > 100){
        alert('Cannot be higher than 100!');
    }
    else if(value == null){
    }
    else{
        container.replaceChildren();
        makeGrid(value);
    }
});

document.title = "Etch-a-Sketch";