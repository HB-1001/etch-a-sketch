//querySelector for grid-container
let gridContainer = document.body.querySelector(".container");
console.log(gridContainer);

// defining i as a global scope for it to be accessible by buttons

let i = 0;
let x = 256;

//creating grids using loop
const gridsetup = function () {
  for (i = 0; i <= x - 1; i++) {
    let gridBox = document.createElement("div");
    gridBox.setAttribute("class", "grid");
    // gridBox.textContent="text"
    gridContainer.appendChild(gridBox);
  }
};
gridsetup();

//color of mouseover
let mouseoverColor = "black";

// eventlistener for hover/mouseover
// const mouseOver not working because it was using old grids Array, which was erased - can we make this a function?
let grids = document.body.querySelectorAll(".grid");
grids.forEach((item) =>
  item.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = mouseoverColor;
  })
);

// canvas size buttons / try repeat 100% to fill whole box
const gridDimension = document.body.querySelectorAll(".canvasSize");
gridDimension.forEach((canvas) =>
  canvas.addEventListener("click", function (e) {
    grids.forEach((item, index, object) => item.parentNode.removeChild(item));
    gridContainer.style.gridTemplateColumns = `repeat(${e.target.id}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${e.target.id}, 1fr)`;
    x = `${e.target.id * e.target.id}`;
    gridsetup();
    grids = document.body.querySelectorAll(".grid");
    grids.forEach((item) =>
      item.addEventListener("mouseover", function (e) {
        e.target.style.backgroundColor = mouseoverColor;
      })
    );
  })
);

// //Cleanup, erase all button
let cleaner = document.body.querySelector('.cleanUp')
cleaner.addEventListener('click', function(e) {
  grids.forEach(item => item.style.backgroundColor="white");
})

// //user prompt for grid size
// prompt/input launches function :
// grids.forEach((item, index, object) => item.parentNode.removeChild(item));
// gridContainer.style.gridTemplateColumns = `repeat(${e.target.id}, 1fr)`;
// gridContainer.style.gridTemplateRows = `repeat(${e.target.id}, 1fr)`;
// x = `${e.target.id * e.target.id}`;
// gridsetup();
// grids = document.body.querySelectorAll(".grid");
// grids.forEach((item) =>
//   item.addEventListener("mouseover", function (e) {
//     e.target.style.backgroundColor = mouseoverColor;
