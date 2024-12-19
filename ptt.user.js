// ==UserScript==
// @name        ptt 自動開圖
// @namespace   anenasa
// @match       https://www.ptt.cc/bbs/*
// @grant       none
// @version     1.0
// @author      anenasa
// @description 2024/12/19 下午1:47:19
// ==/UserScript==
(function() {
  atags = document.querySelectorAll("a");
  for(atag of atags){
    href = atag.getAttribute("href");
    src = "";
    if(href.includes("i.imgur.com/")){
      src = href;
    }
    else if(href.includes("pbs.twimg.com/media/") && href.includes("?")){
      src = href;
    }

    if(src){
      img = document.createElement("img");
      img.setAttribute("src", href);
      if(src.includes("i.imgur.com/")){
        img.referrerPolicy="no-referrer";
      }
      atag.insertAdjacentElement("afterend", img);
    }
  }
})();
