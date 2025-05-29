"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

changeColorButton.addEventListener("click", () => {
  const randomColor = getRandomHexColor();

  document.body.style.backgroundColor = randomColor;

  colorSpan.textContent = randomColor;
});

// const btn = document.querySelector(".change-color");
// const color = document.querySelector(".color");

// btn.addEventListener("click", () => {
//   document.body.style.backgroundColor = getRandomHexColor();
//   color.textContent = getRandomHexColor();
// });
