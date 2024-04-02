
let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map((it)=>Number(it));


arr.sort((n, p)=>(n - p));

console.log(arr.join(" "))