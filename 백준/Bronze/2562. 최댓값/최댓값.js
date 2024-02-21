let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr = arr.map((it) => Number(it));

let max = Math.max(...arr);
console.log(max);
console.log(arr.indexOf(max) + 1);
