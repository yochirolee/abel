"use strict";
let visible = false;

const userWrapper = document.querySelector(".user-wrapper");
const sideBar = document.querySelector(".sidebar");

window.addEventListener(
  "resize",
  function () {
    if (window.matchMedia("(min-width: 480px)").matches) {
      document.getElementById("nav-toggle").checked = false;
    }
  },
  true
);

userWrapper.addEventListener("click", function () {
  visible = !visible;
  visible
    ? document.querySelector(".user-actions").classList.add("visible")
    : document.querySelector(".user-actions").classList.remove("visible");
});

document.addEventListener("click", function (event) {
  var isClickInside = event.composedPath().includes(sideBar);
  if (window.innerWidth <= 600)
    if (!isClickInside && sideBar.clientWidth != 70) {
      document.getElementById("nav-toggle").checked = false;
    }
});
