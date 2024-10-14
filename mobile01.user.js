// ==UserScript==
// @name        Mobile01 自動前往外部連結
// @namespace   Violentmonkey Scripts
// @match       https://*.mobile01.com/externallink.php*
// @grant       none
// @version     1.1
// @author      anenasa
// @description 2024/9/23 上午9:31:18
// ==/UserScript==
if(window.location.pathname == "/externallink.php"){
  params = new URLSearchParams(window.location.search);
  document.location = params.get("url");
}