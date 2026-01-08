// ==UserScript==
// @name        C_Chat go back
// @namespace   Violentmonkey Scripts
// @match       https://www.ptt.cc/bbs/C_Chat/index*
// @grant       none
// @version     2.0
// @author      -
// @description 2026/1/8 上午10:32:34
// ==/UserScript==

"use strict";
(async function() {
  // Get previous date
  let date_today = document.querySelector(".date").textContent.split('/')[1];
  let current = Date.parse("2026/" + document.querySelector(".date").textContent);
  let yesterday = new Date(current - 86400000);
  let date_yesterday = String(yesterday.getDate()).padStart(2, '0');

  let btn_old = document.querySelector(".btn-group-paging a");
  let btn_prev = document.querySelectorAll(".btn-group-paging a")[1];
  btn_old.href = `${btn_prev.href}#${date_yesterday}`;

  window.addEventListener('pageshow', (event) => {
    let hash = window.location.hash.substring(1);
    const entries = performance.getEntriesByType("navigation");
    const isBackForward = entries.length > 0 && entries[0].type === 'back_forward';
    console.log(`${event.persisted}/${isBackForward}`)
    if (event.persisted || isBackForward) return;
    if (!hash || date_today == hash) return;
    setTimeout(() => {
      //history.pushState(null, "", window.location.href);
      window.location.href = `${btn_prev.href}#${date_yesterday}`;
    }, 1);
  });

})();
