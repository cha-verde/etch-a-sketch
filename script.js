const container = document.querySelector(".container");

function makeGrid(number) {
    for (let i = 0; i < number * number; i++) {
        const div = document.createElement("div");
        const gridWidth = 640 / number;
        console.log(gridWidth);
        div.style.minWidth = `${gridWidth}px`;
        div.style.height = `${gridWidth}px`;
        div.style.backgroundColor = 'white';
        div.style.border = '0.5px solid black';
        div.style.boxSizing = 'border-box';
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        });
        container.appendChild(div);
    }
}

makeGrid(16);

const changeGridButton = document.querySelector("#changeGridButton");

changeGridButton.addEventListener('click', () => {
    let value = prompt("Enter the number:")
    if(value > 100){
        alert('Cannot be higher than 100!');
    }
    else{
        container.replaceChildren();
        makeGrid(value);
    }
});