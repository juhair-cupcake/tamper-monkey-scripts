//add css
(() => {
  let styles = document.createElement("style");
  styles.setAttribute("type", "text/css");
  document.head.appendChild(styles).textContent = `
    .uwu {
        background-color: blueviolet;
    }
  `;
})();
// all code js
(() => {  
  // log it
  const log = (e) => {
    if (e) {
      console.debug(e);
    } else {
      console.debug("%c<--here-->", "text-align: center; background: red; color: white; padding: 5px; display: block; margin: 0 auto;");
    }
  };
  // re-useable polling function
  const waitForEle = (elementQuery, callback) => {
   let loopTime = 404;
   let waitTime = 25;
   (function waitAndRetry() {
      let givenElement = document.querySelector(elementQuery);
      if (givenElement) {
        try {
          callback(givenElement);
        } catch (e) {
          e = e;
        }
      } else {
        if (--loopTime) {
          setTimeout(waitAndRetry, waitTime);
        }
        }
    })();
  };
  /*
    Main 👑 JS code starts 👇
    wait 😴 before ⌛ the site is ready👍!
  */
  waitForEle("body", (e) => {
    if (e) {
      // inject class for CSS
      e.classList.add("uwu");
      log(e);
    }
  });
})();