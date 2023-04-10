const form = document.querySelector("form");
const body = document.querySelector("body");
const button = document.querySelector(".submit");
const usernameEl = document.querySelector(".name");
const emailEl = document.querySelector(".email");

form.addEventListener("submit", (e) => {
  // e.preventDefault();

  alert("You volunteered");
  console.log("successfully submitted");
});

// const isEmailValid = (email) => {
//   const re =
//     /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// };

// const checkEmail = () => {
//   let valid = false;
//   const email = emailEl.value.trim();
//   if (!isRequired(email)) {
//     showError(emailEl, "Email cannot be blank.");
//   } else if (!isEmailValid(email)) {
//     showError(emailEl, "Email is not valid.");
//   } else {
//     showSuccess(emailEl);
//     valid = true;
//   }
//   return valid;
// };
// button.addEventListener("click", (e) => {
//   form.style.display = "block";
//   e.preventDefault();
//   // form.style.display = "none";

//   console.log("Button Clicked");
// });

// botton.addEventListener;
// // form.addEventListener("submit ", (e) => {
// //   form.display.background-Ccolor = "White";
// // });
