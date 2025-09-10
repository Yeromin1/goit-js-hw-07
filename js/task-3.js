"use strict";

const input = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

input.addEventListener("input", function () {
  let name = input.value.trim();

  if (name === "") {
    name = "Anonymous";
  }

  nameOutput.textContent = name;
});
