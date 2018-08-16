//Global variables
const grid = document.getElementById("grid");
const gridSize = 500;
let cellSize;
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGrid);


//calculates cell size => returns number
function setCellSize(width){
  cellSize = Math.floor(gridSize/width);
  return cellSize;
}

//Make grid
function gridMaker(width){
  for(let i=1; i<=width*width;i++){
    let cell = document.createElement("div");
    grid.appendChild(cell);
    cell.setAttribute("class", "cells");
    setCellSize(width);
    cell.style.setProperty('--width', cellSize+"px");
    cell.style.setProperty('--height', cellSize+"px");
    //this probably should be somewhere else
    cell.addEventListener("mouseover", ()=>cell.style.backgroundColor = "#da6177");
  }
}
gridMaker(16);



////////////Reset
function resetGrid(){
  //no number validation, please just input numbers
  let input = prompt("Input number between 10 and 64");
  if(input<10){
    alert("Please input a number higher than 9");
  }else if(input>64){
    alert("Please input a number lower than 65")
  }else{
    let parent = document.getElementById("grid");
    let divList = parent.children;
    while (0<divList.length){
      parent.removeChild(divList[0]);
    }
  gridMaker(input);
  }
}
