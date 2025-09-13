// ==UserScript==
// @name        ptt 自動開圖
// @namespace   anenasa
// @match       https://www.ptt.cc/bbs/*
// @grant       GM.xmlHttpRequest
// @version     1.6
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
      // Example: https://www.ptt.cc/bbs/C_Chat/M.1751187722.A.732.html
      let resp = await fetch(href);
      let text = await resp.text();
      text = text.split('id="__NUXT_DATA__">')[1].split("</script>")[0];
      j = JSON.parse(text);
      src_array = ['https://i.meee.com.tw/' + j[12]];
    }
    else if(href.startsWith("https://postimg.cc/")){
      // Example: https://www.ptt.cc/bbs/C_Chat/M.1757458801.A.0B3.html
      let resp = await GM.xmlHttpRequest({url: href});
      let text = resp.responseText;
      let image = text.split('<meta property="og:image" content="')[1].split('"')[0];
      src_array = [image];
    }
    else if(href.endsWith(".webp")){
      // Example: https://www.ptt.cc/bbs/AC_In/M.1751536587.A.8F3.html
      src_array = [href];
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
