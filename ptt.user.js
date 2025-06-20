// ==UserScript==
// @name        ptt 自動開圖
// @namespace   anenasa
// @match       https://www.ptt.cc/bbs/*
// @grant       none
// @version     1.3
// @author      anenasa
// @description 2024/12/19 下午1:47:19
// ==/UserScript==
(async function() {
  atags = document.querySelectorAll("a");
  for(atag of atags){
    href = atag.getAttribute("href");
    src_array = [];
    if(href.includes("i.imgur.com/")){
      src_array = [href];
    }
    else if(href.includes("imgur.com/a/")){
      // https://www.ptt.cc/bbs/mobilesales/M.1735047842.A.6CB.html
      id = href.split("/").pop();
      let resp = await fetch(`https://api.imgur.com/post/v1/albums/${id}?client_id=546c25a59c58ad7&include=media`, {
        referrer: ""
      });
      let j = await resp.json();

      for(abc of j["media"]){
        src_array.push(abc["url"]);
      }
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
      src_array = [src];
    }
    else if(href.includes("pbs.twimg.com/media/") && href.includes("?")){
      src_array = [href];
    }
    else if(href.startsWith("https://meee.com.tw/") && href.indexOf('.', 20) == -1){
      // Assume extension is .jpg, will probably break for other extensions
      src_array = [href.replace('https://meee.com.tw/','https://i.meee.com.tw/') + '.jpg'];
    }

    for(src of src_array){
      img = document.createElement("img");
      img.setAttribute("src", src);
      if(src.includes("i.imgur.com/")){
        img.referrerPolicy="no-referrer";
      }
      atag.insertAdjacentElement("afterend", img);
    }
  }
})();
