let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");
arr.shift();
arr = arr[0].split(" ").map((it) => Number(it));
let res = [];
res.push(Math.min(...arr), Math.max(...arr));
console.log(res.join(" "));
