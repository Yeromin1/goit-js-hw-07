"use strict";

const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = form.elements.email.value.trim().toLowerCase();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: email,
    password: password,
  };

  console.log(formData);

  form.reset();
});

// function handleSubmit(e) {
//   e.preventDefault();

//   const form = e.currentTarget;
//   const email = form.elements.email.value.trim().toLowerCase();
//   const password = form.elements.password.value.trim();

//   if (email === "" || password === "") {
//     return alert("Please fill in all the fields!");
//   }

//   console.log(`${email}, ${password}`);
//   form.reset();
// }
