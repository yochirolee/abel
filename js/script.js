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

/* var el = document.getElementById("sidebar");
var el = document.getElementById("label-nav-toggle");


document.addEventListener("click", function (event) {
  var isClickInside = event.composedPath().includes(el );
  console.log(isClickInside)

  if (isClickInside || event.composedPath().includes( ) ) {
    console.log("You clicked inside");
    document.getElementById("nav-toggle").checked = true;
  } else {
    console.log('outside');
   
        document.getElementById("nav-toggle").checked = false;
  }
}); */
