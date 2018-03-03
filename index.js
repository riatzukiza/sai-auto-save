const robotjs = require("robotjs"),
      activeWin = require("active-win");

function minutes(n) {
    return n * seconds(60);
}
function seconds (n) {
    return n * 1000;
}
function saveSai(w) {
    console.log("active window",w);
    if(/sai/i.test(w.owner.name)) {
        console.log('saving file');
        robotjs.keyTap("s","control");
    }
}
var timeout = (ms) => new Promise ((s,f) => setTimeout(s,ms)),
    bind = (f,...b) => (...args) => f(...b,...args);


var autosave = (i) => activeWin()
    .then(saveSai)
    .then(bind(timeout,minutes(2)))
    .then(bind(autosave,i));

autosave(minutes(2))



