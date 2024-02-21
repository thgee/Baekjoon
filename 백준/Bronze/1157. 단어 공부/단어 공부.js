let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim();

let map = new Map();

for (let x of arr.toUpperCase()) {
  map.set(x, (map.get(x) || 0) + 1);
}
let max = 0;
let char;
for (let [k, v] of map) {
  if (Number(v) > max) {
    max = Number(v);
    char = k;
  } else if (Number(v) === max) {
    char = "?";
  }
}
console.log(char);
