// ==UserScript==
// @name        return
// @namespace   Violentmonkey Scripts
// @match       *://*/*
// @grant       none
// @version     1.1
// @author      -
// @description 2025/9/15 下午8:46:59
// ==/UserScript==

(function() {
    window.addEventListener('pageshow', (event) => {
        if (event.persisted) {
            console.log("Returned from another page via back button! 🔙");
            console.log(window.innerWidth);
            if(window.innerWidth == 515) {
                document.body.style.zoom = 2;
            }
        }
    });

})();
