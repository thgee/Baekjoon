let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split(" ");

let a = Number(arr[0]) - Number(arr[1]);

if(a > 0)
console.log(">");
if(a < 0)
console.log("<");
if(a === 0)
console.log("==");