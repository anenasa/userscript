// ==UserScript==
// @name        臺鐵時刻查詢自動填入
// @namespace   Violentmonkey Scripts
// @match       https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip112/gobytime*
// @grant       none
// @version     1.0
// @author      -
// @description 2025/6/29 上午11:17:17
// ==/UserScript==

(function() {
    start_station = document.querySelector("#startStation");
    start_station.value = "7210-礁溪";
    end_station = document.querySelector("#endStation");
    end_station.value = "7160-羅東";

    date = new Date();
    hour = String(date.getHours()).padStart(2, '0');
    minute = String(date.getMinutes()).padStart(2, '0');
    time = `${hour}:${minute}`;
    start_time = document.querySelector('#startTime');
    start_time.value = time;
})();
