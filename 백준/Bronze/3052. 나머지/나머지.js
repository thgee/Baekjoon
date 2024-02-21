let fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let arr = fs.readFileSync(filePath).toString().trim().split("\n");

let set = new Set();

for (let x of arr) {
  set.add(x % 42);
}
console.log(set.size);
