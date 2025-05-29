"use strict";

const items = categories.querySelectorAll(".item");

console.log(`Number of categories: ${items.length}`);

items.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelectorAll("ul li").length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});

// item.forEach((element) => {
//   console.log("Category:", element.firstElementChild.textContent);
//   console.log("Elements:", element.lastElementChild.children.length);
// });
