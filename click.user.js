// ==UserScript==
// @name        Click to scroll
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.5
// @author      -
// @description 2025/9/2 下午1:45:43
// ==/UserScript==

let zoom = window.innerWidth / document.documentElement.scrollWidth;
let size = 20 / zoom  + "vmin";

let btnDown = document.createElement("div");
btnDown.style.position = "fixed";
btnDown.style.top = "40vh";
btnDown.style.left = "0";
btnDown.style.width = size;
btnDown.style.height = size;
btnDown.style.border = "thin solid black";
btnDown.style.zIndex = "9999";
btnDown.addEventListener("click", btnDown_click, false);
document.body.appendChild(btnDown);

let btnUp = document.createElement("div");
btnUp.style.position = "fixed";
btnUp.style.top = "40vh";
btnUp.style.right = "0";
btnUp.style.width = size;
btnUp.style.height = size;
btnUp.style.border = "thin solid black";
btnUp.style.zIndex = "9999";
btnUp.addEventListener("click", btnUp_click, false);
document.body.appendChild(btnUp);

function btnDown_click(){
  console.log("click");
  window.scrollBy(0, window.innerHeight * 0.9 / zoom);
}

function btnUp_click(){
  console.log("click");
  window.scrollBy(0, -window.innerHeight * 0.9 / zoom);
}
