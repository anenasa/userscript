// ==UserScript==
// @name        臺鐵訂票自動填入
// @namespace   Violentmonkey Scripts
// @match       https://www.railway.gov.tw/tra-tip-web/tip/tip001/tip123/query*
// @grant       none
// @version     1.0
// @author      -
// @description 2025/7/1 上午8:34:34
// ==/UserScript==

(function() {
    start_station = document.querySelector("#startStation");
    start_station.value = "7160-羅東";
    end_station = document.querySelector("#endStation");
    end_station.value = "7210-礁溪";

    date = new Date();
    hour = String(date.getHours()).padStart(2, '0');
    minute = String(date.getMinutes()).padStart(2, '0');
    time = `${hour}:${minute}`;
    start_time = document.querySelector('#rideDateTime1');
    start_time.value = time;

    train_no = document.querySelector('#trainNoList1');
    train_no.value = '219';

    id = document.querySelector('#pid');
    id.value = 'G12';
})();
