// ==UserScript==
// @name         tamperMonkeyScript
// @version      6.666
// @description  Running code from different IDE
// @author       Juhair
// @match        *://*/*
// @require      file:///home/juhu/Documents/tamperMonkey/src/basicStructure.js
// ==/UserScript==

(() => {
  let reloadingTime = 66666;
  setInterval(() => {
    if (!document.hasFocus()) {
      window.location.reload();
    }
  }, reloadingTime);
})();
