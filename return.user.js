// ==UserScript==
// @name        return
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.0
// @author      -
// @description 2025/9/15 下午8:46:59
// ==/UserScript==

(function() {
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            console.log("Returned from another page via back button! 🔙");
            console.log(window.innerWidth);
        }
    });

})();
