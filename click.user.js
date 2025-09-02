// ==UserScript==
// @name        Click to scroll
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2025/9/2 下午1:45:43
// ==/UserScript==

let btnDown = document.createElement("div");
btnDown.style.position = "fixed";
btnDown.style.bottom = "0";
btnDown.style.left = "0";
btnDown.style.width = "50px";
btnDown.style.height = "50px";
btnDown.style.border = "thin solid black";
btnDown.style.zIndex = "9999";
btnDown.addEventListener("click", btnDown_click, false);
document.body.appendChild(btnDown);

let btnUp = document.createElement("div");
btnUp.style.position = "fixed";
btnUp.style.bottom = "50px";
btnUp.style.left = "0";
btnUp.style.width = "50px";
btnUp.style.height = "50px";
btnUp.style.border = "thin solid black";
btnUp.style.zIndex = "9999";
btnUp.addEventListener("click", btnUp_click, false);
document.body.appendChild(btnUp);

function btnDown_click(){
  console.log("click");
  window.scrollBy(0, window.innerHeight * 0.8);
}

function btnUp_click(){
  console.log("click");
  window.scrollBy(0, -window.innerHeight * 0.8);
}
