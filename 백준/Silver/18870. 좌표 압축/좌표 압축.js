let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = input.shift();

let arr = input[0].split(" ").map((it) => Number(it));
let set = new Set(arr.slice().sort((n, p) => n - p));
let rank = {};

let i = 0;
for (let x of set) {
  rank[x] = i++;
}
let res = [];
for (let i = 0; i < arr.length; i++) {
  res.push(rank[arr[i]]);
}

console.log(res.join(" "));
