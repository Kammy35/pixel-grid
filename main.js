
const pixelGrid = [];
//create empty grid//

let rows = 9;
let cols = 9;
//create's two variables for rows and columns//

for (let i =0; i < rows; i++){
    pixelGrid.push([]);
    for (let j=0; j < cols; j++){
        pixelGrid[i].push({name: "div"})
    }
}
// created columns and rows for the grid using a for loop//
//console.log(pixelGrid) check if pixel grid is working//

let row = document.querySelector(".pixelGrid")
// we grab the div 'pixel grid' from html//

for (let i=0; i < pixelGrid.length; i++){
    row.innerHTML += "<div class='row'></div>"
    // adding rows to the pixel grid on html using for loop//

for (let j=0; j < pixelGrid[0].length; j++){
    document.getElementsByClassName("row")[i].innerHTML += "<div class='col'></div>"
}   // adding columns to the rows//

}

let rowNumbers = document.createElement("div");
rowNumbers.classList.add("rowNumbers");
let colNumbers = document.createElement("div");
colNumbers.classList.add("colNumbers");
// created the numbers for the columns and rows//

document.getElementsByClassName('container')[0].prepend(rowNumbers);
document.getElementsByClassName('container')[0].prepend(colNumbers);
// grabbing the container div and put the row numbers and column numbers inside of it//

let grabRowNumbers = document.getElementsByClassName('rowNumbers')[0];
let grabColNumbers = document.getElementsByClassName('colNumbers')[0];
// selecting the rowNumbers and colNumbers div//

for (let i=0; i < rows; i++){
    grabRowNumbers.innerHTML += `<div class='number'>${i+1}</div>`
}

for (let i=0; i < cols; i++){
    grabColNumbers.innerHTML += `<div class='number'>${i+1}</div>`
}
// we are adding the numbers to the rows and columns index//

function addSquare(colNumber, rowNumber, color) {
    document.getElementsByClassName('row')[rowNumber - 1].getElementsByClassName('col')[colNumber - 1].style.backgroundColor = color;
}
// created a function to first access the row, then access the column and then add some styling//

function createRow (rowNumber, colStart, colFinish, color){
    let myRow = document.getElementsByClassName('row')[rowNumber - 1];
    //this selects the row i want to choose//

    for (let i =(colStart - 1); i < colFinish; i++){
        myRow.getElementsByClassName('col')[i].style.backgroundColor = color;
        //running a for loop to access the columns inside of the row and where we//
        //want to start and finish//
    }
}

function createCol(colNumber, rowStart, rowFinish, color){
    for (let i=(rowStart -1); i < rowFinish; i++){
        document.getElementsByClassName('row')[i].getElementsByClassName('col')[colNumber -1].style.backgroundColor = color;
    } // first select the column, then run a for loop to access the row to start and finish, then add some styling//
}


addSquare(8, 2, "yellow");
addSquare(8, 4, "lightblue");
addSquare(9, 5, "lightblue");

createRow(3, 2, 7, "lightblue");
createRow(4, 5, 6, "lightblue");


createCol(3, 2, 6, "green");





