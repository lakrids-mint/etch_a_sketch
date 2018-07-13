

function gridMaker(height, width){

  for(let i=1; i<=width*height;i++){
    let cell = document.createElement("div");
    cell.textContent =i;
    cell.setAttribute("class", "cells");
    cell.addEventListener("mouseover", ()=>cell.style.backgroundColor = "red");
    grid.appendChild(cell);
  }
}
gridMaker(16,16);

//--------------------------------------------------------------------------
let resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetGrid);


function resetGrid(){
  let input = prompt("Input number of cells or something!");

  let parent = document.getElementById("grid");
  let divList = parent.children;


  while (0<divList.length){

    parent.removeChild(divList[0]);

  }
  gridMaker(input, input);
}
