const robotjs = require("robotjs"),
      activeWin = require("active-win");

function minutes(n) {
    return n * seconds(60);
}
function seconds (n) {
    return n * 1000;
}
function isSaiWindow(w) {
    console.log("active window",w)
    if(/sai/i.test(w.owner.name)) {
        console.log('saving file');
        robotjs.keyTap("s","control");
    }
}
var timeout (ms)=> new Promise ((s,f) => setTimeout(s,ms))

setInterval(() => {
    activeWin()
        .then(isSaiWindow)
},minutes(2));



