//querySelector for grid-container
let gridContainer = document.body.querySelector(".container");
console.log(gridContainer);

//making default start of grid 16x16 at beginning
const gridInput = document.body.querySelector(".gridInput");

// defining i as a global scope for it to be accessible by buttons
let i = "";
let x = "";


//creating grids using loop
const gridsetup = function () {
  for (i = 0; i <= x - 1; i++) {
    let gridBox = document.createElement("div");
    gridBox.setAttribute("class", "grid");
    // gridBox.textContent="text"
    gridContainer.appendChild(gridBox);
  }
};

//color of mouseover
let mouseoverColor = "black";

// eventlistener for hover/mouseover
// const mouseOver not working because it was using old grids Array, which was erased -
let grids = document.body.querySelectorAll(".grid");
let colorizer = function () {
  grids = document.body.querySelectorAll(".grid");
  grids.forEach((item) =>
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = mouseoverColor;
    })
  );
};

// canvas size buttons / try repeat 100% to fill whole box
const gridDimension = document.body.querySelectorAll(".canvasSize");
gridDimension.forEach((canvas) =>
  canvas.addEventListener("click", function (e) {
    gridInput.value = e.target.id;
    gridInput.dispatchEvent(new Event("change"));
  })
);

// //Cleanup, erase all button
let cleaner = document.body.querySelector(".cleanUp");
cleaner.addEventListener("click", function (e) {
  grids.forEach((item) => (item.style.backgroundColor = "white"));
});

// //user input for grid size / box size changer uses this too/
gridInput.addEventListener("change", function (e) {
  grids.forEach((item, index, object) => item.parentNode.removeChild(item));
  gridContainer.style.gridTemplateColumns = `repeat(${e.target.value}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${e.target.value}, 1fr)`;
  x = `${e.target.value * e.target.value}`;
  gridsetup();
  colorizer();
});

let startValue = 16;
const startGrid = () => (gridInput.value = startValue);
gridInput.dispatchEvent(new Event("change"));
startGrid();
