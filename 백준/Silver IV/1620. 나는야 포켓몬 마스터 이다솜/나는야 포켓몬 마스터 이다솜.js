let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");
let [m, n] = input
  .shift()
  .trim()
  .split(" ")
  .map((it) => Number(it));

let names = input.slice(0, m).map((it) => it.trim());
let arr = input.slice(m).map((it) => it.trim());
let res = [];

let map = new Map();
for (let i = 0; i < names.length; i++) {
  map.set(names[i], i);
}

for (let x of arr) {
  if (isNaN(x)) {
    res.push(map.get(x) + 1);
  } else {
    res.push(names[Number(x) - 1]);
  }
}

console.log(res.join("\n"));
