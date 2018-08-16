const grid = document.getElementById("grid");
const gridSize = 500;
let cellSize;
let cells = document.querySelectorAll(".cells");

function setCellSize(width){
  cellSize = Math.floor((width/gridSize)* 1000);

  return cellSize;
}
let color;
let colors = ["#D99F7E", "#EFDFC8", "#6A91B2", "#2C0216", "#590A27"];
function pickColor(colors){
  color = colors[Math.floor(Math.random() * colors.length)];
  console.log(color);
  return color;

}
function gridMaker(width){

  for(let i=1; i<=width*width;i++){
    //debugger;
    let cell = document.createElement("div");
    grid.appendChild(cell);
    cell.innerHTML = i;

    cell.setAttribute("class", "cells");
    setCellSize(width);
    cell.style.setProperty('--width', cellSize+"px");
    cell.style.setProperty('--height', cellSize+"px");

    cell.addEventListener("mouseover", ()=>cell.style.backgroundColor = "#da6177");
  }
}
gridMaker(32);



////////////Reset
function resetGrid(){
  let input = prompt("Input number of cells or something!");

  let parent = document.getElementById("grid");
  let divList = parent.children;


  while (0<divList.length){

    parent.removeChild(divList[0]);

  }
  gridMaker(input, input);
}
//--------------------------------------------------------------------------
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGrid);
