// ==UserScript==
// @name        ptt 自動開圖
// @namespace   anenasa
// @match       https://www.ptt.cc/bbs/*
// @grant       none
// @version     1.1
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
    else if(href.includes("imgur.com/")){
      index = href.indexOf("imgur.com");
      src = href.substring(0, index) + "i." + href.substring(index);
      if(!href.includes(".", index + 10)){
        // Append extension to link
        // Assume extension is .jpg,
        // should work even if extension is actually png
        src += ".jpg";
      }
    }
    else if(href.includes("pbs.twimg.com/media/") && href.includes("?")){
      src = href;
    }

    if(src){
      img = document.createElement("img");
      img.setAttribute("src", src);
      if(src.includes("i.imgur.com/")){
        img.referrerPolicy="no-referrer";
      }
      atag.insertAdjacentElement("afterend", img);
    }
  }
})();
