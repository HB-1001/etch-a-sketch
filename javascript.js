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
// const mouseOver not working because it was using old grids Array, which was erased
let grids = document.body.querySelectorAll(".grid");
grids.forEach((item) =>
  item.addEventListener("mouseover", function (e) {
    e.target.style.backgroundColor = mouseoverColor;
  })
);

// trial button 8x8, to make grid into 8 / try repeat 100% to fill whole box
eightEightButton = document.body.querySelector(".eightEight");
eightEightButton.addEventListener("click", function (e) {
  grids.forEach((item, index, object) => item.parentNode.removeChild(item));
  gridContainer.style.gridTemplateColumns = `repeat(8, 20px)`;
  gridContainer.style.gridTemplateRows = "repeat(8, 20px)";
  x = 8 * 8;
  gridsetup();
  grids = document.body.querySelectorAll(".grid");
  grids.forEach((item) =>
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = mouseoverColor;
    })
  );
});
