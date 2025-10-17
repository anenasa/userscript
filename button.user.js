// ==UserScript==
// @name        button scroll
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.2
// @author      -
// @description 2025/10/17 下午8:33:30
// ==/UserScript==

(function() {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode == 13) {
        event.preventDefault();
        window.scrollBy(0, window.innerHeight * 0.9);
      }
      else if (event.keyCode == 0) {
        event.preventDefault();
        window.scrollBy(0, -window.innerHeight * 0.9);
      }
    })
})();
