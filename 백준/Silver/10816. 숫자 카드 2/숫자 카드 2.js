let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let n = Number(input[0]);
let cards = input[1].split(" ").map((it) => Number(it));
let m = Number(input[2]);
let arr = input[3].split(" ").map((it) => Number(it));

// ------------------------------------------------------------------
let res = [];
let map = new Map();
for (let x of cards) {
  map.set(x, (map.get(x) || 0) + 1);
}

for (let x of arr) {
  res.push(map.get(x) || 0);
}

console.log(res.join(" "));
