require("./sum.js");
// calculateSum(2,3);
const {calculateSum,as}=require("./sum.js");
var as=23;
console.log(as,calculateSum(2,3));
console.log("In app.js",as);