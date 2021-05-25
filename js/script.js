"use strict";
let visible = false;

const userWrapper = document.querySelector(".user-wrapper");


userWrapper.addEventListener("click", function () {
  visible = !visible;
  visible
    ? document.querySelector(".user-actions").classList.add("visible")
    : document.querySelector(".user-actions").classList.remove("visible");
});
