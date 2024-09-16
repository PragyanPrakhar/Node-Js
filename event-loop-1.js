const fs = require("fs");
const a = 100;

setImmediate(() => console.log("setImmediate"));

fs.readFile("./file.txt", "utf8", () => {
    console.log("File Reading CB");
});

setTimeout(() => console.log("Timer expired"), 0);
// setTimeout(()=>console.log("TIme 2 expired"),200);
function printA() {
    console.log("a=", a);
}

printA();
console.log("Last line of the file.");

//this file read operation happens in the poll phase but still the callback inside the setTimeOut will be printed first because at that time that libuv will be reading  that file.

// a=100
// Last line of the file.
// Timer expired
// setImmediate
// File Reading CB
