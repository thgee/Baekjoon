let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

arr = arr.map((it) => it.split(" ").map((it) => Number(it)));
arr.shift();
let ar = arr[0];
let n = arr[1][0];
console.log(ar.reduce((acc, cur) => (cur === n ? acc + 1 : acc), 0));
