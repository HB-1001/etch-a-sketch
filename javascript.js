//querySelector for grid-container
let gridContainer = document.body.querySelector(".container");
console.log(gridContainer);

//making default start of grid 16x16 at beginning
const gridInput = document.body.querySelector(".gridInput");

// defining i as a global scope for it to be accessible by buttons
let i = "";
let x = "256";

let startValue = 16;
const startInput = () => (gridInput.value = startValue);
startInput();

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
let mouseoverColor = "red";

// eventlistener for hover/mouseover
// const mouseOver not working because it was using old grids Array, which was erased -
let grids = document.body.querySelectorAll(".grid");
4;
let colorizer = function () {
  grids = document.body.querySelectorAll(".grid");
  grids.forEach((item) =>
    item.addEventListener("mouseover", function (e) {
      e.target.style.backgroundColor = mouseoverColor;
    })
  );
};
colorizer();

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

// single eraser button
let sglEraser = document.body.querySelector(".eraser");

// button set-up - style
let coloredBtn = document.body.querySelectorAll(".coloredBtn");
coloredBtn.forEach((item) => {
  item.style.backgroundColor = item.dataset.id;
  item.style.Color = item.dataset.hover;
  item.addEventListener("mouseover", function (e) {
    item.style.backgroundColor = item.dataset.id;
    item.style.color = item.dataset.hover;
    item.addEventListener("mouseout", function (e) {
      item.style.backgroundColor = item.dataset.id;
      item.style.Color = "black";
    });
  });
});

// button event listener ;; incl. eraser button
coloredBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    grids = document.body.querySelectorAll(".grid");
    grids.forEach((item) =>
      item.addEventListener("mouseover", function (e) {
        mouseoverColor = btn.id;
        e.target.style.backgroundColor = mouseoverColor;
        coloredBtn.forEach((item) => {
          item.style.borderColor = "";
        });
        btn.style.backgroundColor = mouseoverColor;
        btn.style.borderColor= btn.dataset.bdr; 
      })
    );
  });
});

// set red button border at start
redBtn = document.body.querySelector("#red")
redBtn.style.borderColor="rgba(255,255,255,1)";
