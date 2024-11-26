// ==UserScript==
// @name        Mobile01 自動前往外部連結
// @namespace   Violentmonkey Scripts
// @match       https://*.mobile01.com/*
// @grant       none
// @version     1.4
// @author      anenasa
// @description 2024/9/23 上午9:31:18
// ==/UserScript==

//Redirect external link automatically
if(window.location.pathname == "/externallink.php"){
  params = new URLSearchParams(window.location.search);
  document.location = params.get("url");
}

//Hide open in app button
document.querySelector("div.app-btn").style.display = "none";
