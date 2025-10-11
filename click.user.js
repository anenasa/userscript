// ==UserScript==
// @name        Click to scroll
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.9
// @author      -
// @description 2025/9/2 下午1:45:43
// ==/UserScript==

let zoom = window.innerWidth / document.body.scrollWidth;
let size = 20 / zoom  + "vmin";
let border = "thin solid black";

window.addEventListener("resize", function () {
  // Original zoom is wrong if page is open in new tab
  zoom = window.innerWidth / document.body.scrollWidth;
  size = 20 / zoom  + "vmin";
  btnDown.style.width = size;
  btnDown.style.height = size;
  btnUp.style.width = size;
  btnUp.style.height = size;
  btnBack.style.width = size;
  btnBack.style.height = size;
});

let btnDown = document.createElement("div");
btnDown.style.position = "fixed";
btnDown.style.bottom = 50 / zoom + "vh";
btnDown.style.left = "0";
btnDown.style.width = size;
btnDown.style.height = size;
btnDown.style.border = border;
btnDown.style.zIndex = "9999";
btnDown.addEventListener("click", function(){
  window.scrollBy(0, window.innerHeight * 0.9);
});
document.body.appendChild(btnDown);

let btnUp = document.createElement("div");
btnUp.style.position = "fixed";
btnUp.style.top = 40 / zoom + "vh";
btnUp.style.right = "0";
btnUp.style.width = size;
btnUp.style.height = size;
btnUp.style.border = border;
btnUp.style.zIndex = "9999";
btnUp.addEventListener("click", function(){
  window.scrollBy(0, -window.innerHeight * 0.9);
});
document.body.appendChild(btnUp);

let btnBack = document.createElement("div");
btnBack.style.position = "fixed";
btnBack.style.top = 50 / zoom + "vh";
btnBack.style.left = "0";
btnBack.style.width = size;
btnBack.style.height = size;
btnBack.style.border = border;
btnBack.style.zIndex = "9999";
btnBack.addEventListener("click", function(){
  history.back();
});
document.body.appendChild(btnBack);
