const robotjs = require("robotjs"),
      monitor = require("active-window");

function minutes(n) {
    return n * seconds(60);
}
function seconds (n) {
    return n * 1000;
}
setInterval(() => {
    monitor.getActiveWindow((w) => console.log("active window",w))
},1000)



