let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let n = arr.reduce((acc, cur) => acc * Number(cur), 1);

let map = new Map();
n = String(n);

for (let x of n) {
  map.set(x, (map.get(x) || 0) + 1);
}
for (let i = 0; i <= 9; i++) {
  if (map.has(String(i))) console.log(map.get(String(i)));
  else console.log(0);
}
