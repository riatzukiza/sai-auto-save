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
        robotjs.keyTap("s","control");
    }
}
setInterval(() => {
    activeWin()
        .then(isSaiWindow)
},1000);



